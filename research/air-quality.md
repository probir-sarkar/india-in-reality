# Air quality — India's air pollution reality

## What it measures

Air pollution here means fine particulate matter (PM2.5 — particles under 2.5 microns that reach deep into the lungs) measured as an annual average concentration in micrograms per cubic metre (µg/m³). India's own daily headline number is the CPCB Air Quality Index (AQI), which condenses eight pollutants into a single score from 0 to 500 with colour-coded health bands (cpcbaqi, pib2014aqi). The global comparison comes from IQAir's World Air Quality Report, which ranks countries and cities by population-weighted annual average PM2.5 (iqair2025pr). The WHO's guideline — what air "should" be — is 5 µg/m³ annual average, a limit cut from 10 µg/m³ in September 2021 (who2021, iqair2025pr).

## How it is built

- **CPCB National AQI (India's official index):** launched by the Environment Ministry in 2014; six categories — Good (0–50), Satisfactory (51–100), Moderately Polluted (101–200), Poor (201–300), Very Poor (301–400), Severe (401–500); considers eight pollutants (PM10, PM2.5, NO2, SO2, CO, O3, NH3, Pb); the reported AQI is the worst sub-index of the pollutants measured at a station (pib2014aqi, cpcbaqi).
- **IQAir World Air Quality Report (global ranking):** published annually by IQAir, a Swiss air-quality technology company; the 8th edition (released 24 March 2026) analysed data from monitoring stations across 9,446 cities in 143 countries/territories; country values are population-weighted annual average PM2.5, drawn from both government regulatory monitors and low-cost sensors run by citizens and researchers (iqair2025pr).
- **National Clean Air Programme (NCAP):** launched January 2019 for 130 non-attainment/million-plus cities; original target 20–30% PM reduction by 2024, later extended to 2026 with a revised target of 40% reduction in PM10 from a 2017 baseline; ₹13,036.52 crore released to cities from FY 2019-20 to 20 July 2025 (pib2025air, creancap).
- **Health impact:** deaths attributable to air pollution are estimated by the India-GBD collaboration published in The Lancet Planetary Health, using Global Burden of Disease methods across states (lancet2020).

## India trend

Population-weighted annual average PM2.5 (µg/m³), per IQAir's country dataset:

| Year | Value (µg/m³) | Rank among most-polluted countries | source_id |
|---|---|---|---|
| 2021 | 58.1 | — (Delhi world's most polluted capital, 96.4 µg/m³) | iqaircountries, greenpeace2021 |
| 2022 | 53.3 | 8th | iqaircountries, hindu2023, greenpeace2022 |
| 2023 | 54.4 | 3rd | iqaircountries, ht2024 |
| 2024 | 50.6 | 5th | iqaircountries, hindu2025, iqair2024pr |
| 2025 | 48.9 | 6th | iqaircountries, hindu2026 |

Latest edition (2025): India is the 6th most polluted country at 48.9 µg/m³ — a 3-year low, down 3% from 2024 and 10% from 2023, but still nearly 10× the WHO guideline of 5 µg/m³. Loni (Uttar Pradesh) was the world's most polluted city in 2025 at 112.5 µg/m³, up ~23% from 2024 (hindu2026, iqair2025pr). In the 2024 edition, Byrnihat (Meghalaya–Assam border) was the most polluted metropolitan area at 128.2 µg/m³ and Delhi the most polluted capital (iqair2024pr, hindu2025, ie2025).

## Peers

Annual average PM2.5, 2025 (µg/m³), from IQAir's ranking (iqaircountries, iqair2025pr):

| Country | Value (µg/m³) | Year | source_id |
|---|---|---|---|
| Pakistan (1st) | 67.3 | 2025 | iqaircountries |
| Bangladesh (2nd) | 66.1 | 2025 | iqaircountries |
| Tajikistan (3rd) | 57.3 | 2025 | iqaircountries |
| Chad (4th) | 53.6 | 2025 | iqaircountries |
| DR Congo (5th) | 50.2 | 2025 | iqaircountries |
| **India (6th)** | **48.9** | 2025 | iqaircountries, hindu2026 |
| Nepal (12th) | 37.4 | 2025 | iqaircountries |
| China (20th) | 29.6 | 2025 | iqaircountries |
| United States | 7.3 | 2025 | iqair2025pr |

Sri Lanka, the UK and Brazil are covered by the index but their 2025 values could not be extracted from the JS-rendered ranking table (see Gaps).

## Credibility

**Strengths**
- Largest global PM2.5 compilation: 143 countries in the 2025 edition, up from 138 in 2024, with a stated methodology (population-weighted annual averages against the WHO guideline) (iqair2025pr, iqair2024pr).
- The India death toll rests on peer-reviewed GBD/Lancet estimation, not the company's own modelling: 1.67 million deaths attributable to air pollution in India in 2019 — 17.8% of all deaths in the country (lancet2020, reuters2020lancet).
- IQAir's report usefully exposes the gap between India's NAAQS (40 µg/m³ annual PM2.5) and the WHO guideline (5 µg/m³): a CREA satellite assessment found 60% of India's 749 districts breach even the Indian standard, and none meet the WHO guideline (creasat, who2021).

**Criticisms**
- The government's own rebuttal: per IQAir's report only 38% of its data comes from government agencies; 62% comes from other sources including low-cost sensors "not used for regulatory purposes", and urban-centric population-weighted averages mean city/country rankings "may not portray true picture and could be misleading" (pib2025air).
- Monitoring is thin on the ground: in 2024 India had 1,524 air quality stations (558 continuous); 28 of 130 NCAP cities had no continuous monitoring station, and NCAP's target of 1,500 manual stations by 2024 was unmet by 534 stations (creancap).
- NCAP progress is uneven: of 97 NCAP cities with adequate PM10 data, only 41 achieved the initial 20–30% reduction target and 29 recorded an increase; 67% of clean-air funds went to road dust, while industry and domestic fuel got 1% each; ₹11,211 crore released in 2019–2025 but only 68% utilised (creancap).
- A different dataset shows progress: a Respirer Living Sciences analysis reported Indian cities cut PM2.5 by an average 27% from 2019 to 2024 (24% in NCAP cities), with Varanasi down 76% — consistent with IQAir's declining national average (et2025respirer).
- The end of the US State Department's embassy monitoring programme in March 2025 weakened data in 44 countries, shrinking an independent cross-check (iqair2025pr).

## Politics

- **24 July 2025** — In a written reply in Rajya Sabha, MoS Environment Kirti Vardhan Singh dismissed the IQAir World Air Quality Report: rankings "may not portray true picture and could be misleading" (limited government data, low-cost sensors, urban-centric averaging); he also said "there is no conclusive data available to establish a direct correlation of death exclusively by air pollution", while defending NCAP (130 cities, ₹13,036.52 crore released) (pib2025air).
- **March 2024** — The Pollution Control Board of Assam "vehemently rejected" IQAir's finding that Guwahati was among the world's most polluted cities, disputing the report's data for the state (pcba2024).
- The same July 2025 reply lists the government's mitigation frame: BS-VI fuel norms leapfrog, PM E-DRIVE and PM-eBus Sewa electric mobility, biomass co-firing mandates for power plants within 300 km of Delhi, and NCAP city action plans prioritising road dust (source-apportionment studies put dust at 40–50% of PM10 in most cities) (pib2025air).

## Real stories

- **Delhi, 5 November 2023:** with air quality in the "severe" category, the Delhi government ordered all primary schools closed until 10 November as toxic smog settled over the capital (reuters2023).
- **Delhi-NCR, 17–18 November 2024:** Delhi's daily average AQI hit 441 (4pm) and 457 (7pm); CAQM invoked GRAP Stage-IV — the 'Severe+' emergency (AQI >450) — from 8am on 18 November, banning truck entry and construction; the Supreme Court ordered schools shut across the entire NCR, and CAQM's revised guidelines require schools to close under GRAP Stages 3 and 4 (pibgrap2024, toi2024, pibcaqm2024).
- **Byrnihat, Meghalaya–Assam border (2024–25):** this small industrial belt, not Delhi, topped IQAir's world city table in 2024 at 128.2 µg/m³ — an annual average more than 25× the WHO guideline — drawing national attention to unregulated industry clusters outside the metros (iqair2024pr, ie2025).

## Gaps

- Sri Lanka, UK and Brazil 2025 PM2.5 values are in IQAir's ranking table but the page's table could not be fully extracted (JS-rendered); their rows were not verified.
- Delhi's own 2025 annual average (and its city rank) was not stated in The Hindu's report I accessed; the last Delhi annual values verified are 96.4 (2021) and 105 µg/m³ under CPCB data for 2024 (greenpeace2021, creancap).
- India's exact rank in the 2021 edition was not directly sourced (value 58.1 is verified).
- No Indian government statement specific to the 2025 edition was found; the government's "misleading" rebuttal (24 July 2025) addresses the 2024 report.
- Delhi government winter-break closure (9–18 Nov 2024) was seen only as a headline (The Hindu); exact circular details not extracted.
