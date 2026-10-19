import type { IndexPage } from "../types";

export const health: IndexPage = {
  slug: "health",
  name: "Health: NFHS-5 & the National Health Accounts",
  tagline:
    "Out-of-pocket spending fell to 39.4% of health expenditure and stunting is down — but anaemia went the wrong way, and four in ten rupees of health care is still paid in cash at the point of illness.",
  category: "health",
  measure: [
    "There is no single headline health index here; this page tracks India's health reality through five official lenses: child nutrition and anaemia from the National Family Health Survey (NFHS-5, 2019–21); who actually pays for health care, from the National Health Accounts (NHA, latest edition 2021-22); how many doctors India has, from Health Ministry figures to Parliament; how long Indians live, from the Sample Registration System and the World Bank; and coverage under Ayushman Bharat PM-JAY, the government's flagship insurance scheme.",
    "Together they measure the gap between headline claims — insurance for the poorest 40%, a doctor within reach of every 811 people — and what the surveys and accounts actually record.",
  ],
  built: {
    paragraphs: [
      "NFHS-5 is run by the International Institute for Population Sciences for the Health Ministry, in two phases — Phase I (17 June 2019–30 January 2020) covering 17 states and 5 UTs, Phase II (2 January 2020–30 April 2021) covering 11 states and 3 UTs. It is India's standard source for population, health and nutrition estimates, state by state.",
      "The National Health Accounts, produced by MoHFW/NHSRC, are systematic health-financing accounts; the 2021-22 edition is the ninth in the series and gives out-of-pocket expenditure (OOPE) as a share of total health expenditure (THE).",
      "The doctor-population ratio of 1:811 combines 13,86,150 registered allopathic doctors with 7,51,768 registered AYUSH practitioners, assuming 80% availability. Life expectancy comes from the SRS abridged life tables (70 years for 2016-20) and the World Bank series. PM-JAY, run by the National Health Authority, offers ₹5 lakh per family per year for secondary and tertiary hospitalisation, targeting the poorest 40% — about 55 crore people across 12.37 crore families.",
    ],
    inputs: [
      "NFHS-5 survey estimates (stunting, wasting, underweight, anaemia)",
      "NHA: OOPE as % of total health expenditure",
      "Registered doctors (allopathic + AYUSH) at 80% availability",
      "SRS life tables and World Bank life expectancy series",
      "PM-JAY administrative coverage figures",
    ],
    scale:
      "Percentages of children or women affected; OOPE as a share of THE; years of life expectancy; one doctor per N people.",
  },
  headline: {
    value: "39.4%",
    label: "of total health expenditure is paid out of pocket — down from 48.8% in 2017-18",
    rank: "but still among the higher OOPE shares for a large economy, and partly arithmetic (a share of a growing total)",
    asOf: "National Health Accounts 2021-22",
    source: "pib2024oope",
  },
  trend: {
    title: "Out-of-pocket spending as a share of total health expenditure (fiscal years ending)",
    takeaway:
      "A genuine, steady five-year decline — from 48.8% to 39.4% of health spending paid by households. Two cautions: it is a share of a growing total, so the fall partly reflects government spending rising rather than household burdens falling in absolute terms; and NHA editions apply methodological refinements between rounds.",
    source: "pib2024oope; nhsrcnha",
    unit: "% of total health expenditure",
    lowerIsBetter: true,
    points: [
      { year: 2018, value: 48.8 },
      { year: 2019, value: 48.2 },
      { year: 2020, value: 47.1 },
      { year: 2021, value: 44.4 },
      { year: 2022, value: 39.4 },
    ],
  },
  peers: {
    title: "Life expectancy at birth, 2023",
    takeaway:
      "India trails every large peer except Pakistan: about nine years behind China and the UK. The Covid dip is visible in the series — 67.3 years in 2021, down from 70.7 in 2019 — before a rebound to 72.0, the first time India has crossed 72 in the World Bank series.",
    source: "worldbank; worldbankpeers; thewire2023; censussrs",
    unit: "years",
    points: [
      { country: "United Kingdom", value: 81.2, year: 2023 },
      { country: "China", value: 78.0, year: 2023 },
      { country: "United States", value: 78.4, year: 2023 },
      { country: "Sri Lanka", value: 77.5, year: 2023 },
      { country: "Brazil", value: 75.8, year: 2023 },
      { country: "Bangladesh", value: 74.7, year: 2023 },
      { country: "India", value: 72.0, year: 2023 },
      { country: "Nepal", value: 70.4, year: 2023 },
      { country: "Pakistan", value: 67.6, year: 2023 },
    ],
  },
  credibility: {
    strengths: [
      "NFHS is a large, standardised, internationally benchmarked (DHS-programme) survey run by an autonomous institute, with full India and state reports published.",
      "NHA is a systematic financing account, not a press release: its OOPE series (62.6% of THE in 2014-15 → 39.4% in 2021-22) and government health expenditure share (29.0% → 48.0%) are the standard reference for financing debates.",
      "Life expectancy rests on India's own SRS vital-statistics system, cross-checkable against UN and World Bank series — and the Covid dip appears in all of them, which is what an honest series does.",
    ],
    criticisms: [
      {
        text: "NFHS-5's second phase (January 2020–April 2021) overlapped the Covid-19 pandemic, complicating state comparisons and trend readings.",
        source: "dhsphases",
      },
      {
        text: "Anaemia went the wrong way: 67.1% of children 6–59 months and 57% of women 15–49 are anaemic in NFHS-5, both up from NFHS-4 — a nutrition-quality problem the headline 'improvement' framing (stunting, wasting, underweight all down) skips.",
        source: "dh2021; ie2021anaemia; iipsnfhs5",
        date: "Nov 2021",
      },
      {
        text: "The 1:811 doctor-population ratio rests on an 80%-availability assumption and counts AYUSH practitioners alongside allopathic doctors; the combined figure masks rural shortfalls — only 84.7% of sanctioned doctor posts in district hospitals were filled per Rural Health Statistics 2021-22.",
        source: "federal2025; itoday2025; indiaspend2023",
        date: "Dec 2025",
      },
      {
        text: "The BMJ Global Health evaluation of PM-JAY found it raised public insurance coverage and narrowed geographic and socioeconomic gaps, but 'there is still a lack of universal coverage of the poor' — and the study explicitly did not estimate effects on out-of-pocket payments or health outcomes.",
        source: "bmj2023",
      },
      {
        text: "The OOPE 'decline' is partly arithmetic: it is a share of a growing total, and NHA editions apply methodological refinements between rounds (the 2021-22 report documents refinements made to the 2020-21 estimates).",
        source: "nhsrcnha",
      },
      {
        text: "The financing numbers coexist with continued distress: only 41% of households had even one insured member per NFHS-5, and average hospitalisation costs far exceed monthly incomes.",
        source: "indiaspend2023",
      },
      {
        text: "Life expectancy is an outcome, not a health-system measure: the World Bank series dipped to 67.3 years in 2021 (SRS 2016-20 average was 70) and rebounded to 72.0 by 2023 — but none of it tells you who paid for the care that produced those years.",
        source: "worldbank; thewire2023; censussrs",
      },
    ],
    gaps:
      "The NFHS-4 baselines for anaemia (children and women) were not verified from a primary source here — only the NFHS-5 levels (67.1% children, 57% women) and the direction of change are cited from Deccan Herald and Indian Express reporting. India holds no rank in any single 2024-25 health index in this pack, by design; peer comparison is limited to life expectancy. Whether an NHA edition for 2022-23 has since been released was not verified; 2021-22 is treated as latest. No independent, nationally representative evaluation of PM-JAY's effect on out-of-pocket spending was found beyond the BMJ coverage study; the government's '₹1.25 lakh crore savings' figure is a government claim.",
  },
  politics: [
    {
      text:
        "MoWCD (Smriti Irani, written reply in Rajya Sabha) presented NFHS-5 malnutrition indicators as 'steady improvement' — stunting 38.4%→35.5%, wasting 21.0%→19.3%, underweight 35.8%→32.1% — and added Poshan Tracker data (Nov 2023) showing 17.43% underweight and 6% wasting, 'much less than that projected by NFHS-5'. Anaemia was absent from the improvement list.",
      source: "pib2023nut",
      date: "20 Dec 2023",
    },
    {
      text:
        "MoS Health (Anupriya Patel, Lok Sabha) framed the OOPE fall from 48.8% to 39.4% as the result of government steps (PM-JAY, Ayushman Arogya Mandirs, PM-ABHIM); the same reply announced PM-JAY cover for all citizens aged 70+ regardless of income.",
      source: "pib2024oope",
      date: "13 Dec 2024",
    },
    {
      text:
        "PIB reiterated the flagship financing claim: government health expenditure up from 29.0% to 48.0% of THE between FY2015 and FY2022, OOPE down from 62.6% to 39.4%, with 'recorded savings over Rs. 1.25 lakh crore'.",
      source: "pib2025hex",
      date: "2025",
    },
    {
      text:
        "MoS Health Prataprao Jadhav (Rajya Sabha, written reply): India's doctor-population ratio is 1:811 — 'better than the WHO norm of 1:1000' — based on allopathic plus AYUSH registration at 80% availability; medical colleges up from 387 to 818 since 2014.",
      source: "pib2025doc",
      date: "2 Dec 2025",
    },
    {
      text:
        "At Arogya Manthan 2026 the government marked eight years of PM-JAY claiming over 60 crore beneficiaries and more than 13 crore hospital admissions worth over ₹2 lakh crore; the official milestone fourteen months earlier (30 November 2024) was ~36 crore verified beneficiaries and 8.39 crore admissions worth over ₹1.16 lakh crore — administrative enrolment and utilisation figures, not measured health outcomes.",
      source: "pib2026pmjay; pib2024pmjay",
      date: "Sep 2026",
    },
  ],
  stories: [
    {
      title: "'With all the gold the family had'",
      body: [
        "Ghazala, 26, from Tatanagar in Jharkhand, took her father Imran to Kolkata in December 2019 after he fell ill; it was metastatic prostate cancer. He moved to Tata Memorial Hospital in Mumbai in January 2020 'with all the gold the family had'. Over two months the family sold all their gold — including a wedding set — and a plot of Jharkhand land worth about ₹9 lakh for ₹2 lakh, because they needed money urgently. Ghazala spent over ₹7 lakh on his treatment. Officials in Tatanagar did not give the family an Ayushman Bharat card because they owned their home.",
      ],
      source: "indiaspend2023",
      date: "2019–2021",
    },
    {
      title: "The ₹15,000 mastectomy and the bills that followed",
      body: [
        "Khadeeja Bano, 46, a domestic worker in Mumbra, Thane earning ₹9,100 a month, had a mastectomy for cancer in 2019 at the municipal BYL Nair Hospital for ₹15,000 total. She still pays ₹12,000–13,000 every four months for tests and medicines the hospital doesn't provide, and lost nearly a year of work during treatment and lockdown. None of that income loss appears in official health-expenditure data.",
      ],
      source: "indiaspend2023",
    },
  ],
  verdict:
    "The official series is mostly real and mostly moving the right way: stunting, wasting and underweight are down on a consistent survey, out-of-pocket burden has fallen five years running, and life expectancy has recovered past its Covid hole. What the official framing leaves out is the distribution and the denominator: anaemia rose while the headline nutrition numbers fell, the doctor ratio is flattered by an availability assumption and by counting AYUSH practitioners, and a 39.4% out-of-pocket share still means the household at the bedside pays — in cash, in gold, in land, in lost wages — for the poorest 40% that PM-JAY was built to protect. The system is improving on paper faster than it is on the family.",
};
