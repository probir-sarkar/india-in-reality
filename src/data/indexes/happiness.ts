import type { IndexPage } from "../types";

export const happiness: IndexPage = {
  slug: "world-happiness",
  name: "World Happiness Report",
  tagline:
    "India ranks 118 of 147 — below Pakistan, above Bangladesh. The question is what one ladder question can actually measure.",
  category: "life",
  measure: [
    "The World Happiness Report ranks countries by how their residents evaluate their own lives — not by external indicators. The core measure is the Cantril Ladder: each respondent imagines a ladder from 0 (worst possible life) to 10 (best possible life) and places themselves on it.",
    "It is a deliberately subjective measure, published since 2012 under the UN Sustainable Development Solutions Network and, since 2024–25, produced with the Wellbeing Research Centre at the University of Oxford.",
  ],
  built: {
    paragraphs: [
      "The underlying data comes from the Gallup World Poll, which has surveyed since 2005. Roughly 1,000 people per country per year are contacted by phone or in person — over 100,000 respondents across about 140 countries annually.",
      "A country's score is the population-weighted average of ladder answers, pooled across three years to dampen sampling noise; the 2025 rankings use 2022–2024 responses. Six familiar variables — GDP per capita, social support, life expectancy, freedom of choice, generosity, corruption perceptions — are correlates reported alongside the score, not components of it.",
    ],
    inputs: [
      "One Cantril Ladder self-rating per respondent (0–10)",
      "Three-year pooled averages per country",
      "Six explanatory variables (correlates, reported separately)",
    ],
    scale: "0–10 ladder score; ranks on that score",
  },
  headline: {
    value: "118 / 147",
    label: "score 4.389 on the 0–10 ladder",
    rank: "eight places above its 2024 rank",
    asOf: "WHR 2025 (2022–24 data)",
    source: "tribune2025",
  },
  trend: {
    title: "India's rank, five reports",
    takeaway:
      "Five straight editions of improvement: from 144th in 2020 to 118th in 2025 — though a changing field size flatters the climb.",
    source: "tnie2025; scroll2022; ht2023; indiatoday2020",
    unit: "",
    lowerIsBetter: true,
    points: [
      { year: 2020, value: 144 },
      { year: 2021, value: 139 },
      { year: 2022, value: 136 },
      { year: 2023, value: 126 },
      { year: 2024, value: 126 },
      { year: 2025, value: 118 },
    ],
  },
  peers: {
    title: "Where India sits, 2025",
    takeaway:
      "Above Bangladesh and Sri Lanka; below Pakistan, Ukraine, Iran and Iraq — and far below China and Nepal.",
    source: "whr2025; whrnews2025; tribune2025",
    unit: "",
    lowerIsBetter: true,
    points: [
      { country: "Finland", value: 1, year: 2025 },
      { country: "UK", value: 23, year: 2025 },
      { country: "United States", value: 24, year: 2025 },
      { country: "Brazil", value: 36, year: 2025 },
      { country: "China", value: 68, year: 2025 },
      { country: "Nepal", value: 92, year: 2025 },
      { country: "Pakistan", value: 109, year: 2025 },
      { country: "India", value: 118, year: 2025 },
      { country: "Sri Lanka", value: 133, year: 2025 },
      { country: "Bangladesh", value: 134, year: 2025 },
    ],
  },
  credibility: {
    strengths: [
      "One simple, translatable question, asked consistently since 2005 — hard to game, easy to audit.",
      "Pooling three years (~3,000 responses per country) reduces random sampling error.",
      "The authors mostly present their six variables as correlates rather than causes, which is more careful than press coverage suggests.",
    ],
    criticisms: [
      {
        text: "~1,000–3,000 respondents per country per year: India's 2025 sample was reported as roughly 3,086 people for 1.4 billion — far too thin for state, caste or income-level breakdowns.",
        source: "moneycontrol2025",
      },
      {
        text: "Cultural response bias: the ladder framing primes wealth/status comparison, and modesty norms in South and East Asian respondents can systematically depress reported life evaluations.",
        source: "whf2026",
      },
      {
        text: "The ladder measures a reflective life evaluation, not day-to-day felt happiness — a society with strong relational bonds can score modestly if aspirations run high.",
        source: "whf2026",
      },
      {
        text: "One survey item across dozens of languages has weaker construct validity than multi-item scales — a real concern in multilingual India.",
        source: "whf2026",
      },
      {
        text: "The ranked field itself swings between roughly 137 and 158 countries across editions, so some year-on-year rank movement is arithmetic, not reality.",
        source: "whf2026",
      },
      {
        text: "A peer-reviewed study argues the report's indicators do not adequately align with Indian realities; Indian happiness researcher Rajesh Pillania: 'our actual happiness levels might be higher than what the report shows.'",
        source: "arora2026",
      },
    ],
    gaps:
      "India is surveyed every year by Gallup, so there is no missing-data gap — the objections are about sample depth and cultural comparability, not absence.",
  },
  politics: [
    {
      text:
        "No formal government or PIB rebuttal of the World Happiness Report exists. The closest official comment: Union Minister Nitin Gadkari, at the AIIMS Nagpur convocation (29 March 2025), candidly cited India's 118th rank against Pakistan's 109th and argued better health outcomes would lift the standing.",
      source: "loksatta2025",
      date: "29 Mar 2025",
    },
    {
      text:
        "Sri Sri Ravi Shankar: India's ranking 'deserves to be much higher… I disagree with India being placed so low, even below conflict zones.'",
      source: "theprint2025",
      date: "22 Mar 2025",
    },
    {
      text:
        "The India Policy Foundation, a think tank inspired by the RSS, published a critique arguing the ~3,000-person India sample generalises poorly, and urged India to build its own happiness measurement.",
      source: "moneycontrol2025",
    },
  ],
  stories: [
    {
      title: "The minister who quoted the index, not rejected it",
      body: [
        "At the AIIMS Nagpur convocation in March 2025, Nitin Gadkari — a serving Union cabinet minister — told graduates India stands 118th on the world happiness index, behind Pakistan at 109th. He did not dispute the number. He took it as a benchmark and argued health is the lever that would move it.",
      ],
      source: "loksatta2025",
      date: "29 Mar 2025",
    },
    {
      title: "Eating alone",
      body: [
        "The 2025 report records India 132nd of 147 in meal sharing — about four shared meals a week — which Indian coverage read as a marker of urbanisation and increasingly solitary dining among younger Indians. The same report puts India 10th in the world for volunteering.",
      ],
      source: "tnie2025",
      date: "Mar 2025",
    },
  ],
  verdict:
    "The happiness index is best read as a thin, consistent survey of self-reported life evaluation — real signal, coarse resolution. India's five-year improvement is more robust than any single year's rank, and the criticism that ~3,000 respondents cannot resolve a country of 1.4 billion is fair. What the index cannot do is tell you why India ranks where it does; for that, the six correlates are a better map than the headline.",
};
