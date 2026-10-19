import type { IndexPage } from "../types";

export const hunger: IndexPage = {
  slug: "hunger",
  name: "Global Hunger Index",
  tagline:
    "Score 24.1, 'serious', rank 100 of 122 — and the government's counter-data says the number is wrong. Both sides are showing their work.",
  category: "health",
  measure: [
    "The Global Hunger Index scores countries on a 0–100 scale where 0 is best, banding them from 'low' to 'extremely alarming' hunger (20.0–34.9 counts as 'serious'). It is deliberately broader than food output: it combines population-level calorie deprivation with child undernutrition and child deaths, on the logic that hunger's worst effects show up in children.",
    "India has scored in the 'serious' band in every recent edition, behind most of its South Asian neighbours — and has formally rejected the index in most of those years.",
  ],
  built: {
    paragraphs: [
      "Published by Concern Worldwide and Welthungerhilfe with the IFHV at Ruhr University Bochum, the GHI is peer-reviewed and does no polling of its own. Its four equally weighted indicators come from established UN inter-agency processes: undernourishment from FAO's SOFI report, child stunting and wasting from the UNICEF–WHO–World Bank Joint Malnutrition Estimates, and under-five mortality from UN IGME.",
      "Scores are recalculated every year, so only reference-year comparisons (2000, 2006, 2012, 2018 in the 2026 report) are valid. Countries scoring under 5 are ranked collectively — which is why China appears as a bloc, not a rank.",
    ],
    inputs: [
      "Undernourishment: share of population with insufficient calories (FAO SOFI)",
      "Child stunting and wasting, under-fives (UNICEF–WHO–World Bank JME)",
      "Under-five mortality (UN IGME)",
    ],
    scale: "0–100, lower is better; 20.0–34.9 = 'serious'",
  },
  headline: {
    value: "24.1",
    label: "'serious' — rank 100 of 122",
    rank: "child wasting 19.0% (provisional)",
    asOf: "GHI 2026 (released 14 Oct 2026)",
    source: "ghi2026",
  },
  trend: {
    title: "The GHI score over 26 years",
    takeaway:
      "Real, steady improvement — 38.1 in 2000 to 24.1 in 2026 — that nonetheless leaves India in the same 'serious' band it has occupied for years.",
    source: "ghi2026",
    unit: "",
    lowerIsBetter: true,
    points: [
      { year: 2000, value: 38.1 },
      { year: 2006, value: 37.0 },
      { year: 2012, value: 28.8 },
      { year: 2018, value: 25.8 },
      { year: 2026, value: 24.1 },
    ],
  },
  peers: {
    title: "GHI 2026 in South Asia",
    takeaway:
      "Behind Sri Lanka, Nepal and Bangladesh; ahead of Pakistan. India's child-wasting rate (19.0%) is nearly half again Bangladesh's (12.9%) — the component driving the gap.",
    source: "ghi2026; ghi2026pdf",
    unit: "",
    lowerIsBetter: true,
    points: [
      { country: "China*", value: 5.0, year: 2026 },
      { country: "Sri Lanka", value: 10.2, year: 2026 },
      { country: "Nepal", value: 14.5, year: 2026 },
      { country: "Bangladesh", value: 19.2, year: 2026 },
      { country: "India", value: 24.1, year: 2026 },
      { country: "Pakistan", value: 25.5, year: 2026 },
    ],
  },
  credibility: {
    strengths: [
      "Inputs come from UN inter-agency processes — FAO, the JME, UN IGME — not from the publishers' own polling, and the indicator tables are published.",
      "India's own NFHS-5 survey corroborates the scale of child undernutrition: stunting 35.5%, wasting 19.3%, severe wasting 7.7% — close to the UN numbers the government disputes.",
      "The index is explicit about data limits: it marks India's 2026 wasting value provisional and does not rank countries with insufficient data.",
    ],
    criticisms: [
      {
        text: "The core dispute is child wasting: GHI uses the UN JME figure (18.7% in 2023), while the government's Poshan Tracker — real-time measurements of over 7 crore under-fives by Anganwadi workers — consistently showed wasting below 7.2% in 2023. NFHS-5's independent survey sits close to the UN number, so the state's case rests on administrative data versus survey data.",
        source: "pib_ghi2023",
      },
      {
        text: "The undernourishment indicator is FAO-modelled and rests partly on the Food Insecurity Experience Scale run through the Gallup World Poll — about 3,000 Indian respondents, which the government argues cannot carry a population-level claim.",
        source: "pib_ghi2022",
      },
      {
        text: "Three of the four indicators concern children under five, which the government argues cannot represent hunger across the whole population.",
        source: "pib_ghi2022",
      },
      {
        text: "India has had no fresh national nutrition survey since NFHS-5 (2019–21), so the JME draws on ageing Indian inputs — one reason the 2026 wasting value is marked provisional.",
        source: "ghi2026pdf",
      },
    ],
    gaps:
      "The GHI 2025 edition's India score/rank could not be verified from a primary source and is omitted from the trend. China's score is published only as '<5' (a bloc rank); it is plotted at 5.0 above. No PIB statement on GHI 2026 existed as of 19 October 2026 — earlier years' statements are quoted.",
  },
  politics: [
    {
      text:
        "After GHI 2022 (rank 107 of 121), the Women and Child Development Ministry's PIB statement called the index 'an erroneous measure of hunger… a consistent effort… to taint India's image as a Nation', attacked the Gallup-based undernourishment input ('an opinion poll… sample size of 3000'), and said the publishers 'evidently… have not done their due diligence'.",
      source: "pib_ghi2022",
      date: "15 Oct 2022",
    },
    {
      text:
        "After GHI 2023 (rank 111 of 125, the world's highest child-wasting rate at 18.7%), PIB said the index 'continues to be… erroneous… and shows a malafide intent', citing Poshan Tracker: 7.24 crore children measured, wasting 'consistently below 7.2%, month-on-month'.",
      source: "pib_ghi2023",
      date: "12 Oct 2023",
    },
    {
      text:
        "GHI 2024 (rank 105 of 127, score 27.3) drew a renewed ministry objection to using UN estimates rather than India's own programme data; The Hindu's Explained noted the disagreement is essentially survey data versus administrative data.",
      source: "hindu2024",
      date: "Oct 2024",
    },
  ],
  stories: [
    {
      title: "Santoshi Kumari, 11",
      body: [
        "Karimati village, Simdega, Jharkhand, September 2017: Santoshi died after going days with barely any food during the Durga Puja holidays, when school mid-day meals stopped. Her family's ration card had been cancelled because it was not linked to Aadhaar, cutting off their National Food Security Act rations.",
        "Reuters covered the death as sparking a national debate on tying welfare to identity cards. Officials disputed the cause — the deputy commissioner said malaria — and a year later Scroll.in documented rising 'Aadhaar tragedies' in Jharkhand's ration system.",
      ],
      source: "reuters2017; scroll2017; scroll2018",
      date: "Sept–Oct 2017",
    },
    {
      title: "Poshan Tracker as counter-evidence",
      body: [
        "The government's rebuttal is not just a press release — it is a platform. Poshan Tracker, with 13.96 lakh Anganwadi centres registered and over 10 crore beneficiaries, is WHO-recognised for routine nutrition data, and its month-by-month wasting measurements became the state's alternative to the UN numbers. The dispute is genuinely about which measurement infrastructure to believe.",
      ],
      source: "pib_ghi2023",
    },
  ],
  verdict:
    "The GHI's inputs are UN-standard, and India's own NFHS-5 lands near the UN's child numbers — which makes the government's strongest argument narrower than its press releases suggest: it is a case for administrative measurement (Poshan Tracker) over survey estimation, plus a real complaint about a 3,000-person Gallup sample driving a national undernourishment figure. The trend line both sides could sign: hunger in India has fallen substantially since 2000, and child wasting remains the outlier that keeps the score 'serious'.",
};
