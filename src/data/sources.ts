/**
 * Central bibliography. Every figure and claim on the site must reference an id
 * declared here; scripts/check.mjs enforces it both ways (no orphan sources,
 * no undeclared references). Managed by scripts/merge-sources.mjs — research
 * packs are the input, this file is generated output plus manual additions.
 */
export type Source = {
  title: string;
  publisher: string;
  year: number;
  url: string;
};

export const SOURCES: Record<string, Source> = {
  "placeholder": {
    title: "Placeholder — replaced during the data pass",
    publisher: "—",
    year: 2026,
    url: "https://example.com",
  },

  "iqair2025pr": {
    title: 'IQAir\'s 2025 World Air Quality Report finds only 14% of cities meet WHO air pollution guideline',
    publisher: 'IQAir',
    year: 2026,
    url: 'https://iqair.com/gb/newsroom/waqr-2025-pr',
  },

  "iqaircountries": {
    title: 'Most Polluted Countries 2018-2025 (annual average PM2.5 ranking)',
    publisher: 'IQAir',
    year: 2026,
    url: 'https://www.iqair.com/world-most-polluted-countries',
  },

  "iqair2024pr": {
    title: '2024 IQAir World Air Quality Report (press release, 11 March 2025)',
    publisher: 'IQAir',
    year: 2025,
    url: 'https://www.iqair.com/newsroom/waqr-2024-pr',
  },

  "hindu2026": {
    title: 'India 6th most polluted country in the world: World Air Quality Report',
    publisher: 'The Hindu',
    year: 2026,
    url: 'https://www.thehindu.com/news/national/india-6th-most-polluted-country-in-the-world-world-air-quality-report/article70780385.ece',
  },

  "hindu2025": {
    title: '13 of world\'s 20 most polluted cities in India, Delhi most polluted capital',
    publisher: 'The Hindu',
    year: 2025,
    url: 'https://www.thehindu.com/news/national/13-of-worlds-20-most-polluted-cities-in-india-delhi-most-polluted-capital/article69316060.ece',
  },

  "ie2025": {
    title: 'Byrnihat tops global pollution list, Delhi most polluted capital: report',
    publisher: 'Indian Express',
    year: 2025,
    url: 'https://indianexpress.com/article/india/assam-byrnihat-tops-global-pollution-list-delhi-most-polluted-capital-report-9880169/',
  },

  "ht2024": {
    title: 'India was 3rd most polluted country in 2023: World Air Quality Report',
    publisher: 'Hindustan Times',
    year: 2024,
    url: 'https://www.hindustantimes.com/india-news/india-was-3rd-most-polluted-country-in-2023-world-air-quality-report-101710836837575.html',
  },

  "hindu2023": {
    title: 'India ranks eighth among countries with the worst air quality index: World Air Quality Report',
    publisher: 'The Hindu',
    year: 2023,
    url: 'https://www.thehindu.com/news/national/india-ranks-eighth-among-countries-with-the-worst-air-quality-index-world-air-quality-report/article66618661.ece',
  },

  "greenpeace2022": {
    title: 'India the 8th Most Polluted Country Worldwide in 2022: IQAir',
    publisher: 'Greenpeace India',
    year: 2023,
    url: 'https://www.greenpeace.org/india/en/publication/15432/india-the-8th-most-polluted-country-worldwide-in-2022-iqair',
  },

  "greenpeace2021": {
    title: 'New Delhi most polluted capital city in the World, says IQAIR latest report (2021 World Air Quality Report)',
    publisher: 'Greenpeace India',
    year: 2022,
    url: 'https://www.greenpeace.org/india/en/press/13245/new-delhi-most-polluted-capital-city-in-the-world-says-iqair-latest-report',
  },

  "cpcbaqi": {
    title: 'National Air Quality Index — About AQI (scale, categories, pollutants)',
    publisher: 'Central Pollution Control Board',
    year: 2014,
    url: 'https://app.cpcbccr.com/ccr_docs/About_AQI.pdf',
  },

  "pib2014aqi": {
    title: 'Launch of National Air Quality Index (six categories, eight pollutants)',
    publisher: 'PIB, Ministry of Environment, Forest & Climate Change',
    year: 2014,
    url: 'https://pib.gov.in/newsite/printrelease.aspx?relid=110654',
  },

  "pib2025air": {
    title: 'Parliament Question: Air Pollution — Rajya Sabha written reply (IQAir report \'could be misleading\'; NCAP funds), 24 July 2025',
    publisher: 'PIB, Ministry of Environment, Forest & Climate Change',
    year: 2025,
    url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2147803',
  },

  "lancet2020": {
    title: 'Health and economic impact of air pollution in the states of India: the Global Burden of Disease Study 2019 (1.67 million deaths; 17.8% of all deaths)',
    publisher: 'The Lancet Planetary Health (ICMR–PHFI–GBD India)',
    year: 2020,
    url: 'https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(20)30298-9/fulltext',
  },

  "reuters2020lancet": {
    title: 'Pollution deaths in India rose to 1.67 million in 2019, Lancet report says',
    publisher: 'Reuters',
    year: 2020,
    url: 'https://www.reuters.com/business/environment/pollution-deaths-india-rose-167-million-2019-lancet-2020-12-22/',
  },

  "who2021": {
    title: 'New WHO Global Air Quality Guidelines aim to save millions of lives from air pollution (annual PM2.5 guideline cut to 5 µg/m³)',
    publisher: 'World Health Organization',
    year: 2021,
    url: 'https://www.who.int/news/item/22-09-2021-new-who-global-air-quality-guidelines-aim-to-save-millions-of-lives-from-air-pollution',
  },

  "creancap": {
    title: 'Tracing the Hazy Air 2025: Progress Report on National Clean Air Programme (NCAP)',
    publisher: 'Centre for Research on Energy and Clean Air (CREA)',
    year: 2025,
    url: 'https://energyandcleanair.org/publication/tracing-the-hazy-air-2025-progress-report-on-national-clean-air-programme-ncap',
  },

  "creasat": {
    title: 'A satellite-based PM2.5 assessment across India\'s airsheds, states and districts (60% of 749 districts breach NAAQS 40; none meet WHO 5)',
    publisher: 'Centre for Research on Energy and Clean Air (CREA)',
    year: 2025,
    url: 'https://energyandcleanair.org/publication/a-satellite-based-pm2-5-assessment-across-indias-airsheds-states-and-districts',
  },

  "et2025respirer": {
    title: 'Cities in India reduce PM2.5 pollution by 27% in six years: report (Respirer Living Sciences)',
    publisher: 'Economic Times',
    year: 2025,
    url: 'https://economictimes.indiatimes.com/news/india/cities-in-india-reduce-pm2-5-pollution-by-27-pc-in-six-years-report/articleshow/117025868.cms',
  },

  "pibgrap2024": {
    title: 'CAQM invokes Stage-IV of GRAP in entire Delhi-NCR w.e.f. 08:00 AM of 18.11.2024 (Delhi AQI 457 at 7pm)',
    publisher: 'PIB / Commission for Air Quality Management',
    year: 2024,
    url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2074114',
  },

  "toi2024": {
    title: 'School closure in NCR ordered by SC amid Delhi\'s air pollution, GRAP-4 restrictions imposed (18 November 2024)',
    publisher: 'Times of India',
    year: 2024,
    url: 'https://timesofindia.indiatimes.com/education/news/school-closure-in-ncr-ordered-by-sc-amid-delhis-air-pollution-grap-4-restrictions-imposed/articleshow/115422925.cms',
  },

  "pibcaqm2024": {
    title: 'Schools must shut in Delhi, NCR districts under GRAP stages 3 and 4: CAQM updates guidelines',
    publisher: 'The Hindu',
    year: 2024,
    url: 'https://www.thehindu.com/news/cities/Delhi/schools-must-shut-in-delhi-ncr-districts-under-grap-stages-3-and-4-caqm-updates-guidelines/article68892383.ece',
  },

  "reuters2023": {
    title: 'Delhi primary schools close amidst high pollution levels (5 November 2023)',
    publisher: 'Reuters',
    year: 2023,
    url: 'https://www.reuters.com/world/india/delhi-primary-schools-close-amidst-high-pollution-levels-2023-11-05/',
  },

  "pcba2024": {
    title: 'Assam Pollution Control Board rejects claim of Guwahati being second most polluted city (20 March 2024)',
    publisher: 'India Today NE',
    year: 2024,
    url: 'https://indiatodayne.in/assam/story/assam-pollution-control-board-rejects-claim-of-guwahati-being-second-most-polluted-city-937067-2024-03-20',
  },

  "yale2026": {
    title: 'Environmental Performance Index 2026 — Results (full country table)',
    publisher: 'Yale Center for Environmental Law & Policy',
    year: 2026,
    url: 'https://epi.yale.edu/indicator/2026/EPI',
  },

  "yale2024a": {
    title: '2024 Environmental Performance Index — Environmental Performance Index (full ranking)',
    publisher: 'Yale Center for Environmental Law & Policy / CIESIN, Columbia University',
    year: 2024,
    url: 'https://epi.yale.edu/measure/2024/EPI',
  },

  "yale2024b": {
    title: '2024 Environmental Performance Index — India country profile',
    publisher: 'Yale Center for Environmental Law & Policy',
    year: 2024,
    url: 'https://epi.yale.edu/country/2024/IND',
  },

  "yale2022": {
    title: 'India — Environmental Performance Index 2022 (per-country data file: rank 180, score 18.90)',
    publisher: 'Yale Center for Environmental Law & Policy',
    year: 2022,
    url: 'https://epi.yale.edu/sites/default/files/ind.json',
  },

  "pib2022": {
    title: 'Ministry of Environment, Forest and Climate Change Rebuts the Environmental Performance Index 2022 (8 June 2022)',
    publisher: 'Press Information Bureau, Government of India',
    year: 2022,
    url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1832058',
  },

  "pib2022b": {
    title: 'Environmental Performance Index 2022 does not consider several important indicators of sustainable consumption and production',
    publisher: 'Press Information Bureau, Government of India',
    year: 2022,
    url: 'https://pib.gov.in/Pressreleaseshare.aspx?PRID=1844645&lang=2&reg=48',
  },

  "downtoearth2022": {
    title: 'Environment Performance Index: Yale counters India\'s claim that report was based on unscientific methods',
    publisher: 'Down To Earth',
    year: 2022,
    url: 'https://www.downtoearth.org.in/governance/environment-performance-index-yale-counters-india-s-claim-that-report-was-based-on-unscientific-methods-83448',
  },

  "indianexpress2022": {
    title: 'Explained: What is the environment index, and why has India questioned it?',
    publisher: 'The Indian Express',
    year: 2022,
    url: 'https://indianexpress.com/article/explained/environment-index-and-india-7963597',
  },

  "theprint2024": {
    title: 'India ranks 5th from bottom in Environment Performance Index 2024, high emissions flagged again',
    publisher: 'ThePrint',
    year: 2024,
    url: 'https://theprint.in/environment/india-ranks-5th-from-bottom-in-environment-performance-index-2024-high-emissions-flagged-again/2128391/',
  },

  "economictimes2022": {
    title: 'India ranks high in climate protection, bags 8th position in Climate Change Performance Index (CCPI 2023)',
    publisher: 'The Economic Times',
    year: 2022,
    url: 'https://economictimes.indiatimes.com/news/india/india-ranks-high-in-climate-protection-bags-8th-position-in-climate-change-performance-index/printarticle/95536461.cms',
  },

  "indiatoday2024": {
    title: 'India ranks 10th in global climate fight: CCPI 2025 report',
    publisher: 'India Today',
    year: 2024,
    url: 'https://www.indiatoday.in/information/story/india-ranks-10-in-global-climate-fight-ccpi-2637010-2024-11-21',
  },

  "ccpi2026": {
    title: 'India — Climate Change Performance Index 2026 country page (rank 23, medium performer)',
    publisher: 'Germanwatch / NewClimate Institute / Climate Action Network',
    year: 2026,
    url: 'https://ccpi.org/country/ind/',
  },

  "germanwatch2025": {
    title: 'Climate ranking shows: The world is making progress, but the US and other Petrostates are resisting change (CCPI 2026 release)',
    publisher: 'Germanwatch e.V.',
    year: 2025,
    url: 'https://www.germanwatch.org/en/93343',
  },

  "toi2025": {
    title: 'India slips 13 ranks, figures at 23rd position in latest Climate Change Performance Index',
    publisher: 'The Times of India',
    year: 2025,
    url: 'https://timesofindia.indiatimes.com/india/india-slips-13-ranks-figures-at-23rd-position-in-latest-climate-change-performance-index/articleshow/125419895.cms',
  },

  "gcp2024": {
    title: 'Annual fossil CO₂ emissions per capita: top six emitters, 2023 (Global Carbon Budget 2024, slide s26)',
    publisher: 'Global Carbon Project',
    year: 2024,
    url: 'https://robbieandrew.github.io/GCB2024/PDF/s26_2024_Top_FF_Emitters_percapita.pdf',
  },

  "pib2024": {
    title: 'India\'s Renewable Energy Capacity Hits New Milestone — crosses 200 GW (203.18 GW in October 2024)',
    publisher: 'Press Information Bureau, Government of India',
    year: 2024,
    url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2073038',
  },

  "pib2025": {
    title: 'India Achieves 50% clean power capacity five years ahead of target (14 July 2025)',
    publisher: 'Press Information Bureau, Government of India',
    year: 2025,
    url: 'https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2144627',
  },

  "pib2025b": {
    title: 'PIB release: solar capacity 2.82 GW (2014) to 116.25 GW (June 2025); GDP emission intensity down 36% (2005–2020)',
    publisher: 'Press Information Bureau, Government of India',
    year: 2025,
    url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2146355&lang=2&reg=3',
  },

  "reuters2025": {
    title: 'India hits 50% non-fossil power milestone ahead of 2030 clean energy target (14 July 2025)',
    publisher: 'Reuters',
    year: 2025,
    url: 'https://www.reuters.com/business/energy/india-hits-50-non-fossil-power-milestone-ahead-2030-clean-energy-target-2025-07-14/',
  },

  "ddnews2024": {
    title: 'India\'s renewable energy capacity has increased by 165 percent in 10 years: Pralhad Joshi (76.38 GW in 2014 to 203.1 GW in 2024)',
    publisher: 'DD News',
    year: 2024,
    url: 'https://ddnews.gov.in/en/indias-renewable-energy-capacity-has-increased-by-165-percent-in-10-years-pralhad-joshi',
  },

  "france24_2024": {
    title: 'India\'s Hindus bathe in holy river defiled by pollution (AFP, Yamuna toxic foam, Chhath Puja, November 2024)',
    publisher: 'AFP via France 24',
    year: 2024,
    url: 'https://www.france24.com/en/live-news/20241107-india-s-hindus-bathe-in-holy-river-defiled-by-pollution',
  },

  "mongabay2022": {
    title: 'Environmental Performance Index: An unscientific study or an opportunity to reflect and improve?',
    publisher: 'Mongabay-India',
    year: 2022,
    url: 'https://india.mongabay.com/2022/06/environmental-performance-index-an-unscientific-study-or-an-opportunity-to-reflect-and-improve/',
  },

  "indiaforum": {
    title: 'The Household Consumption Expenditure Survey 2022-23 (analysis incl. junked 2017-18 round, Census delay)',
    publisher: 'The India Forum',
    year: 2024,
    url: 'https://theindiaforum.in/economy/household-consumption-expenditure-survey-2022-23',
  },

  "whr2025": {
    title: 'World Happiness Report 2025',
    publisher: 'Wellbeing Research Centre, University of Oxford (with Gallup and UN SDSN)',
    year: 2025,
    url: 'https://www.worldhappiness.report/ed/2025/',
  },

  "whrnews2025": {
    title: 'World Happiness Report 2025: People are much kinder than we expect, research shows',
    publisher: 'The World Happiness Report',
    year: 2025,
    url: 'https://www.worldhappiness.report/news/world-happiness-report-2025-people-are-much-kinder-than-we-expect-research-shows',
  },

  "whrfaq2025": {
    title: 'Frequently Asked Questions (methodology: Cantril Ladder, Gallup World Poll, sample size, 3-year averaging)',
    publisher: 'The World Happiness Report',
    year: 2025,
    url: 'https://www.worldhappiness.report/faq/',
  },

  "whf2026": {
    title: 'Measuring What Matters? A Critical Review of the World Happiness Report Framework (2012–2026), with Special Reference to India',
    publisher: 'World Happiness Foundation',
    year: 2026,
    url: 'https://www.worldhappiness.foundation/en/research/p/whf-2026-002',
  },

  "arora2026": {
    title: 'The Hoax of Happiness: An Analysis of Inadequate Indicators of World Happiness Report—Evidence from India (Mohini Arora & Rama Srivastava)',
    publisher: 'Journal of Developing Societies (Sage)',
    year: 2026,
    url: 'https://journals.sagepub.com/doi/10.1177/0169796X261438657',
  },

  "tnie2025": {
    title: 'India ranks 118th in World Happiness Report 2025; Finland retains top spot',
    publisher: 'The New Indian Express',
    year: 2025,
    url: 'https://www.newindianexpress.com/india/2025/Mar/20/india-ranks-118th-in-world-happiness-report-2025-finland-retains-top-spot',
  },

  "tnie2025b": {
    title: 'Happiness Index report leaves Indians unhappy',
    publisher: 'The New Indian Express (Bengaluru)',
    year: 2025,
    url: 'https://www.newindianexpress.com/cities/bengaluru/2025/Mar/24/happiness-index-report-leaves-indians-unhappy',
  },

  "businessline2025": {
    title: 'India ranks 118 out of 147 countries in happiness improving in last five years',
    publisher: 'The Hindu BusinessLine',
    year: 2025,
    url: 'https://www.thehindubusinessline.com/data-stories/data-focus/india-ranks-118-out-of-147-countries-in-happiness-improving-in-last-five-years/article69358191.ece',
  },

  "tribune2025": {
    title: 'India ranks 118th in World Happiness Report; researcher questions methodology',
    publisher: 'The Tribune',
    year: 2025,
    url: 'https://www.tribuneindia.com/news/india/india-ranks-118th-in-world-happiness-report-researcher-questions-methodology/',
  },

  "theprint2025": {
    title: 'India\'s social bonding is very high, happiness index doesn\'t reflect reality: Sri Sri Ravishankar',
    publisher: 'ThePrint (ANI)',
    year: 2025,
    url: 'https://theprint.in/world/indias-social-bonding-is-very-high-happiness-index-doesnt-reflect-reality-sri-sri-ravishankar/2560046/',
  },

  "loksatta2025": {
    title: 'Nitin Gadkari on India ranking below Pakistan in the world happiness index, AIIMS Nagpur convocation speech',
    publisher: 'Loksatta',
    year: 2025,
    url: 'https://www.loksatta.com/nagpur/central-minister-nitin-gadkari-said-india-ranks-below-pakistan-in-happy-human-index-during-speech-at-nagpur-aiims-mnb-82-css-98-4983920/',
  },

  "moneycontrol2025": {
    title: 'Indian policy makers need to look beyond the erroneous World Happiness Index (Sanghnomics, Arun Anand)',
    publisher: 'Moneycontrol',
    year: 2025,
    url: 'https://www.moneycontrol.com/news/opinion/indian-policy-makers-need-to-look-beyond-the-erroneous-world-happiness-index-12986766.html',
  },

  "ht2023": {
    title: 'World Happiness Report 2023: where does India stand? (India 126, Nepal 78, China 64, Pakistan 108, Bangladesh 119, Sri Lanka 112)',
    publisher: 'Hindustan Times',
    year: 2023,
    url: 'https://www.hindustantimes.com/world-news/world-happiness-report-2023-india-rank-these-countries-made-to-top-10-list-of-world-s-happiest-where-does-india-stand-101679332054568.html',
  },

  "tnie2023": {
    title: 'On happiness index, Pakistan, war-hit Ukraine fare better than India',
    publisher: 'The New Indian Express',
    year: 2023,
    url: 'https://newindianexpress.com/nation/2023/Mar/23/on-happiness-index-pakistanwar-hit-ukraine-fare-better-than-india-2558666.html',
  },

  "scroll2022": {
    title: 'India ranks 136th on the World Happiness report compiled by United Nations',
    publisher: 'Scroll.in',
    year: 2022,
    url: 'https://scroll.in/latest/1019896/india-ranks-139-on-the-world-happiness-report-compiled-by-united-nations',
  },

  "indiatoday2020": {
    title: 'India ranks 144 in World Happiness Report: Here\'s the full list of 156 countries',
    publisher: 'India Today',
    year: 2020,
    url: 'https://www.indiatoday.in/education-today/gk-current-affairs/story/india-ranks-144-in-world-happiness-report-2020-divd-1659884-2020-03-26',
  },

  "undp2025": {
    title: 'India\'s human development continues to make progress, ranks 130 out of 193 countries',
    publisher: 'UNDP India',
    year: 2025,
    url: 'https://www.undp.org/india/press-releases/indias-human-development-continues-make-progress-ranks-130-out-193-countries',
  },

  "hdr2025": {
    title: 'Human Development Report 2025: A Matter of Choice — People and Possibilities in the Age of AI',
    publisher: 'United Nations Development Programme',
    year: 2025,
    url: 'https://hdr.undp.org/content/human-development-report-2025',
  },

  "hdrannex2025": {
    title: 'HDR 2025 Statistical Annex, Table 1: Human Development Index and its components',
    publisher: 'UNDP Human Development Reports',
    year: 2025,
    url: 'https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Statistical_Annex_HDI_Table.pdf',
  },

  "deccanherald2025": {
    title: 'India climbs three spots to 130 on Human Development Index; Inequality slashes score by nearly a third',
    publisher: 'Deccan Herald',
    year: 2025,
    url: 'https://www.deccanherald.com/india/india-climbs-three-spots-to-130-on-human-development-index-inequality-slashes-score-by-nearly-a-third-3526848',
  },

  "nag2023": {
    title: 'Does club convergence matter? Empirical evidence on inequality in the human development index among Indian states (Ajit Nag & Jalandhar Pradhan)',
    publisher: 'Humanities and Social Sciences Communications (Nature Portfolio)',
    year: 2023,
    url: 'https://www.nature.com/articles/s41599-023-01518-z',
  },

  "dte2024": {
    title: 'Subnational disparities: 70% Indians in medium human development category, mismatch with states\' economic growth',
    publisher: 'Down To Earth',
    year: 2024,
    url: 'https://www.downtoearth.org.in/economy/subnational-disparities-70-indians-in-medium-human-development-category-mismatch-with-states-economic-growth',
  },

  "nipfp2026": {
    title: 'Human Development Index (HDI) of Indian States: 2022-23 (Working Paper 442)',
    publisher: 'National Institute of Public Finance and Policy',
    year: 2026,
    url: 'https://www.nipfp.org.in/media/documents/WP_442_2026_4cB6QdD.pdf',
  },

  "tnie2019": {
    title: 'South, North lead in human development index, East lags (SBI sub-national HDI report)',
    publisher: 'The New Indian Express',
    year: 2019,
    url: 'https://www.newindianexpress.com/business/2019/Mar/09/south-north-lead-in-human-development-index-east-lags-1948713.html',
  },

  "iipsnfhs5": {
    title: 'National Family Health Survey (NFHS-5) 2019-21: India Report',
    publisher: 'International Institute for Population Sciences / MoHFW',
    year: 2021,
    url: 'https://rchiips.org/nfhs/NFHS-5Reports/NFHS-5_INDIA_REPORT.pdf',
  },

  "dhsphases": {
    title: 'National Family Health Survey (NFHS-5) 2019-21 — India Report FR375 (survey phases and dates)',
    publisher: 'The DHS Program (ICF)',
    year: 2021,
    url: 'https://dhsprogram.com/pubs/pdf/FR375/FR375.pdf',
  },

  "pib2023nut": {
    title: 'Steady improvement in indicators for malnutrition — stunting 38.4%→35.5%, wasting 21.0%→19.3% (Rajya Sabha written reply, 20 Dec 2023)',
    publisher: 'PIB, Ministry of Women and Child Development',
    year: 2023,
    url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?lang=2&PRID=1988614&reg=48',
  },

  "dh2021": {
    title: '57% women of reproductive age and over 67% kids under five years anaemic, health survey finds (25 Nov 2021)',
    publisher: 'Deccan Herald',
    year: 2021,
    url: 'https://www.deccanherald.com/india/57-women-of-reproductive-age-and-over-67-kids-under-five-years-anaemic-health-survey-finds-report-1054314.html',
  },

  "ie2021anaemia": {
    title: 'More Indians are anaemic than before, 67% children under 5 affected: NFHS-5',
    publisher: 'Indian Express',
    year: 2021,
    url: 'https://indianexpress.com/article/cities/pune/more-indians-are-anaemic-than-before-67-pc-children-under-5-affected-nfhs-5-7914613/',
  },

  "nhsrcnha": {
    title: 'National Health Accounts Estimates for India 2021-22',
    publisher: 'National Health Systems Resource Centre, MoHFW',
    year: 2024,
    url: 'https://nhsrcindia.org/sites/default/files/2024-09/NHA%202021-22.pdf',
  },

  "pib2024oope": {
    title: 'Steps taken by the Government to reduce Out-of-Pocket Health Expenditure — OOPE 48.8% (2017-18) to 39.4% (2021-22); PM-JAY 55 crore beneficiaries (13 Dec 2024)',
    publisher: 'PIB, Ministry of Health and Family Welfare',
    year: 2024,
    url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2084188',
  },

  "pib2025hex": {
    title: 'Measures taken to reduce healthcare costs — OOPE declined from 62.6% in 2014-15 to 39.4%; GHE up from 29.0% to 48.0% of THE (FY2015–FY2022)',
    publisher: 'PIB, Ministry of Health and Family Welfare',
    year: 2025,
    url: 'https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2114761&reg=48&lang=2',
  },

  "pib2025doc": {
    title: 'Update on Medical Education in India — doctor-population ratio 1:811 (allopathic + AYUSH, 80% availability), 2 Dec 2025',
    publisher: 'PIB, Ministry of Health and Family Welfare',
    year: 2025,
    url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2197614',
  },

  "itoday2025": {
    title: 'India\'s 1:811 doctor-population ratio is great on paper but rural reality is another story (4 Dec 2025)',
    publisher: 'India Today',
    year: 2025,
    url: 'https://indiatoday.in/amp/education-today/featurephilia/story/indias-1811-doctor-population-ratio-rural-healthcare-problems-2830192-2025-12-04',
  },

  "federal2025": {
    title: 'Doctor-population ratio 1:811: the AYUSH-inclusive government claim examined',
    publisher: 'The Federal',
    year: 2025,
    url: 'https://thefederal.com/category/health/doctor-patient-ratio-india-ayush-claim-219350',
  },

  "censussrs": {
    title: 'Sample Registration System: Abridged Life Tables 2016-2020',
    publisher: 'Office of the Registrar General & Census Commissioner, India',
    year: 2022,
    url: 'https://censusindia.gov.in/nada/index.php/catalog/44377/download/48050/SRS-Abridged_Life_Tables_2016-2020.pdf',
  },

  "thewire2023": {
    title: 'Covid-19 led to decline in life expectancy in India, reveal three analyses (SRS 2016-20: 70 years)',
    publisher: 'The Wire',
    year: 2023,
    url: 'https://thewire.in/health/covid-19-led-to-decline-in-life-expectancy-in-india-reveal-three-analyses',
  },

  "worldbank": {
    title: 'Life expectancy at birth, total (years) — India (SP.DYN.LE00.IN), via World Bank API',
    publisher: 'World Bank',
    year: 2024,
    url: 'https://api.worldbank.org/v2/country/IND/indicator/SP.DYN.LE00.IN?format=json&date=2014:2023',
  },

  "worldbankpeers": {
    title: 'Life expectancy at birth, total (years) — CHN, LKA, BRA, BGD, NPL, PAK, USA, GBR (SP.DYN.LE00.IN), via World Bank API',
    publisher: 'World Bank',
    year: 2024,
    url: 'https://api.worldbank.org/v2/country/CHN;LKA;BRA;BGD;NPL;PAK;USA;GBR/indicator/SP.DYN.LE00.IN?format=json&date=2021:2023',
  },

  "pib2024pmjay": {
    title: 'AB PM-JAY status — ~36 crore beneficiaries verified; 8.39 crore hospital admissions worth over ₹1.16 lakh crore as of 30.11.2024',
    publisher: 'PIB / National Health Authority',
    year: 2024,
    url: 'https://pib.gov.in/PressReleasePage.aspx?PRID=2086513',
  },

  "pib2026pmjay": {
    title: 'Arogya Manthan 2026: PM-JAY covers over 60 crore beneficiaries, facilitates more than 13 crore hospital admissions worth over ₹2 lakh crore',
    publisher: 'PIB / National Health Authority',
    year: 2026,
    url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2314404',
  },

  "bmj2023": {
    title: 'Public health insurance coverage in India before and after PM-JAY: repeated cross-sectional analysis of nationally representative survey data (BMJ Global Health 2023;8:e012725)',
    publisher: 'BMJ Global Health',
    year: 2023,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10462969',
  },

  "indiaspend2023": {
    title: 'Debt, distress sales: How Indians pay for healthcare (Ghazala/Imran, Tatanagar; Khadeeja Bano, Mumbra)',
    publisher: 'IndiaSpend',
    year: 2023,
    url: 'https://indiaspend.com/health/debt-distress-sales-how-indians-pay-for-healthcare-857077',
  },

  "wid2024": {
    title: 'Income and Wealth Inequality in India, 1922-2023: The Rise of the Billionaire Raj (WP 2024/09, Bharti, Chancel, Piketty & Somanchi)',
    publisher: 'World Inequality Lab',
    year: 2024,
    url: 'https://wid.world/www-site/uploads/2024/03/WorldInequalityLab_WP2024_09_Income-and-Wealth-Inequality-in-India-1922-2023_Final.pdf',
  },

  "frontline2024": {
    title: 'Inequality rising since 2000s, top one per cent in India holds 40 per cent wealth: study',
    publisher: 'Frontline (The Hindu group)',
    year: 2024,
    url: 'https://frontline.thehindu.com/news/inequality-rising-since-2000s-top-one-per-cent-in-india-holds-40-per-cent-wealth-world-inequality-lab-study-ambani-adani/article67975819.ece',
  },

  "indianexpress2024": {
    title: 'India\'s top 1% income, wealth shares have reached historical highs: World Inequality Lab',
    publisher: 'The Indian Express',
    year: 2024,
    url: 'https://indianexpress.com/article/business/india-top-income-wealth-shares-reached-historical-high-world-inequality-lab-south-africa-us-brazil-9223950',
  },

  "swarajya2024": {
    title: '\'Could Have Spared Ourselves The Tedium Of Ploughing Through 85 Pages\': CEA Anantha Nageswaran Rebuts Inequality Report On India',
    publisher: 'Swarajya (summary of Nageswaran & Bisht, Mint, 27 March 2024)',
    year: 2024,
    url: 'https://swarajyamag.com/economy/could-have-spared-ourselves-the-tedium-of-ploughing-through-85-pages-cea-anantha-nageswaran-rebuts-inequality-report-on-india',
  },

  "indianexpress2024b": {
    title: 'Misleading analyses of poverty, complacency from policymakers will worsen India\'s inequality crisis (Bharti, Chancel, Piketty & Somanchi response)',
    publisher: 'The Indian Express',
    year: 2024,
    url: 'https://preprod.indianexpress.com/article/opinion/columns/misleading-analyses-of-poverty-complacency-from-policymakers-will-worsen-indias-inequality-crisis-9270216/',
  },

  "indianexpress2024c": {
    title: 'The devil is in the footnote (Surjit S Bhalla & Karan Bhasin critique of the WIL paper, 27 March 2024)',
    publisher: 'The Indian Express',
    year: 2024,
    url: 'https://indianexpress.com/article/opinion/columns/the-devil-is-in-the-footnote-9235068/',
  },

  "oxfam2023": {
    title: 'Survival of the Richest: The India Story (Davos release, 16 January 2023)',
    publisher: 'Oxfam India',
    year: 2023,
    url: 'https://oxfamindia.org/knowledgehub/workingpaper/survival-richest-india-story',
  },

  "bbc2023": {
    title: 'Richest 1% own 40.5% of India\'s wealth, says new Oxfam report',
    publisher: 'BBC News',
    year: 2023,
    url: 'https://bbc.com/news/world-asia-india-64286673',
  },

  "economictimes2023": {
    title: 'India\'s richest 1% own more than 40% of total wealth: Oxfam',
    publisher: 'The Economic Times',
    year: 2023,
    url: 'https://economictimes.indiatimes.com/news/india/indias-richest-1-own-more-than-40-of-total-wealth-oxfam/printarticle/97016329.cms',
  },

  "frontline2023": {
    title: 'India\'s richest 1 per cent own more than 40 per cent of total wealth: Oxfam',
    publisher: 'Frontline (The Hindu group)',
    year: 2023,
    url: 'https://frontline.thehindu.com/news/oxfam-inequality-report-2023-says-indias-richest-1-per-cent-own-more-than-40-per-cent-of-total-wealth/article66382782.ece',
  },

  "oxfam2022": {
    title: 'FCRA renewal denied — Oxfam India press statement (2 January 2022)',
    publisher: 'Oxfam India',
    year: 2022,
    url: 'https://oxfamindia.org/press-release/fcra-renewal-denied',
  },

  "scroll2023": {
    title: 'Centre\'s refusal to renew FCRA licence forced operations to halt entirely: Oxfam India to Delhi HC',
    publisher: 'Scroll.in',
    year: 2023,
    url: 'https://scroll.in/latest/1062339/centres-refusal-to-renew-fcra-licence-forced-operations-to-halt-entirely-oxfam-india-to-delhi-hc',
  },

  "thehindu2023": {
    title: 'Home Ministry recommends CBI probe against Oxfam India for FCRA violations',
    publisher: 'The Hindu',
    year: 2023,
    url: 'https://www.thehindu.com/news/national/home-ministry-recommends-cbi-probe-against-oxfam-india/article66706549.ece',
  },

  "mospi2024": {
    title: 'Results of Household Consumption Expenditure Survey 2022-23 — Press Release (24 February 2024)',
    publisher: 'Ministry of Statistics and Programme Implementation (NSO), Government of India',
    year: 2024,
    url: 'https://www.mospi.gov.in/sites/default/files/press_release/Version_2_press_note_hces2022-23_24022024.pdf',
  },

  "mospi2024b": {
    title: 'NSS Report No. 591: Household Consumption Expenditure Survey 2022-23 (Gini: rural 0.266, urban 0.314 vs 0.283/0.363 in 2011-12; MMRP methodology)',
    publisher: 'Ministry of Statistics and Programme Implementation (NSO), Government of India',
    year: 2024,
    url: 'https://www.mospi.gov.in/sites/default/files/publication_reports/Report_591_HCES_2022-23New.pdf',
  },

  "thehindu2024": {
    title: 'After a 11-year gap, Centre discloses key consumption expenditure survey data',
    publisher: 'The Hindu',
    year: 2024,
    url: 'https://www.thehindu.com/business/Economy/after-11-years-household-consumption-expenditure-survey-findings-released/article67882939.ece',
  },

  "sciencedirect2024": {
    title: 'Estimating poverty for India after 2011 using private-sector survey data (Journal of Development Economics; 2017-18 NSS data withheld)',
    publisher: 'Elsevier / Journal of Development Economics',
    year: 2024,
    url: 'https://www.sciencedirect.com/science/article/pii/S0304387824001354',
  },

  "indianexpress2020": {
    title: 'Explained: What IMF data show about per capita GDP of India and Bangladesh',
    publisher: 'The Indian Express',
    year: 2020,
    url: 'https://indianexpress.com/article/explained/explained-what-imf-data-say-about-the-per-capita-gdp-of-india-and-bangladesh-6739586/',
  },

  "prothomalo2020": {
    title: 'Bangladesh overtakes India in per capita GDP: IMF',
    publisher: 'Prothom Alo (UNB)',
    year: 2020,
    url: 'https://en.prothomalo.com/business/bangladesh-overtakes-india-in-per-capita-gdp-imf',
  },

  "reuters2024": {
    title: 'India\'s Reliance, Bollywood fuel Ambani wedding hype through social media (12 July 2024)',
    publisher: 'Reuters',
    year: 2024,
    url: 'https://www.reuters.com/world/india/indias-reliance-bollywood-fuel-ambani-wedding-hype-through-social-media-2024-07-12',
  },

  "bbc2024a": {
    title: 'Anant Ambani: World\'s rich in India for tycoon son\'s pre-wedding gala (Mukesh Ambani worth $115bn per Forbes)',
    publisher: 'BBC News',
    year: 2024,
    url: 'https://www.bbc.co.uk/news/world-asia-india-68443536',
  },

  "qz2024": {
    title: 'The priciest wedding of the century is expected to cost at least $132 million',
    publisher: 'Quartz',
    year: 2024,
    url: 'https://qz.com/ambani-wedding-cost-5-billion-1851590373',
  },

  "cnn2024": {
    title: 'Justin Bieber to Mughal jewels: Ambani wedding transfixes India (average Indian wedding ~$15,000, ~3x average annual household income)',
    publisher: 'CNN Business',
    year: 2024,
    url: 'https://www.cnn.com/2024/07/05/business/ultra-rich-indian-weddings-economy-intl-hnk/index.html',
  },

  "rsf-india": {
    title: 'India — Country profile, World Press Freedom Index 2025 and 2026',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/india',
  },

  "rsf-methodology2025": {
    title: 'Methodology used for compiling the World Press Freedom Index 2025',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2025,
    url: 'https://rsf.org/en/methodology-used-compiling-world-press-freedom-index-2025',
  },

  "rsf2026index": {
    title: '2026 RSF Index: press freedom at a 25-year low',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/2026-rsf-index-press-freedom-25-year-low',
  },

  "rsf-china": {
    title: 'China — Country profile, World Press Freedom Index',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/china',
  },

  "rsf-pakistan": {
    title: 'Pakistan — Country profile, World Press Freedom Index',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/pakistan',
  },

  "rsf-bangladesh": {
    title: 'Bangladesh — Country profile, World Press Freedom Index',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/bangladesh',
  },

  "rsf-srilanka": {
    title: 'Sri Lanka — Country profile, World Press Freedom Index',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/sri-lanka',
  },

  "rsf-nepal": {
    title: 'Nepal — Country profile, World Press Freedom Index',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/nepal',
  },

  "rsf-us": {
    title: 'United States — Country profile, World Press Freedom Index',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/united-states',
  },

  "rsf-brazil": {
    title: 'Brazil — Country profile, World Press Freedom Index',
    publisher: 'Reporters Without Borders (RSF)',
    year: 2026,
    url: 'https://rsf.org/en/country/brazil',
  },

  "journalism2026": {
    title: 'UK press freedom: RSF Index reveals global crisis and rising risks at home',
    publisher: 'Journalism.co.uk',
    year: 2026,
    url: 'https://www.journalism.co.uk/uk-press-freedom-rsf-index-reveals-global-crisis-and-rising-risks-at-home',
  },

  "thehindu2020": {
    title: 'India slips in press freedom rankings; Javadekar slams report',
    publisher: 'The Hindu',
    year: 2020,
    url: 'https://thehindu.com/news/national/india-slips-in-press-freedom-rankings-javadekar-slams-report/article31494652.ece',
  },

  "toi2020": {
    title: 'India slips two places on global press freedom index; Javadekar says media has \'absolute freedom\'',
    publisher: 'The Times of India',
    year: 2020,
    url: 'https://timesofindia.indiatimes.com/india/india-slips-two-places-on-global-press-freedom-index-javadekar-says-media-has-absolute-freedom/articleshow/75524827.cms',
  },

  "niti2020": {
    title: 'Deciphering the World Press Freedom Index',
    publisher: 'NITI Aayog (Government of India)',
    year: 2020,
    url: 'https://niti.gov.in/deciphering-world-press-freedom-index',
  },

  "thehindu2021": {
    title: 'India again placed at 142nd rank in press freedom',
    publisher: 'The Hindu',
    year: 2021,
    url: 'https://thehindu.com/news/national/india-again-placed-at-142nd-rank-in-press-freedom/article34377079.ece',
  },

  "thehindu2022": {
    title: 'Data | India\'s press freedom ranking slips to 150, its lowest ever',
    publisher: 'The Hindu',
    year: 2022,
    url: 'https://www.thehindu.com/data/data-the-worrying-state-of-press-freedom-in-india/article65384769.ece',
  },

  "thehindu2025": {
    title: 'India\'s media ecosystem doesn\'t need validation from foreign bodies: Centre',
    publisher: 'The Hindu',
    year: 2025,
    url: 'https://thehindu.com/news/national/indias-media-ecosystem-doesnt-need-validation-from-foreign-bodies-centre/article69403633.ece',
  },

  "aljazeera2026": {
    title: 'RSF\'s World Press Freedom Index: How Balanced Is the Ranking System?',
    publisher: 'Al Jazeera Media Institute (AJR)',
    year: 2026,
    url: 'https://institute.aljazeera.net/en/ajr/article/3643',
  },

  "thehindu-newsclick2023": {
    title: 'Delhi Police arrest NewsClick founder, HR head in alleged terror case',
    publisher: 'The Hindu',
    year: 2023,
    url: 'https://www.thehindu.com/news/national/newsclick-founder-prabir-purkayastha-arrested-in-uapa-case/article67376922.ece',
  },

  "toi-bail2024": {
    title: 'NewsClick founder gets bail as SC says arrest & remand illegal',
    publisher: 'The Times of India',
    year: 2024,
    url: 'https://timesofindia.indiatimes.com/india/newsclick-founder-gets-bail-as-sc-says-arrest-remand-illegal/articleshow/110157471.cms',
  },

  "thehindu-release2024": {
    title: 'NewsClick founder Prabir Purkayastha released from Tihar after getting bail',
    publisher: 'The Hindu',
    year: 2024,
    url: 'https://thehindu.com/news/national/newsclick-founder-prabir-purkayastha-released-from-tihar-jail-on-supreme-court-orders/article68180068.ece',
  },

  "vdem2021": {
    title: 'Democracy Report 2021: Autocratization Turns Viral',
    publisher: 'V-Dem Institute, University of Gothenburg',
    year: 2021,
    url: 'https://www.v-dem.net/media/filer_public/c9/3f/c93f8e74-a3fd-4bac-adfd-ee2cfbc0a375/dr_2021.pdf',
  },

  "thewire2021": {
    title: 'India Is No Longer a Democracy but an \'Electoral Autocracy\': Swedish Institute',
    publisher: 'The Wire',
    year: 2021,
    url: 'https://thewire.in/rights/india-no-longer-democracy-electoral-autocracy-v-dem-institute-report-bjp-narendra-modi',
  },

  "fp2021": {
    title: 'India\'s \'Electoral Autocracy\' Hits Back',
    publisher: 'Foreign Policy',
    year: 2021,
    url: 'https://foreignpolicy.com/2021/03/19/electoral-autocracy-india-modi-democracy-rankings-freedom-house',
  },

  "diplomat2021": {
    title: 'India Contemplates New Freedom and Democracy Indices After \'Hypocrisy\' Cries',
    publisher: 'The Diplomat',
    year: 2021,
    url: 'https://thediplomat.com/2021/03/india-contemplates-new-freedom-and-democracy-indices-after-hypocrisy-cries',
  },

  "ht2021": {
    title: 'India mulls new democracy report, freedom index by local think tank',
    publisher: 'Hindustan Times',
    year: 2021,
    url: 'https://hindustantimes.com/india-news/india-mulls-new-democracy-report-freedom-index-by-local-think-tank-101615938955923.html',
  },

  "vdem2025": {
    title: 'Democracy Report 2025: 25 Years of Autocratization — Democracy Trumped?',
    publisher: 'V-Dem Institute, University of Gothenburg',
    year: 2025,
    url: 'https://www.v-dem.net/documents/54/v-dem_dr_2025_lowres_v1.pdf',
  },

  "thewire2025": {
    title: 'India Falls Further in Liberal Democracy Index, at 100 of 179 Countries: V-Dem',
    publisher: 'The Wire',
    year: 2025,
    url: 'https://thewire.in/politics/v-dem-india-2025-fall-liberal-democracy-index',
  },

  "vdem2026": {
    title: 'Democracy Report 2026',
    publisher: 'V-Dem Institute, University of Gothenburg',
    year: 2026,
    url: 'https://v-dem.net/documents/75/V-Dem_Institute_Democracy_Report_2026_lowres.pdf',
  },

  "et2026": {
    title: '\'Lowest score since 1975\': P Chidambaram flags India\'s 106 rank on Electoral Democracy Index',
    publisher: 'The Economic Times',
    year: 2026,
    url: 'https://economictimes.indiatimes.com/news/politics-and-nation/lowest-score-since-1975-p-chidambaram-flags-indias-106-rank-on-electoral-democracy-index/articleshow/133668147.cms',
  },

  "hindu-vdem2026": {
    title: 'V-Dem\'s democracy index rates India at its lowest since 1975',
    publisher: 'The Hindu',
    year: 2026,
    url: 'https://www.thehindu.com/data/v-dems-democracy-index-rates-india-at-its-lowest-since-1975/article71413896.ece',
  },

  "freedomhouse2021": {
    title: 'India: Freedom in the World 2021 Country Report',
    publisher: 'Freedom House',
    year: 2021,
    url: 'https://freedomhouse.org/country/india/freedom-world/2021',
  },

  "toi2022": {
    title: 'India ranked \'partly free\' again in Freedom House report',
    publisher: 'The Times of India',
    year: 2022,
    url: 'https://timesofindia.indiatimes.com/india/india-ranked-partly-free-again-in-freedom-house-report/articleshow/89976971.cms',
  },

  "fh2025": {
    title: 'India: Freedom in the World 2025 Country Report',
    publisher: 'Freedom House',
    year: 2025,
    url: 'https://freedomhouse.org/country/india/freedom-world/2025',
  },

  "nri2025": {
    title: 'India\'s Freedom Status Declines in Freedom House\'s 2025 Report While Kashmir Sees Improvement',
    publisher: 'NRI Affairs',
    year: 2025,
    url: 'https://www.nriaffairs.com/indias-freedom-status-declines-in-freedom-houses-2025-report-while-kashmir-sees-improvement',
  },

  "eiu-di2022": {
    title: 'Democracy Index 2022: Frontline democracy and the battle for Ukraine',
    publisher: 'Economist Intelligence Unit',
    year: 2023,
    url: 'https://www.eiu.com/n/wp-content/uploads/2023/02/Democracy-Index-2022_FV2.pdf',
  },

  "eiu-di2024": {
    title: 'Democracy Index 2024',
    publisher: 'Economist Intelligence Unit',
    year: 2025,
    url: 'https://image.b.economist.com/lib/fe8d13727c61047f7c/m/1/609fbc8d-4724-440d-b827-2c7b7300353d.pdf',
  },

  "eiu2025release": {
    title: 'EIU Democracy Index 2025: democracy stabilises after eight years of decline',
    publisher: 'The Economist Group / EIU',
    year: 2026,
    url: 'https://www.economistgroup.com/press-centre/economist-enterprise/eiu-democracy-index-2025-democracy-stabilises-after-eight-years-of-decline',
  },

  "theprint2023": {
    title: 'Global index shows India\'s democracy strengthened since 2020. But civil liberties have been in free fall',
    publisher: 'ThePrint',
    year: 2023,
    url: 'https://theprint.in/india/governance/global-index-shows-indias-democracy-strengthened-since-2020-but-civil-liberties-have-been-in-free-fall/1974869/',
  },

  "pib2023": {
    title: 'EAC-PM working paper analyses problems with Freedom in the World Index, V-DEM indices, and EIU Democracy Index',
    publisher: 'Press Information Bureau, Government of India',
    year: 2023,
    url: 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1878142',
  },

  "open2024": {
    title: 'A Flawed Measure of Democracy',
    publisher: 'Open Magazine (Siddharth Singh)',
    year: 2024,
    url: 'https://openthemagazine.com/special/a-flawed-measure-of-democracy/',
  },

  "babones2026": {
    title: 'Are \'Thick\' Democracy Indices Like V-Dem Biased Against the Global South?',
    publisher: 'SAGE Open / SAGE Publications (Salvatore Babones)',
    year: 2026,
    url: 'https://journals.sagepub.com/doi/10.1177/29769442261448680',
  },

  "indiatoday2023": {
    title: '3 more Opposition MPs suspended from Lok Sabha, total count 146 now',
    publisher: 'India Today',
    year: 2023,
    url: 'https://www.indiatoday.in/india/story/deepak-baij-nakul-nath-dk-suresh-suspended-from-lok-sabha-total-146-now-2478831-2023-12-21',
  },
};
