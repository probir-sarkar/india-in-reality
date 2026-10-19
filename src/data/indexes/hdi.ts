import type { IndexPage } from "../types";

export const hdi: IndexPage = {
  slug: "human-development",
  name: "Human Development Index",
  tagline:
    "India's best-ever HDI, rank 130 of 193 — and an inequality adjustment that erases nearly a third of it.",
  category: "life",
  measure: [
    "The Human Development Index compresses three things a decent life needs into one 0–1 score: a long life, schooling, and income. Published by UNDP since 1990, it was built as an alternative to ranking countries by GDP alone — a country can be rich and still score badly on health and education, and the other way round.",
    "The headline number is an average, which is both its power and its main weakness: averages erase distribution, which matters enormously in a country of India's spread.",
  ],
  built: {
    paragraphs: [
      "UNDP's Human Development Report Office publishes it annually; the 2025 report, released 6 May 2025, ranks 193 countries on 2023 data — so the headline is always about two years behind the release.",
      "The score is the geometric mean of three normalised sub-indices. The geometric mean matters: it stops a very high income score from fully compensating for very poor schooling, which an arithmetic mean would allow.",
    ],
    inputs: [
      "Life expectancy at birth",
      "Expected years of schooling + mean years of schooling",
      "Gross National Income per capita, PPP-adjusted",
    ],
    scale: "0–1; ≥0.700 counts as 'high human development'",
  },
  headline: {
    value: "0.685",
    label: "rank 130 of 193 — medium human development",
    rank: "just below the 0.700 high-development threshold",
    asOf: "HDR 2025 (2023 data)",
    source: "undp2025",
  },
  trend: {
    title: "Three decades of HDI",
    takeaway:
      "From 0.429 in 1990 to 0.685 in 2023 — UNDP puts the cumulative rise above 50%, faster than the global and South Asian averages.",
    source: "nag2023; undp2025",
    unit: "",
    points: [
      { year: 1990, value: 0.429 },
      { year: 2000, value: 0.494 },
      { year: 2010, value: 0.579 },
      { year: 2019, value: 0.646 },
      { year: 2022, value: 0.676 },
      { year: 2023, value: 0.685 },
    ],
  },
  peers: {
    title: "HDI in the neighbourhood, 2023",
    takeaway:
      "Level with Bangladesh, above Nepal and Pakistan, below Sri Lanka, China and Brazil — and a long way from the 0.700 line Bhutan is also chasing.",
    source: "hdrannex2025",
    unit: "",
    points: [
      { country: "UK", value: 0.946, year: 2023 },
      { country: "United States", value: 0.938, year: 2023 },
      { country: "China", value: 0.797, year: 2023 },
      { country: "Brazil", value: 0.786, year: 2023 },
      { country: "Sri Lanka", value: 0.776, year: 2023 },
      { country: "Bhutan", value: 0.698, year: 2023 },
      { country: "India", value: 0.685, year: 2023 },
      { country: "Bangladesh", value: 0.685, year: 2023 },
      { country: "Nepal", value: 0.622, year: 2023 },
      { country: "Pakistan", value: 0.544, year: 2023 },
    ],
  },
  credibility: {
    strengths: [
      "Three decades of consistent methodology across 193 countries — one of the few series long enough to show a full development trajectory.",
      "Shifts the yardstick from income to capabilities: India's HDI rank sits above what its income rank alone would imply.",
      "The companion inequality-adjusted HDI (IHDI) explicitly corrects the headline for distribution.",
    ],
    criticisms: [
      {
        text: "Inequality knocks 30.7% off India's HDI — 0.685 becomes an IHDI of 0.475, described in Indian coverage as among the region's highest losses. On inequality-adjusted terms India is a substantially weaker performer than its rank suggests.",
        source: "deccanherald2025",
      },
      {
        text: "Indian researchers computing state-level HDI with UNDP's own method argue UNDP understates India's schooling and life expectancy by one to two years; on their numbers India would edge past Bangladesh.",
        source: "dte2024",
      },
      {
        text: "The national average erases a subnational spread running from states at Eastern-European levels to states resembling Congo, Kenya, Ghana and Namibia.",
        source: "hindu2023",
      },
      {
        text: "Years of schooling say nothing about learning — UNDP itself flags quality and learning outcomes as the remaining weak flank after near-universal enrolment gains.",
        source: "undp2025",
      },
    ],
    gaps:
      "UNDP's own figures have moved between editions: the 2023/24 cycle reported India 2022 at 0.644 / rank 134, the 2025 report revised that to 0.676 / rank 133. This page uses the HDR 2025 revision throughout. The IHDI figure should be re-verified against UNDP Statistical Annex Table 3 before quoting the decimal.",
  },
  politics: [
    {
      text:
        "There is no government rejection — the HDR is welcomed. UNDP India's release congratulated India on 'rising from rank 133 in 2022 to 130 in 2023', and framed the gains around government programmes: National Rural Health Mission, Ayushman Bharat, Poshan Abhiyaan, the Right to Education Act, NEP 2020, MGNREGA and Jan Dhan.",
      source: "undp2025",
      date: "6 May 2025",
    },
    {
      text:
        "Official counter-framing comes through state-linked research rather than rebuttal: State Bank of India's subnational HDI work argued south and west states lead while eastern states lag, and SBI-affiliated analysis claimed UNDP understates India's schooling and life expectancy.",
      source: "dte2024",
    },
  ],
  stories: [
    {
      title: "Kerala and Bihar, one country",
      body: [
        "Recomputed on the UNDP method, Kerala's state HDI in 2019 was 0.782 — first among Indian states, comparable to 'high development' countries. Bihar's was 0.574, last of 36 states and UTs, barely above India's own national level in the 1990s. The Kerala–Bihar gap is roughly the distance India has travelled in three decades.",
      ],
      source: "nag2023",
    },
    {
      title: "Two countries within one",
      body: [
        "In the subnational HDI, Delhi and Goa score above 0.799 — Eastern European territory — while the bottom five states score at levels resembling Congo, Kenya, Ghana and Namibia. Gujarat and Haryana, despite among the highest per-capita incomes, fail to convert money into human development. The 2022–23 update shows movement: Kerala slipped from 1st to 5th, Chhattisgarh fell to last, while Odisha, Bihar and Uttar Pradesh improved.",
      ],
      source: "hindu2023",
    },
  ],
  verdict:
    "HD I is the index India has least reason to argue with: the trend is real, the method is transparent, and the government cites it approvingly. The serious critique is internal to the number — the headline average sits on a 30.7% inequality loss, and the state-level spread means the national figure describes a country that does not exist. India at 0.685 is a fair sentence about the average Indian, and nearly silent about the median one.",
};
