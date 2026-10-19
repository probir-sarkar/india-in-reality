import type { IndexPage } from "../types";

export const education: IndexPage = {
  slug: "education",
  name: "Education: What the Numbers Say",
  tagline:
    "Nearly half of rural Class 5 children cannot read a Class 2 text — and India has had no census to even count literacy since 2011.",
  category: "education",
  measure: [
    "There is no single global index on this page — that is itself the finding. India's education reality is tracked by four official measurements that rarely agree on emphasis: ASER, a citizen-led household survey that tests whether rural children can actually read; the literacy rate, measured by Census until 2011 and by government surveys since; the Gross Enrolment Ratio for higher education; and UDISE+, the government's own school-information system.",
    "The one international benchmark — OECD's PISA test of 15-year-olds — has not included India since 2009.",
  ],
  built: {
    paragraphs: [
      "ASER, run by Pratham's ASER Centre since 2005, surveys households rather than schools and tests children one-on-one in rural districts — so its reading numbers are independent of what school records claim. Its 2024 'basic' round tested 649,491 children in 17,997 villages.",
      "Literacy is the share of Indians aged 7+ who can read and write a simple message. The last Census measured it at 74.04% in 2011; no Census has been conducted since, so every figure since is survey-based: 77.7% (NSS 2017–18) and 80.9% (PLFS 2023–24), as stated in Parliament. Higher-education GER (AISHE, a near-full census of institutions) has risen from 23.7% in 2014–15 to 30.0% in 2023–24, while UDISE+ records secondary dropout falling from 13.8% in 2022–23 to 7.0% in 2025–26.",
    ],
    inputs: [
      "ASER: household one-on-one testing of rural children aged 5–16",
      "Literacy: Census (to 2011), NSS and PLFS surveys since",
      "AISHE: higher-education enrolment as % of the 18–23 population",
      "UDISE+: annual school census, source of official dropout rates",
    ],
    scale: "percentages; ASER reading = share of Class 5 children reading a Class 2-level text",
  },
  headline: {
    value: "48.7%",
    label: "of rural Class 5 children can read a Class 2-level text",
    rank: "below the 50.3% of 2018",
    asOf: "ASER 2024",
    source: "ie_aser2024",
  },
  trend: {
    title: "Reading before recovery, ASER",
    takeaway:
      "Foundational reading fell off a cliff in 2022 and has recovered only part of the way — 2024's 48.7% is still below 2018's 50.3%, so 'sharp gains' headlines describe a recovery, not record learning.",
    source: "aser2018; ie_aser2024",
    unit: "%",
    points: [
      { year: 2016, value: 47.9 },
      { year: 2018, value: 50.3 },
      { year: 2022, value: 42.8 },
      { year: 2024, value: 48.7 },
    ],
  },
  peers: {
    title: "Adult literacy, latest available",
    takeaway:
      "India's official PLFS figure (80.9%, ages 7+) sits above Bangladesh and Pakistan but far below China and Sri Lanka — and each row is a different survey year, which is part of the problem.",
    source: "wblit; sansad_pq",
    unit: "%",
    points: [
      { country: "China", value: 96.7, year: 2020 },
      { country: "Brazil", value: 94.7, year: 2024 },
      { country: "Sri Lanka", value: 92.7, year: 2024 },
      { country: "Bangladesh", value: 79.0, year: 2022 },
      { country: "India", value: 78.2, year: 2024 },
      { country: "Nepal", value: 68.7, year: 2019 },
      { country: "Pakistan", value: 58.9, year: 2021 },
    ],
  },
  credibility: {
    strengths: [
      "ASER tests children one-on-one at home, independent of school self-reporting, across every rural district in 'basic' years — with an unbroken series since 2005 that shows the COVID drop and recovery honestly.",
      "UDISE+ and AISHE are near-full censuses of schools and colleges, not samples.",
      "NFHS-5 provides comparable state-level schooling indicators alongside literacy.",
    ],
    criticisms: [
      {
        text: "No Census since 2011: the 2021 Census was postponed and the next has a reference date of 1 March 2027 — every 'literacy rate' since 2011 is survey-based, and the sources disagree: 74.04% (Census 2011), 77.7% (NSS 2017–18), 80.9% (PLFS 2023–24).",
        source: "pib_census2027",
      },
      {
        text: "The widely repeated 'NFHS-5 literacy rate of 77.7%' is a misattribution — NFHS-5's factsheet reports literacy only for ages 15–49 (women 71.5%, men 84.4%). The 77.7% traces to the NSS 75th Round.",
        source: "nfhs5",
      },
      {
        text: "UDISE+ dropout rates are administrative data dependent on school-side reporting; the 2025–26 'sharp fall' (8.2% to 7.0%) should be read with that caution.",
        source: "pib_udise",
      },
      {
        text: "India has been absent from PISA for over 15 years — no internationally comparable learning benchmark for Indian 15-year-olds exists since 2009, when participating states placed 72nd and 73rd of 74 systems.",
        source: "telegraph2020",
      },
    ],
    gaps:
      "ASER was not conducted in 2020 or 2021 (COVID), so no data exists for those years. The 2018 all-children reading figure differs by 0.1pp between the primary report (50.3%) and Indian Express's write-up (50.4%) — both are cited here. The peers table uses each country's latest available UNESCO year, so rows are not same-year comparable.",
  },
  politics: [
    {
      text:
        "NEP 2020, approved 29 July 2020, promises universalisation from pre-school to secondary and a higher-education GER target of 50% by 2035 — roughly double the current 30%.",
      source: "pib_nep2020",
      date: "29 Jul 2020",
    },
    {
      text:
        "After signing back into PISA in January 2019, the government withdrew from PISA 2022 — MoS Education Annapurna Devi told the Lok Sabha COVID school closures forced a 'relook' — and India is reported to be skipping PISA 2025 as well.",
      source: "telegraph2020",
      date: "Nov 2020",
    },
    {
      text:
        "The Ministry of Home Affairs notified Census 2027 with caste enumeration and a 1 March 2027 reference date — sixteen years after the last census.",
      source: "pib_census2027",
      date: "Jun 2025",
    },
    {
      text:
        "The government has adopted ASER 2024 positively rather than contesting it — PIB's own release publicised the enrollment 'leap' and post-COVID reading recovery.",
      source: "pib_aser2024",
      date: "4 Feb 2025",
    },
  ],
  stories: [
    {
      title: "A classroom on a walkway",
      body: [
        "The Hindu profiled the Government Primary School in Mannaki village, Nuh district, Haryana (October 2026): eight-year-old Suraiya sits on a mat in the walkway that doubles as her Class 2 classroom, because the real classroom's floor is damp and its blackboard broken. The school, built in 1985, has 75 students and three teachers on record — one away on election duty — no working latrines, and it shuts for days each monsoon when floodwater enters the mid-day-meal kitchen. One teacher produced a written order instructing staff not to speak to media.",
      ],
      source: "hindu_nuh",
      date: "7 Oct 2026",
    },
    {
      title: "Second from the bottom, then a decade of silence",
      body: [
        "In PISA 2009 — the only time India participated — students from Tamil Nadu and Himachal Pradesh placed 72nd and 73rd of 74 education systems. The government blamed a 'disconnect' between test and curriculum, stayed out for a decade, signed back in for PISA 2022, and withdrew again citing COVID.",
      ],
      source: "ie_pisa2009",
    },
  ],
  verdict:
    "The honest sentence is this: India's education system has genuinely expanded — enrolment up, dropout down, literacy climbing on every survey — while its foundational learning fell during COVID and has not yet recovered to 2018 levels. Both halves are government-supported data. The bigger scandal is measurement itself: sixteen years without a census, no PISA participation since 2009, and a headline literacy number that changes depending on which survey the ministry quotes.",
};
