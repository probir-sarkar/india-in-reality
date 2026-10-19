#!/usr/bin/env node
/**
 * Build gate — runs after `vite build` (npm run build).
 *
 *  1. sources  — every `source: "id"` reference in src/data/** resolves to a
 *                declared entry in src/data/sources.ts, and every declared
 *                source is referenced at least once.
 *  2. registry — every index data file is exported from src/data/indexes/index.ts.
 *  3. links    — every internal href in built HTML resolves to a prerendered file.
 *  4. no-slop  — phrases that must never reach public copy.
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DIST = join(ROOT, "dist", "client");
const SRC = join(ROOT, "src");
let failures = 0;
const fail = (m) => { failures += 1; console.error(`  ✗ ${m}`); };
const ok = (m) => console.log(`  ✓ ${m}`);

/* 1. sources */
const sourcesFile = readFileSync(join(SRC, "data/sources.ts"), "utf8");
const declared = new Set([...sourcesFile.matchAll(/^\s{2}(\w[\w-]*):\s*\{/gm)].map((m) => m[1]));
const used = new Map(); // id -> where
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(ts|tsx)$/.test(f)) {
      const txt = readFileSync(p, "utf8");
      for (const m of txt.matchAll(/source:\s*["']([\w-]+)["']/g)) {
        if (!used.has(m[1])) used.set(m[1], relative(ROOT, p));
      }
    }
  }
};
walk(join(SRC, "data"));

let bad = 0;
for (const [id, where] of used) {
  if (!declared.has(id)) { fail(`undeclared source id "${id}" used in ${where}`); bad++; }
}
if (!bad) ok(`${used.size} source references all declared`);
let orphans = 0;
for (const id of declared) {
  if (id !== "placeholder" && !used.has(id)) { fail(`source "${id}" declared but never used`); orphans++; }
}
if (!orphans) ok(`no orphan sources (${declared.size} declared)`);

/* 2. registry */
const registry = readFileSync(join(SRC, "data/indexes/index.ts"), "utf8");
const dataDir = join(SRC, "data/indexes");
const files = readdirSync(dataDir).filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "types.ts");
let regBad = 0;
for (const f of files) {
  if (!registry.includes(`./${f.replace(/\.ts$/, "")}`)) { fail(`data file ${f} not exported from the registry`); regBad++; }
}
if (!regBad) ok(`registry covers all ${files.length} index files`);

/* 3. links */
let linkBad = 0;
const htmlFiles = [];
const walkHtml = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walkHtml(p);
    else if (f.endsWith(".html")) htmlFiles.push(p);
  }
};
if (existsSync(DIST)) {
  walkHtml(DIST);
  const internal = new Set();
  for (const f of htmlFiles) {
    const html = readFileSync(f, "utf8");
    for (const m of html.matchAll(/href="(\/[^"]*)"/g)) {
      const href = m[1].replace(/\/$/, "").replace(/#.*$/, "");
      if (!href || href.startsWith("/_build") || href.startsWith("/assets")) continue;
      internal.add(href);
    }
  }
  for (const href of internal) {
    const candidates = [
      join(DIST, href),
      join(DIST, `${href}.html`),
      join(DIST, href, "index.html"),
    ];
    if (!candidates.some(existsSync)) { fail(`broken internal link: ${href}`); linkBad++; }
  }
  if (!linkBad) ok(`${internal.size} internal links resolve`);
} else {
  fail("dist/client missing — run vite build first");
}

/* 4. no-slop */
const slop = ["game-changer", "delve into", "in today's fast-paced world", "unlock the potential", "it's important to note"];
let slopBad = 0;
for (const f of htmlFiles) {
  const html = readFileSync(f, "utf8").toLowerCase();
  for (const s of slop) {
    if (html.includes(s)) { fail(`no-slop violation "${s}" in ${relative(DIST, f)}`); slopBad++; }
  }
}
if (!slopBad) ok("no slop phrases");

process.exit(failures ? 1 : 0);
