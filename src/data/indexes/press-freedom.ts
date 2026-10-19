import type { IndexPage } from "../types";

export const pressFreedom: IndexPage = {
  slug: "press-freedom",
  name: "World Press Freedom Index",
  tagline:
    "India ranks 157 of 180 in 2026 — 'very serious' territory, below Nepal and Sri Lanka, above only Pakistan and Bangladesh in South Asia.",
  category: "politics",
  measure: [
    "The World Press Freedom Index (WPFI), published every year since 2002 by Reporters Without Borders (RSF), compares the freedom journalists and media have to select, produce and disseminate news in the public interest — independent of political, economic, legal and social interference, and without threats to their safety.",
    "It measures the environment for journalism, not the quality of journalism. India has sat in RSF's 'very serious' band (score below 40) under the current scoring system.",
  ],
  built: {
    paragraphs: [
      "Each country gets a 0–100 score (100 = best) and a rank out of 180. Half the score is a quantitative tally of abuses against journalists and media; half is qualitative analysis from press-freedom specialists — journalists, researchers, academics, human-rights defenders — answering an RSF questionnaire available in 25 languages, including Hindi.",
      "The questionnaire covers five contextual indicators, weighted equally: political context, legal framework, economic context, sociocultural context and safety. A seven-member academic panel (LMU Munich, Reuters Institute, University of Miami, University of Cape Town, DW Akademie, plus RSF staff) oversees the methodology. The index is a snapshot of the previous calendar year.",
      "The current design dates from a 2022 overhaul; before that (e.g. the 2020 edition) RSF used six parameters and an 83-question questionnaire answered by around 150 correspondents and 18 free-expression NGOs — so pre-2022 and post-2022 numbers are not directly comparable.",
    ],
    inputs: [
      "Quantitative tally of abuses against journalists and media",
      "Specialist questionnaire: five equally weighted indicators (political, legal, economic, sociocultural, safety)",
      "0–100 score per country, then rank 1–180; bands from 'good' (85+) down to 'very serious' (below 40)",
    ],
    scale: "0–100 score (higher = freer); ranks on that score",
  },
  headline: {
    value: "157 / 180",
    label: "score 31.96 — 'very serious' band (below 40)",
    rank: "down six places from 151st in 2025",
    asOf: "WPFI 2026",
    source: "rsf-india",
  },
  trend: {
    title: "India's rank, seven editions",
    takeaway:
      "From 142nd in 2020 to a low of 161st in 2023, then a partial climb — but RSF noted the 2024 rank 'improvement' (161→159) happened because other countries slipped, while India's score actually fell. Ranks before the 2022 methodology change are not comparable with later ones.",
    source: "niti2020; thehindu2021; thehindu2022; thehindu2023; thehindu2024; rsf-india",
    unit: "",
    lowerIsBetter: true,
    points: [
      { year: 2020, value: 142 },
      { year: 2021, value: 142 },
      { year: 2022, value: 150 },
      { year: 2023, value: 161 },
      { year: 2024, value: 159 },
      { year: 2025, value: 151 },
      { year: 2026, value: 157 },
    ],
  },
  peers: {
    title: "Where India sits, 2026",
    takeaway:
      "Below every South Asian neighbour except Pakistan and Bangladesh. Nepal is 70 places ahead; Brazil and the US sit in the 'problematic' band India left years ago; only China ranks lower among the comparison set.",
    source:
      "rsf-india; rsf-nepal; rsf-brazil; rsf-srilanka; rsf-bangladesh; rsf-pakistan; rsf-us; rsf-china; journalism2026",
    unit: "",
    lowerIsBetter: true,
    points: [
      { country: "UK", value: 18, year: 2026 },
      { country: "Brazil", value: 52, year: 2026 },
      { country: "United States", value: 64, year: 2026 },
      { country: "Nepal", value: 87, year: 2026 },
      { country: "Sri Lanka", value: 134, year: 2026 },
      { country: "Bangladesh", value: 152, year: 2026 },
      { country: "Pakistan", value: 153, year: 2026 },
      { country: "India", value: 157, year: 2026 },
      { country: "China", value: 178, year: 2026 },
    ],
  },
  credibility: {
    strengths: [
      "Mixes quantitative abuse data with qualitative expert assessment, covering 180 countries and territories on a transparent 0–100 scale with all five sub-indicators published for every country.",
      "Methodology is periodically overhauled under an external academic panel, and the questionnaire is multilingual, including Hindi.",
    ],
    criticisms: [
      {
        text: "Small, anonymous respondent base: in the pre-2022 design roughly 150 correspondents and 18 NGOs answered ~83 questions per country — about one respondent per parameter per country — which NITI Aayog argued makes rankings 'highly subjective at best'; per-question scores and the respondent list are not published.",
        source: "niti2020",
      },
      {
        text: "RSF hand-picks questionnaire respondents without published selection criteria, and tabulation relies on a seven-member panel critics describe as Western experts; the index is argued to be Western-centric.",
        source: "aljazeera2026",
      },
      {
        text: "Ranks are not directly comparable across years: methodology and thresholds changed significantly in 2013 and 2022, and RSF itself had to recalibrate historical scores to make 25-year comparisons.",
        source: "rsf2026index",
      },
      {
        text: "A rank can improve even as conditions worsen, because rank is relative: India's 2024 rank rose while its score fell.",
        source: "thehindu2024",
      },
      {
        text: "India-specific gaps: RSF's India page relies on general characterisations (e.g. 'two to three journalists killed due to their work every year') without a public India-year dataset, and the government says its own data do not match RSF's narrative.",
        source: "thehindu2025",
      },
    ],
    gaps:
      "RSF has not published India's full scores for the 2020–2022 editions in the sources consulted (ranks only); pre-2022 scores sit on a different, reversed scale. The exact RSF publication date for the 2025 and 2026 indices was not captured directly — April 30, 2026 is per journalism.co.uk.",
  },
  politics: [
    {
      text:
        "April 2020: after India slipped to 142nd, I&B Minister Prakash Javadekar said Indian media enjoys 'absolute freedom' and criticised the report.",
      source: "toi2020",
      date: "Apr 2020",
    },
    {
      text:
        "NITI Aayog — the government's own think tank — published 'Deciphering the World Press Freedom Index', questioning the survey's opaqueness, small respondent base and 'perceived biases'.",
      source: "niti2020",
      date: "2020",
    },
    {
      text:
        "The Centre has repeatedly dismissed international freedom rankings as 'misinformed and propaganda driven'.",
      source: "thehindu2024",
    },
    {
      text:
        "April 2, 2025: in a written Lok Sabha reply, Minister of State for I&B L. Murugan said 'India has a vibrant press and media ecosystem, which does not need validation from foreign organisations', pointing to Article 19, the judiciary, the Press Council of India and self-regulation under the Cable Television Networks Act.",
      source: "thehindu2025",
      date: "2 Apr 2025",
    },
  ],
  stories: [
    {
      title: "NewsClick: raided, arrested under UAPA, then bailed by the Supreme Court",
      body: [
        "On October 3, 2023, Delhi Police's Special Cell raided homes and offices of journalists, authors and academics linked to the news portal NewsClick, questioned 46 people, seized phones and laptops, and arrested founder-editor Prabir Purkayastha and HR head Amit Chakraborty under the Unlawful Activities (Prevention) Act, following an FIR registered on August 17, 2023.",
        "On May 22, 2024, the Supreme Court called the arrest and remand illegal and ordered Purkayastha's release on bail; a Delhi court granted formal bail the same week and he was released from Tihar.",
      ],
      source: "thehindu-newsclick2023; toi-bail2024; thehindu-release2024",
      date: "Oct 2023 – May 2024",
    },
    {
      title: "The NDTV takeover and concentrated ownership",
      body: [
        "RSF's India profile says the 2022 acquisition of NDTV by Gautam Adani's group — a business ally of PM Modi — 'signalled the end of pluralism in the mainstream media', and flags highly concentrated ownership (Reliance's Mukesh Ambani owns more than 70 outlets) as a core reason for India's low rank.",
      ],
      source: "rsf-india",
      date: "2022–2026",
    },
  ],
  verdict:
    "The RSF index is a structured expert assessment with real abuse data behind it — and by its own lights India has spent the current decade in the 'very serious' band, with the 2026 score (31.96) below even the 2025 one. The government's objections are not baseless: the respondent base is small and anonymous, pre-2022 numbers are not comparable, and a rank can improve while conditions worsen. Read the score, not the rank, and read the five sub-indicators rather than the headline; the index describes the environment for journalism, and the NewsClick and NDTV episodes are the kind of cases it is trying to capture.",
};
