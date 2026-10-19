import type { IndexPage } from "../types";

export const airQuality: IndexPage = {
  slug: "air-quality",
  name: "World Air Quality Report",
  tagline:
    "India ranks 6th of 143 countries at 48.9 µg/m³ — a three-year low that is still nearly ten times the WHO guideline. The government says the ranking itself is misleading.",
  category: "pollution",
  measure: [
    "Air pollution here means fine particulate matter (PM2.5 — particles under 2.5 microns that reach deep into the lungs), measured as an annual average concentration in micrograms per cubic metre. India's own daily headline number is the CPCB Air Quality Index, which condenses eight pollutants into a single 0–500 score with colour-coded health bands. The global comparison comes from IQAir's World Air Quality Report, which ranks countries and cities by population-weighted annual average PM2.5.",
    "The reference point for 'clean' is the WHO guideline of 5 µg/m³ annual average — a limit cut from 10 µg/m³ in September 2021.",
  ],
  built: {
    paragraphs: [
      "India's National AQI was launched by the Environment Ministry in 2014. It has six bands — Good (0–50) through Severe (401–500) — considers eight pollutants (PM10, PM2.5, NO2, SO2, CO, O3, NH3, Pb), and reports the worst sub-index of the pollutants measured at a station.",
      "IQAir's report, now in its 8th edition, is published by a Swiss air-quality technology company. The 2025 edition analysed data from monitoring stations across 9,446 cities in 143 countries and territories; country values are population-weighted annual average PM2.5, drawn from both government regulatory monitors and low-cost sensors run by citizens and researchers.",
      "The policy response is the National Clean Air Programme, launched January 2019 for 130 non-attainment and million-plus cities: an original 20–30% PM reduction target for 2024, later extended to 2026 with a revised 40% PM10 reduction target from a 2017 baseline. ₹13,036.52 crore has been released to cities from FY 2019-20 to July 2025.",
      "Deaths attributable to air pollution are estimated separately by the India-GBD collaboration in The Lancet Planetary Health, using Global Burden of Disease methods across states — not by IQAir.",
    ],
    inputs: [
      "CPCB National AQI: worst sub-index across eight pollutants, per station",
      "IQAir: population-weighted annual average PM2.5 per country",
      "WHO annual guideline: 5 µg/m³ (2021)",
      "Lancet/GBD: state-level attributable deaths",
    ],
    scale:
      "Daily: 0–500 AQI in six bands. Global ranking: annual PM2.5 in µg/m³ against the WHO guideline of 5.",
  },
  headline: {
    value: "6 / 143",
    label: "48.9 µg/m³ population-weighted annual average PM2.5 — nearly 10× the WHO guideline of 5",
    rank: "down from 5th in 2024 and 3rd in 2023",
    asOf: "IQAir World Air Quality Report, 2025 data (released 24 Mar 2026)",
    source: "hindu2026",
  },
  trend: {
    title: "Population-weighted annual average PM2.5, five years",
    takeaway:
      "The national average has fallen three years running — 2025 is the lowest in the series. But 48.9 µg/m³ is still nearly ten times the WHO guideline, and the estimated toll remains enormous: 1.67 million deaths attributable to air pollution in 2019, 17.8% of all deaths in the country.",
    source:
      "iqaircountries; greenpeace2021; hindu2023; greenpeace2022; ht2024; hindu2025; hindu2026; who2021; lancet2020",
    unit: "µg/m³ (annual average PM2.5; rank = position among the world's most polluted countries)",
    lowerIsBetter: true,
    points: [
      { year: 2021, value: 58.1 },
      { year: 2022, value: 53.3, rank: 8 },
      { year: 2023, value: 54.4, rank: 3 },
      { year: 2024, value: 50.6, rank: 5 },
      { year: 2025, value: 48.9, rank: 6 },
    ],
  },
  peers: {
    title: "Annual average PM2.5, 2025",
    takeaway:
      "South Asia is the world's worst-air neighbourhood: Pakistan, Bangladesh and India hold three of the top six slots. Nepal and China are markedly cleaner than India; the United States, at 7.3 µg/m³, is close to the WHO guideline of 5. Sri Lanka, the UK and Brazil are covered by the index but their 2025 values could not be verified from the ranking table.",
    source: "iqaircountries; iqair2025pr",
    unit: "µg/m³",
    lowerIsBetter: true,
    points: [
      { country: "Pakistan", value: 67.3, year: 2025 },
      { country: "Bangladesh", value: 66.1, year: 2025 },
      { country: "Tajikistan", value: 57.3, year: 2025 },
      { country: "Chad", value: 53.6, year: 2025 },
      { country: "DR Congo", value: 50.2, year: 2025 },
      { country: "India", value: 48.9, year: 2025 },
      { country: "Nepal", value: 37.4, year: 2025 },
      { country: "China", value: 29.6, year: 2025 },
      { country: "United States", value: 7.3, year: 2025 },
    ],
  },
  credibility: {
    strengths: [
      "The largest global PM2.5 compilation — 143 countries in the 2025 edition, up from 138 in 2024 — with a stated methodology: population-weighted annual averages against the WHO guideline.",
      "The India death toll does not rest on the company's own modelling but on peer-reviewed GBD/Lancet estimation.",
      "The report usefully exposes the gap between India's NAAQS (40 µg/m³ annual PM2.5) and the WHO guideline (5 µg/m³) — a gap satellite data confirms on the ground.",
    ],
    criticisms: [
      {
        text: "The government's core rebuttal: per IQAir's own report only 38% of its data comes from government agencies; 62% comes from other sources including low-cost sensors 'not used for regulatory purposes', and urban-centric population-weighted averages mean country rankings 'may not portray true picture and could be misleading'.",
        source: "pib2025air",
        date: "24 Jul 2025",
      },
      {
        text: "Monitoring is thin on the ground: in 2024 India had 1,524 air quality stations (558 continuous); 28 of 130 NCAP cities had no continuous monitoring station, and NCAP's target of 1,500 manual stations by 2024 was unmet by 534.",
        source: "creancap",
      },
      {
        text: "NCAP progress is uneven: of 97 NCAP cities with adequate PM10 data, only 41 met the initial 20–30% reduction target and 29 recorded an increase; 67% of clean-air funds went to road dust while industry and domestic fuel got 1% each; of ₹11,211 crore released in 2019–2025, only 68% was utilised.",
        source: "creancap",
      },
      {
        text: "A counter-dataset points the same direction but from cities: a Respirer Living Sciences analysis found Indian cities cut PM2.5 by an average 27% from 2019 to 2024 (24% in NCAP cities), with Varanasi down 76% — city averages, not the population-weighted national figure IQAir reports.",
        source: "et2025respirer",
      },
      {
        text: "The end of the US State Department's embassy monitoring programme in March 2025 weakened data in 44 countries, shrinking an independent cross-check on exactly the kind of dataset IQAir compiles.",
        source: "iqair2025pr",
      },
      {
        text: "The gap the index exposes is real regardless of how the ranking is built: a CREA satellite assessment found 60% of India's 749 districts breach even the Indian annual standard of 40 µg/m³ — and none meet the WHO guideline of 5.",
        source: "creasat",
      },
    ],
    gaps:
      "Sri Lanka, the UK and Brazil appear in IQAir's 2025 table but their values could not be extracted (the ranking is JS-rendered). Delhi's own 2025 annual average was not stated in the report coverage accessed; the last verified Delhi values are 96.4 µg/m³ (2021) and 105 µg/m³ under CPCB data for 2024. India's exact 2021 rank was never directly sourced (the 58.1 value is). No government statement specific to the 2025 edition exists — the 'misleading' rebuttal of 24 July 2025 addresses the 2024 report.",
  },
  politics: [
    {
      text:
        "In a written Rajya Sabha reply, MoS Environment Kirti Vardhan Singh dismissed the IQAir rankings as potentially 'misleading' (limited government data, low-cost sensors, urban-centric averaging) and said 'there is no conclusive data available to establish a direct correlation of death exclusively by air pollution' — against the Lancet/GBD estimate of 1.67 million attributable deaths in 2019 — while defending NCAP's ₹13,036.52 crore in released funds.",
      source: "pib2025air; lancet2020; reuters2020lancet",
      date: "24 Jul 2025",
    },
    {
      text:
        "The Pollution Control Board of Assam 'vehemently rejected' IQAir's finding that Guwahati was among the world's most polluted cities, disputing the report's data for the state.",
      source: "pcba2024",
      date: "20 Mar 2024",
    },
    {
      text:
        "The same July 2025 reply lists the government's mitigation frame: BS-VI fuel norms, PM E-DRIVE and PM-eBus Sewa electric mobility, biomass co-firing mandates for power plants within 300 km of Delhi, and NCAP city action plans that prioritise road dust — the source-apportionment studies put dust at 40–50% of PM10 in most cities, which is also where most of the money went.",
      source: "pib2025air",
      date: "24 Jul 2025",
    },
  ],
  stories: [
    {
      title: "Schools shut as the capital turns 'severe'",
      body: [
        "On 5 November 2023, with air quality in the 'severe' band of the National AQI, the Delhi government ordered all primary schools closed until 10 November as toxic smog settled over the capital. It has become an annual ritual: closures are no longer an emergency measure but a seasonal expectation.",
      ],
      source: "reuters2023; cpcbaqi; pib2014aqi",
      date: "5 Nov 2023",
    },
    {
      title: "GRAP Stage-IV: the emergency ladder's top rung",
      body: [
        "On 17–18 November 2024 Delhi's daily average AQI hit 441 and then 457 — past the 450 threshold of 'Severe+'. CAQM invoked GRAP Stage-IV from 8 am on 18 November, banning truck entry and construction; the Supreme Court ordered schools shut across the entire NCR. Revised CAQM guidelines now require schools to close whenever GRAP Stage 3 or 4 is invoked — pre-authorising the shutdown of normal life for millions.",
      ],
      source: "pibgrap2024; toi2024; pibcaqm2024; cpcbaqi",
      date: "18 Nov 2024",
    },
    {
      title: "The most polluted city wasn't Delhi",
      body: [
        "In the 2024 edition the world's most polluted metropolitan area was Byrnihat, a small industrial belt on the Meghalaya–Assam border, at 128.2 µg/m³ — more than 25× the WHO guideline. The finding drew national attention to unregulated industry clusters far outside the metros, and to the limits of a monitoring network concentrated in the cities the NCAP already watches.",
      ],
      source: "iqair2024pr; ie2025; who2021",
      date: "Mar 2025",
    },
  ],
  verdict:
    "The PM2.5 numbers here are the best available cross-country comparison, and the direction is genuinely favourable: a falling national average for three straight years, corroborated by independent city-level analyses. The objections cut both ways. The government is right that 62% of the data is not from government monitors and that population-weighted urban averages are a construct — but its own response, NCAP, is behind on monitoring and spends two-thirds of its money on road dust, and its claim of 'no conclusive data' on deaths contradicts the peer-reviewed Lancet estimate it was citing the framework of. Whether India is 3rd or 6th matters less than the fact that no district in the country meets the WHO guideline.",
};
