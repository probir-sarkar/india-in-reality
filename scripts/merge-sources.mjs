#!/usr/bin/env node
/**
 * Merge research/<slug>.sources.json packs into src/data/sources.ts.
 * Idempotent: existing ids are left untouched, new ids appended.
 * Usage: node scripts/merge-sources.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const RESEARCH = join(ROOT, "research");
const OUT = join(ROOT, "src/data/sources.ts");

const declared = new Map();
{
  const src = readFileSync(OUT, "utf8");
  // keep existing entries verbatim
  const m = src.match(/export const SOURCES[^=]*= \{([\s\S]*)\};/);
  if (m) {
    for (const em of m[1].matchAll(/^\s{2}"?([\w-]+)"?:\s*\{/gm)) declared.set(em[1], null);
  }
}
// capture full existing entry blocks to preserve them
const existingSrc = readFileSync(OUT, "utf8");
const entryBlocks = new Map();
for (const em of existingSrc.matchAll(/\n  "?([\w-]+)"?: \{[\s\S]*?\n  \},/g)) {
  entryBlocks.set(em[1], em[0].replace(/^\n/, "").replace(/^  [^\n]+/, `  "${em[1]}": {`));
}

let added = 0;
for (const f of readdirSync(RESEARCH).filter((x) => x.endsWith(".sources.json"))) {
  const pack = JSON.parse(readFileSync(join(RESEARCH, f), "utf8"));
  for (const s of pack) {
    if (declared.has(s.id)) continue;
    const esc = (t) => String(t).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
    entryBlocks.set(
      s.id,
      `  "${s.id}": {
    title: '${esc(s.title)}',
    publisher: '${esc(s.publisher)}',
    year: ${s.year},
    url: '${esc(s.url)}',
  },`,
    );
    declared.set(s.id, s);
    added++;
  }
}

const body = [...entryBlocks.values()].join("\n\n");
const out = `/**
 * Central bibliography. Every figure and claim on the site must reference an id
 * declared here; scripts/check.mjs enforces it both ways (no orphan sources,
 * no undeclared references). Managed by scripts/merge-sources.mjs — research
 * packs are the input, this file is generated output plus manual additions.
 */
export type Source = {
  title: string;
  publisher: string;
  year: number;
  url: string;
};

export const SOURCES: Record<string, Source> = {
${body}
};
`;
writeFileSync(OUT, out);
console.log(`sources: ${declared.size} declared (${added} newly added)`);
