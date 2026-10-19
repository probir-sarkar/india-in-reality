# Research brief — India in Reality

You are researching data for a public, citation-first site about India's rankings and indices.
Audience: general readers. Rule zero: **no invented numbers**. Every figure must carry a
source you actually saw (URL). If you cannot verify a number, drop it and note the gap in
`gaps` at the end of your file.

## Output — two files per topic in /home/probir-server/india-in-reality/research/

1. `<slug>.md` — sections in this exact order:
   - `## What it measures` — 3-6 sentences, plain language
   - `## How it is built` — who publishes it, scale/rank mechanics, inputs (list)
   - `## India trend` — markdown table: year | value | rank (if any) | source_id. 4+ years where the series exists.
   - `## Peers` — table: country | value | year | source_id. Always include China, Pakistan, Bangladesh, Sri Lanka, Nepal where the index covers them, plus US/UK/Brazil where sensible.
   - `## Credibility` — methodology strengths AND criticisms (each bullet ends with (source_id)). Include India-specific data gaps (e.g., India not surveyed for X year).
   - `## Politics` — the Indian government's responses/rejections/statements, each with (source_id) and exact date where possible.
   - `## Real stories` — 1-2 concrete, verifiable stories from named journalism or reports (people, places, dates), each with (source_id).
   - `## Gaps` — anything you could not verify.
2. `<slug>.sources.json` — array: `{"id": "author2024", "title": "...", "publisher": "...", "year": 2024, "url": "https://..."}`. Ids are lowercase `name+year`, unique within your file.

## Source quality order
1. Primary: the index publisher's own report/page (UNDP, WHO, RSF, V-Dem, EIU, Yale EPI, CPCB, MoHFW/NFHS, ASER, FAO).
2. Major news: Reuters, BBC, The Hindu, Indian Express, Scroll, Al Jazeera, Hindustan Times, PIB (for government statements).
3. No blogs, no content farms, no Wikipedia as a final source (Wikipedia is fine for orientation only).

## Topics (your assigned two are in your task description)
Each topic needs: the LATEST edition figure + rank, the trend, peer comparison, methodology criticism, the Indian government's reaction (most of these indices have one — find the exact statement/PIB release), and real stories.
