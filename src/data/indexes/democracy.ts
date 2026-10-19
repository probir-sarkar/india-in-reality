import type { IndexPage } from "../types";

export const democracy: IndexPage = {
  slug: "democracy",
  name: "Democracy indices (V-Dem, Freedom House, EIU)",
  tagline:
    "Three measures, three verdicts: V-Dem calls India an 'electoral autocracy', Freedom House rates it 'partly free' (63/100), and the EIU calls it a 'flawed democracy'.",
  category: "politics",
  measure: [
    "There is no single democracy index; this page covers three of the most cited. V-Dem (V-Dem Institute, University of Gothenburg) runs the largest global dataset on democracy — over 600 attributes, 202 countries, 1789–2024, over 31 million data points — and classifies each country as a liberal democracy, electoral democracy, electoral autocracy or closed autocracy.",
    "Freedom House (Washington, DC) rates countries Free / Partly Free / Not Free on a 0–100 score combining political rights and civil liberties. The EIU Democracy Index (Economist Intelligence Unit) scores 167 countries 0–10 across five categories: electoral process and pluralism, functioning of government, political participation, political culture and civil liberties.",
    "The three disagree on degree but not direction for India: V-Dem has classified it an 'electoral autocracy' since March 2021 (dating the autocratisation episode to around 2017), Freedom House downgraded it from Free to Partly Free in 2021, and the EIU has kept it a 'flawed democracy' throughout the recent series.",
  ],
  built: {
    paragraphs: [
      "V-Dem: country experts code hundreds of fine-grained indicators each year; measurement models aggregate them — with explicit expert-uncertainty estimates — into indices (electoral democracy, liberal democracy, egalitarian, participatory, deliberative). Regime classifications sit on thresholds of the electoral-democracy index and related measures; reports come each March.",
      "Freedom House: the annual Freedom in the World report scores 195 countries on 25 indicators across political rights and civil liberties, assessed by analysts and an expert panel, with the total mapping to the three status bands. Indian Kashmir is assessed separately.",
      "EIU: 60 expert-assessed indicators (mostly 0/1 or 0/0.5/1) in five categories combined into a 0–10 index, informed by public-opinion surveys such as the World Values Survey and electoral data. The EIU itself cautions these measures are 'not thick enough' to capture substantive democracy.",
    ],
    inputs: [
      "V-Dem: expert-coded indicators aggregated with uncertainty models; regime-type thresholds",
      "Freedom House: 25 indicators, 0–100 total, Free / Partly Free / Not Free bands",
      "EIU: 60 expert-assessed indicators, 0–10 index, full / flawed democracy, hybrid, authoritarian bands",
    ],
    scale: "Varies: V-Dem indices 0–1 plus ranks; Freedom House 0–100; EIU 0–10",
  },
  headline: {
    value: "63 / 100",
    label: "'Partly Free' — down from 71/100 and 'Free' in 2020",
    rank: "downgraded from Free in the 2021 report",
    asOf: "Freedom in the World 2025",
    source: "fh2025",
  },
  trend: {
    title: "Freedom House score for India, 2020–2025",
    takeaway:
      "An eight-point slide: 71 and 'Free' in 2020, downgraded to 'Partly Free' at 67 in 2021, drifting to 63 by 2025. The drop from 66 to 63 in the latest edition is the largest single-year move in the series shown.",
    source: "toi2022; scroll2023; nri2025; fh2025; freedomhouse2021",
    unit: "score /100 (higher = freer)",
    points: [
      { year: 2020, value: 71 },
      { year: 2021, value: 67 },
      { year: 2022, value: 66 },
      { year: 2023, value: 66 },
      { year: 2024, value: 66 },
      { year: 2025, value: 63 },
    ],
  },
  peers: {
    title: "EIU Democracy Index 2022 — India and comparisons",
    takeaway:
      "In 2022 India (7.04, rank 46=) scored above Brazil, Sri Lanka, Bangladesh, Nepal and Pakistan, and far above China — but below the UK and US, and its own 2014 score was 7.92. On V-Dem's 2025 classification, by contrast, India sits in the 'electoral autocracy' category alongside Pakistan, with only Nepal and Sri Lanka counted as democracies in South and Central Asia.",
    source: "eiu-di2022; et2026; thewire2025",
    unit: "EIU score 0–10 (higher = more democratic)",
    points: [
      { country: "UK", value: 8.28, year: 2022 },
      { country: "United States", value: 7.85, year: 2022 },
      { country: "India", value: 7.04, year: 2022 },
      { country: "Brazil", value: 6.78, year: 2022 },
      { country: "Sri Lanka", value: 6.47, year: 2022 },
      { country: "Bangladesh", value: 5.99, year: 2022 },
      { country: "Nepal", value: 4.49, year: 2022 },
      { country: "Pakistan", value: 4.13, year: 2022 },
      { country: "China", value: 1.94, year: 2022 },
    ],
  },
  credibility: {
    strengths: [
      "V-Dem's scale — 600+ attributes, 31 million data points, uncertainty estimates from multiple experts per country — is unmatched among democracy measures.",
      "Freedom House and EIU publish long, consistent annual series with transparent status bands, and all three show broadly consistent direction for India since 2014.",
    ],
    criticisms: [
      {
        text: "The government's own Economic Advisory Council (EAC-PM working paper by Sanjeev Sanyal and Akanksha Arora) attacked all three indices: they rest on 'the opinions of a tiny group of unknown experts', use questions that are subjective and 'impossible to answer objectively', and are inappropriate for cross-country comparison; it noted Freedom House and V-Dem place India at the same level as the 1975–77 Emergency.",
        source: "pib2023",
      },
      {
        text: "Scholars have pushed back on V-Dem's India classification specifically: Siddharth Singh (Open Magazine) argues the project is 'not an intellectual exercise but an ideological one', pointing to El Salvador, Honduras and Sierra Leone ranking above India on electoral democracy; Salvatore Babones (2026, in a SAGE journal) argues 'thick' indices like V-Dem are structurally biased against the Global South.",
        source: "open2024",
      },
      {
        text: "V-Dem country scores depend on small panels of anonymous country experts whose selection criteria are not public; small changes in expert pools can move scores and ranks.",
        source: "open2024",
      },
      {
        text: "Freedom House is a US-based advocacy organisation; critics question the transferability of its rubric, and the Indian government has called its political judgements 'inaccurate and distorted'.",
        source: "scroll2023",
      },
      {
        text: "The EIU acknowledges its own measures 'are not thick enough… they do not encompass sufficiently, or, in some cases, at all, the features that determine how substantive democracy is'.",
        source: "theprint2023",
      },
      {
        text: "India-specific data gaps: Freedom House's India score excludes Indian Kashmir, which is assessed separately.",
        source: "fh2025",
      },
    ],
    gaps:
      "The EIU Democracy Index 2025 India rank/score could not be verified from a primary source (the 2025 press release does not list India; the PDF found was the 2024 report). V-Dem's 2021 report was cited via The Diplomat and The Wire rather than read directly. The Freedom House 2025 figure of 63/100 comes via reporting that quotes Freedom House's country page.",
  },
  politics: [
    {
      text:
        "March 2021: after the V-Dem 'electoral autocracy' classification and Freedom House's downgrade, External Affairs Minister S. Jaishankar called the indices' authors 'self-appointed custodians of the world' and their exercise 'hypocrisy' — 'they invent their rules, their parameters, they pass their judgments and then make out as though this is some kind of global exercise'.",
      source: "diplomat2021",
      date: "Mar 2021",
    },
    {
      text:
        "March 2021: the Ministry of External Affairs, in an internal note reported by Hindustan Times, considered commissioning a 'global democracy index' and 'global press freedom index' by an Indian think tank, and suggested Indian missions feed material to RSF and V-Dem to put 'India at the rightful place on the democracy and press-freedom index, in future reports'.",
      source: "ht2021",
      date: "Mar 2021",
    },
    {
      text:
        "March 19, 2021: Foreign Policy reported on the government's counter-campaign after the 'electoral autocracy' label ('India's \"Electoral Autocracy\" Hits Back').",
      source: "fp2021",
      date: "19 Mar 2021",
    },
    {
      text:
        "February 2023: PIB carried the EAC-PM working paper 'Why India does poorly on global perception indices', attacking the methodology of the Freedom House, V-Dem and EIU indices, urging Indian think tanks to build rival indices, and asking the World Bank to ensure 'greater transparency and accountability' since these indices feed the World Governance Indicators.",
      source: "pib2023",
      date: "Feb 2023",
    },
    {
      text:
        "2026: opposition leaders used V-Dem's data against the government — Congress leader P. Chidambaram flagged India's rank 106/179 and 'lowest score since 1975' on the Electoral Democracy Index on X.",
      source: "et2026",
      date: "2026",
    },
  ],
  stories: [
    {
      title: "146 opposition MPs suspended while major bills passed",
      body: [
        "During the December 2023 winter session, opposition MPs demanding a Home Minister statement on the December 13 Parliament security breach were suspended in waves — 14 on December 14, then 78, 49 and more — taking the total to 146 Lok Sabha and Rajya Sabha MPs by December 21, 2023. Major bills, including the Chief Election Commissioner appointment bill and the Telecommunications Bill, were passed while the opposition was largely suspended.",
      ],
      source: "indiatoday2023",
      date: "Dec 2023",
    },
    {
      title: "Electoral bonds struck down",
      body: [
        "On February 15, 2024, the Supreme Court of India declared the electoral bonds political-funding scheme unconstitutional, in what Reuters called a setback for the BJP, which had raised large sums through the anonymous instrument; the court ended a scheme that had kept corporate donors secret from voters.",
      ],
      source: "reuters2024",
      date: "15 Feb 2024",
    },
    {
      title: "ED cases and the opposition",
      body: [
        "An Indian Express investigation of court records and agency statements (September 21, 2022) found 121 prominent politicians came under Enforcement Directorate probe after 2014, of whom 115 (95%) were opposition leaders — against 26 politicians probed in the entire UPA decade (2004–14), fueling the 'ED is the new CBI' perception.",
      ],
      source: "indianexpress2022",
      date: "21 Sep 2022",
    },
  ],
  verdict:
    "No single number settles whether India remains a democracy, and the three indices here use different methods that land on different labels. What they share is direction: Freedom House down 8 points in five years, V-Dem's Electoral Democracy Index at its lowest since 1975 (rank 106/179 in 2026), and the EIU's score still below its 2014 level. The government's critique — anonymous experts, small panels, Global South bias — has real substance and is recorded by its own think tank. But the underlying events the indices react to, from mass parliamentary suspensions to the electoral bonds ruling to the pattern of ED probes, are matters of documented record; the indices are contested, the events are not.",
};
