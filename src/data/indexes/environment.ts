import type { IndexPage } from "../types";

export const environment: IndexPage = {
  slug: "environmental-performance-index",
  name: "Environmental Performance Index",
  tagline:
    "India ranks 176 of 177 — second-last, above only Laos. The government's rebuttal is about how the index is built, not about the air people breathe.",
  category: "environment",
  measure: [
    "The Yale Environmental Performance Index (EPI) ranks countries on how close they are to established environmental policy targets. It combines the state of the environment people live in (air quality, water and sanitation, heavy metals), the health of ecosystems (biodiversity, forests, fisheries, agriculture), and — in recent editions — a separate climate objective tracking emissions trends and projected emissions.",
    "India has been at or near the bottom of the ranking in every edition since 2022: last of 180 in 2022, 176th of 180 in 2024, and second-last of 177 in 2026.",
  ],
  built: {
    paragraphs: [
      "The EPI is published every two years by the Yale Center for Environmental Law & Policy (Yale University) and the Center for International Earth Science Information Network (CIESIN) at Columbia University. The 2024 edition scored 180 countries on 58 indicators under three objectives; the 2026 edition ranks 177 countries on 47 indicators across 12 issue categories under the same three objectives.",
      "Each indicator is scored 0–100 against a target — WHO air-quality guidelines, for example — and then weighted up a hierarchy: indicator → issue category → policy objective → overall EPI score. Inputs include satellite-derived data (Copernicus atmospheric composition for PM2.5) and the Global Burden of Disease study for health outcomes such as pollution-related years of life lost.",
      "A companion ranking, the Climate Change Performance Index (CCPI) published by Germanwatch, NewClimate Institute and Climate Action Network, tracks climate mitigation in 63 countries plus the EU, weighting greenhouse-gas emissions 40%, renewable energy 20%, energy use 20% and expert-assessed climate policy 20%. India does far better on it than on the EPI — until the 2026 edition, where it fell 13 places.",
    ],
    inputs: [
      "58 indicators in 2024; 47 indicators in 2026, each scored 0–100 against a policy target",
      "Satellite-derived environmental data (Copernicus for air quality)",
      "Global Burden of Disease for health outcomes (pollution-related DALYs)",
      "CCPI (climate only): emissions 40%, renewables 20%, energy use 20%, expert policy assessment 20%",
    ],
    scale: "0–100, where 100 means meeting the target; ranks on that score",
  },
  headline: {
    value: "176 / 177",
    label: "score 22.46 of 100 — above only Laos",
    rank: "second-last in the world",
    asOf: "EPI 2026",
    source: "yale2026",
  },
  trend: {
    title: "India's EPI score, four editions",
    takeaway:
      "The verified scores bounce between 18.9 and 27.6 with no clear direction — and the editions are not directly comparable, because the indicator set and weights change each cycle (58 indicators in 2024, 47 in 2026). The consistent finding is the rank: bottom tier in every edition since 2022.",
    source: "yale2022; yale2024b; yale2026; indianexpress2022",
    unit: "score, 0–100",
    points: [
      { year: 2020, value: 27.6, rank: 168 },
      { year: 2022, value: 18.9, rank: 180 },
      { year: 2024, value: 27.6, rank: 176 },
      { year: 2026, value: 22.46, rank: 176 },
    ],
  },
  peers: {
    title: "EPI 2024 scores, South Asia and comparators",
    takeaway:
      "Every South Asian neighbour ranks in the bottom fifty — this is a regional profile, not an Indian outlier. But the gap to China (35.4), and the chasm to the UK (72.6) and US (57.2), is wide. India sits 176th of 180, ahead of only Myanmar, Laos, Pakistan and Vietnam.",
    source: "yale2024a",
    unit: "score, 0–100",
    points: [
      { country: "United Kingdom", value: 72.6, year: 2024 },
      { country: "United States", value: 57.2, year: 2024 },
      { country: "Brazil", value: 53.0, year: 2024 },
      { country: "Sri Lanka", value: 38.8, year: 2024 },
      { country: "China", value: 35.4, year: 2024 },
      { country: "Nepal", value: 33.1, year: 2024 },
      { country: "Bangladesh", value: 28.1, year: 2024 },
      { country: "India", value: 27.6, year: 2024 },
      { country: "Laos", value: 26.3, year: 2024 },
      { country: "Pakistan", value: 25.5, year: 2024 },
      { country: "Vietnam", value: 24.6, year: 2024 },
    ],
  },
  credibility: {
    strengths: [
      "Long-running, academically led, fully documented methodology with downloadable per-country data files, going back to 2002.",
      "Ranks on measured current conditions, not promises — EPI principal investigator Martin Wolf: 'EPI has always based our rankings on country performance today; not on what a country promises to accomplish years or decades from now.'",
      "The air-quality and health signal is grounded in the Global Burden of Disease, which attributes millions of premature deaths in India to poor ambient air quality every year.",
    ],
    criticisms: [
      {
        text: "The Indian government's core objection: the 'projected 2050 GHG emissions' indicator extrapolates the last ten years' emissions trend instead of modelling policy, renewables and carbon sinks — and carries roughly 14% weight while per-capita-emissions equity indicators carry about 1%.",
        source: "pib2022",
      },
      {
        text: "A second MoEFCC release repeated that the metrics are 'unscientific and subjective' and detailed the same 14%-vs-1% weighting complaint, arguing the index ignores sustainable consumption and production indicators.",
        source: "pib2022b",
      },
      {
        text: "The ministry flagged an India-specific data gap: Copernicus satellite air-pollution data carry higher uncertainty where ground monitoring networks are sparse, which 'reduces the chance of accurate assessment of Air Quality' in India.",
        source: "pib2022",
      },
      {
        text: "The index measures the extent of protected areas, not their management quality, and omits water quality, water-use efficiency and waste-generation-per-capita indicators.",
        source: "pib2022",
      },
      {
        text: "Genuine Indian data gaps affect all environmental assessment: the 2021 Census was not conducted, and the EPI's health inputs rely on global modelled datasets (GBD, Copernicus) rather than dense Indian monitoring.",
        source: "indiaforum",
      },
      {
        text: "Even the India-friendly CCPI shows slippage: in the 2026 edition — which credits low per-capita emissions — India fell 13 places to 23rd, a 'medium' performer, last among ranked countries on emissions trends, with no coal exit timeline.",
        source: "germanwatch2025",
      },
      {
        text: "Yale's answer to the weighting complaint: the weights are a balanced scorecard, not adjusted to punish countries, and rejecting a data-driven tool outright is 'unproductive and perilous.'",
        source: "downtoearth2022",
      },
    ],
    gaps:
      "India's EPI 2016 and 2018 scores could not be verified (only ranks, via a Down To Earth piece quoting a ministry official), and the EPI 2022 country page is now offline — the 18.9 score comes from Yale's archived per-country JSON and Indian Express. Pakistan's and Vietnam's EPI 2026 ranks were not in the captured portion of Yale's 2026 table; their 2024 ranks are used here. Yale's formal response document to the MoEFCC was located but not extracted; its content is represented through the Down To Earth interview.",
  },
  politics: [
    {
      text:
        "8 June 2022: MoEFCC formally rejected EPI 2022 (India ranked 180 of 180) in a PIB release: the index 'has many indicators based on unfounded assumptions. Some of these indicators used for assessing performance are extrapolated and based on surmises and unscientific methods,' and 'the Ministry of Environment does not accept its analysis and conclusions.'",
      source: "pib2022",
      date: "8 Jun 2022",
    },
    {
      text:
        "The same statement argued equity is under-weighted: 'The principle of equity is given very low weightage in the form of the indicators like GHG emission per capita… The CBDR-RC principle is also barely reflected,' and noted India had already achieved 40% non-fossil installed capacity nine years ahead of its 2030 pledge.",
      source: "pib2022",
      date: "8 Jun 2022",
    },
    {
      text:
        "Yale's rebuttal: lead scientist Martin Wolf said the government 'decided to reject a useful data-driven tool instead of leveraging its findings,' and denied the weights were manipulated against India.",
      source: "downtoearth2022",
      date: "Jun 2022",
    },
    {
      text:
        "No equivalent government rejection of the CCPI exists. Official rhetoric instead cites India's decade-high CCPI positions (top-10 for six years until 2024) and the 50% non-fossil milestone; the 2026 fall to 23rd went unremarked by government releases.",
      source: "economictimes2022",
      date: "Nov 2025",
    },
    {
      text:
        "The 40%-non-fossil claim in the PIB rebuttal later hardened into fact: PIB announced 50% non-fossil capacity achieved on 14 July 2025, five years ahead of the NDC deadline, and Reuters confirmed the milestone.",
      source: "reuters2025",
      date: "14 Jul 2025",
    },
  ],
  stories: [
    {
      title: "The Yamuna's toxic foam",
      body: [
        "In November 2024, during Chhath Puja, thousands of devotees waded into the Yamuna in Delhi to pray despite a Delhi High Court order — 'Please understand you will fall sick' — restricting ritual bathing. The river ran with thick white foam from detergents and phosphates. A February 2024 parliamentary report had called the Yamuna 'more of a toxic waterway than a river,' noting heavy metals 'from arsenic to zinc.' Government statistics attribute about 80% of its pollution load to raw sewage; that same week, Delhi's PM2.5 exceeded 50 times the WHO daily maximum. This is the lived reality behind the EPI's bottom-tier air-quality and water scores.",
      ],
      source: "france24_2024",
      date: "Nov 2024",
    },
    {
      title: "Air pollution's death toll",
      body: [
        "The EPI's health inputs, drawn from the Global Burden of Disease, attribute more than 1.6 million deaths a year in India — about 18% of all deaths — to air pollution. It is the single biggest driver of India's last-place 2022 EPI rank, and it is measured from bodies, not satellites.",
      ],
      source: "mongabay2022",
      date: "Jun 2022",
    },
    {
      title: "The counter-story the government prefers",
      body: [
        "India's per-capita fossil CO₂ emissions in 2023 were 2.1 tonnes — against a world average of 4.7, the EU's 5.6, China's 8.3 and the US's 14.4. On the build-out side, renewable capacity rose from 76.38 GW in 2014 to 203.18 GW by October 2024 (46.3% of installed capacity), and in June 2025 non-fossil sources reached 50.08% of installed capacity — the 2030 NDC milestone, met five years early. Solar alone went from 2.82 GW to 116.25 GW over the decade. These are real, and they coexist with the EPI ranking: the index measures current environmental conditions, not decarbonisation trajectory.",
      ],
      source: "gcp2024",
      date: "Jun 2025",
    },
  ],
  verdict:
    "On current environmental conditions, India sits at or near the bottom of a well-documented academic ranking, and the underlying health signal — more than 1.6 million air-pollution deaths a year — does not depend on Yale's weighting choices. The government's strongest objections are also real: the projected-emissions indicator is an extrapolation, equity and per-capita emissions are barely weighted, and satellite air data are less reliable where ground monitoring is thin. Both things are true at once, which the CCPI makes plain: India ranks near the top of the climate league table on per-capita fairness for years, then falls 13 places the moment emissions trends sour. What the government's rebuttal never engages is the air itself — the part of the index an Indian child breathes regardless of how the weights are set.",
};
