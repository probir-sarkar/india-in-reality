/**
 * Central bibliography. Every figure and claim on the site must reference an id
 * declared here; scripts/check.mjs enforces it both ways (no orphan sources,
 * no undeclared references).
 */
export type Source = {
  title: string;
  publisher: string;
  year: number;
  url: string;
};

export const SOURCES: Record<string, Source> = {
  placeholder: {
    title: "Placeholder — replaced during the data pass",
    publisher: "—",
    year: 2026,
    url: "https://example.com",
  },
};
