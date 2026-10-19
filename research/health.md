# Health — NFHS-5, out-of-pocket spending, and the state of India's health system

## What it measures

This pack tracks India's health reality through five official lenses: child nutrition and anaemia from the National Family Health Survey (NFHS-5, 2019–21); who actually pays for health care, from the National Health Accounts (NHA, latest: 2021-22); how many doctors India has, from Health Ministry figures to Parliament; how long Indians live, from the Sample Registration System and the World Bank; and coverage under Ayushman Bharat PM-JAY, the government's flagship insurance scheme. Together they measure the gap between headline claims (insurance for the poorest 40%, a doctor within reach of every 811 people) and survey-measured reality.

## How it is built

- **NFHS-5:** run by the International Institute for Population Sciences (IIPS) for the Health Ministry, in two phases — Phase I 17 June 2019–30 January 2020 (17 states, 5 UTs), Phase II 2 January 2020–30 April 2021 (11 states, 3 UTs); provides India and state-level estimates for population, health and nutrition (iipsnfhs5, dhsphases).
- **National Health Accounts (NHA):** produced by MoHFW/NHSRC; the 2021-22 edition is the ninth in the series and gives out-of-pocket expenditure (OOPE) as a share of total health expenditure (THE) (nhsrcnha, pib2024oope).
- **Doctor-population ratio:** Health Ministry estimates combine 13,86,150 registered allopathic doctors and 7,51,768 registered AYUSH practitioners, assuming 80% availability, to arrive at 1 doctor per 811 people (pib2025doc).
- **Life expectancy:** the Sample Registration System (RGI) abridged life tables (2016-20: 70 years) and the World Bank's series (worldbank, censussrs, thewire2023).
- **PM-JAY:** run by the National Health Authority; cover of ₹5 lakh per family per year for secondary/tertiary hospitalisation, targeting the poorest 40% (about 55 crore people / 12.37 crore families) (pib2024oope).

## India trend

**Child nutrition & anaemia, children under 5 (NFHS-5 vs NFHS-4):**

| Indicator | NFHS-4 (2015-16) | NFHS-5 (2019-21) | source_id |
|---|---|---|---|
| Stunting (height-for-age) | 38.4% | 35.5% | pib2023nut, iipsnfhs5 |
| Wasting (weight-for-height) | 21.0% | 19.3% | pib2023nut, iipsnfhs5 |
| Underweight | 35.8% | 32.1% | pib2023nut, iipsnfhs5 |
| Anaemia, children 6–59 months | rose (baseline not verified here) | 67.1% | dh2021, iipsnfhs5 |
| Anaemia, women 15–49 | rose | 57% | dh2021, ie2021anaemia |

**Out-of-pocket expenditure as % of total health expenditure (NHA):**

| Year | OOPE % of THE | source_id |
|---|---|---|
| 2017-18 | 48.8 | pib2024oope |
| 2018-19 | 48.2 | pib2024oope |
| 2019-20 | 47.1 | pib2024oope |
| 2020-21 | 44.4 | pib2024oope |
| 2021-22 | 39.4 | pib2024oope, nhsrcnha |

**Life expectancy at birth (years):**

| Year | Value | source_id |
|---|---|---|
| 2019 | 70.7 | worldbank |
| 2020 | 70.2 | worldbank |
| 2021 | 67.3 (Covid-19 dip; SRS 2016-20 average was 70) | worldbank, thewire2023, censussrs |
| 2022 | 71.7 | worldbank |
| 2023 | 72.0 | worldbank |

## Peers

Life expectancy at birth, 2023 (World Bank series; India included for reference):

| Country | Value (years) | Year | source_id |
|---|---|---|---|
| United Kingdom | 81.2 | 2023 | worldbankpeers |
| China | 78.0 | 2023 | worldbankpeers |
| United States | 78.4 | 2023 | worldbankpeers |
| Sri Lanka | 77.5 | 2023 | worldbankpeers |
| Brazil | 75.8 | 2023 | worldbankpeers |
| Bangladesh | 74.7 | 2023 | worldbankpeers |
| **India** | **72.0** | 2023 | worldbank |
| Nepal | 70.4 | 2023 | worldbankpeers |
| Pakistan | 67.6 | 2023 | worldbankpeers |

## Credibility

**Strengths**
- NFHS is a large, standardised, internationally benchmarked (DHS-programme) survey conducted by an autonomous institute, with full India and state reports published (iipsnfhs5, dhsphases).
- NHA is a systematic health-financing account; its OOPE series (62.6% of THE in 2014-15 → 39.4% in 2021-22) and government health expenditure share (29.0% → 48.0% of THE, FY2015→FY2022) are the standard reference for financing debates (pib2025hex, pib2024oope).
- Life expectancy comes from India's own SRS vital-statistics system, cross-checkable against UN/World Bank series (censussrs, worldbank).

**Criticisms**
- NFHS-5's second phase overlapped the Covid-19 pandemic (Jan 2020–Apr 2021), complicating state comparisons and trend reading; anaemia went the wrong way — 67.1% of young children and 57% of women — even as stunting fell, suggesting nutrition quality problems the headline "improvement" framing skips (dhsphases, dh2021, ie2021anaemia).
- The 1:811 doctor-population ratio rests on an 80%-availability assumption and counts AYUSH practitioners alongside allopathic doctors; analysts note the combined figure masks rural shortfalls — only 84.7% of sanctioned doctor posts in district hospitals were filled per Rural Health Statistics 2021-22 (pib2025doc, federal2025, itoday2025, indiaspend2023).
- The BMJ Global Health evaluation found PM-JAY raised public health-insurance coverage and narrowed geographic/socioeconomic gaps, but "there is still a lack of universal coverage of the poor", and the study explicitly did not estimate effects on out-of-pocket payments or health outcomes (bmj2023).
- OOPE "decline" is partly arithmetic: it is a share of a growing total, and NHA editions apply methodological refinements between rounds (the 2021-22 report documents refinements made to the 2020-21 estimates) (nhsrcnha).
- The NHA numbers coexist with continued distress financing: only 41% of households had even one insured member per NFHS-5, and average hospitalisation costs far exceed monthly incomes (indiaspend2023).

## Politics

- **20 December 2023** — MoWCD (Smriti Irani, written reply in Rajya Sabha) presented NFHS-5 malnutrition indicators as "steady improvement": stunting 38.4%→35.5%, wasting 21.0%→19.3%, underweight 35.8%→32.1% — and added Poshan Tracker data (Nov 2023) showing 17.43% underweight and 6% wasting, "much less than that projected by NFHS-5" (pib2023nut).
- **13 December 2024** — MoS Health (Anupriya Patel, Lok Sabha) framed the OOPE fall from 48.8% (2017-18) to 39.4% (2021-22) as the result of government steps (PM-JAY, Ayushman Arogya Mandirs, PM-ABHIM); the same reply announced PM-JAY cover for all citizens aged 70+ regardless of income (pib2024oope).
- **2025** — PIB reiterated the flagship financing claim: government health expenditure up from 29.0% to 48.0% of THE between FY2015 and FY2022, OOPE down from 62.6% to 39.4%, with "recorded savings over Rs. 1.25 lakh crore" (pib2025hex).
- **2 December 2025** — MoS Health Prataprao Jadhav (Rajya Sabha, written reply): India's doctor-population ratio is 1:811 — "better than the WHO norm of 1:1000" — based on allopathic + AYUSH registration at 80% availability; medical colleges up from 387 to 818 since 2014 (pib2025doc).
- **Arogya Manthan 2026 (September 2026)** — the government marked eight years of PM-JAY claiming over 60 crore beneficiaries and more than 13 crore hospital admissions worth over ₹2 lakh crore; the earlier official milestone (30 November 2024) was ~36 crore verified beneficiaries and 8.39 crore admissions worth over ₹1.16 lakh crore (pib2026pmjay, pib2024pmjay).

## Real stories

- **Tatanagar (Jharkhand) → Mumbai, 2019–2021:** Ghazala, 26, and her sister took their father Imran to Kolkata in December 2019 after he fell ill; it was metastatic prostate cancer. They moved him to Tata Memorial Hospital in Mumbai in January 2020 "with all the gold the family had", then over two months sold all their gold — including a wedding set — and a Jharkhand land plot worth about ₹9 lakh for ₹2 lakh, because they needed money urgently. Ghazala spent over ₹7 lakh on his treatment; officials in Tatanagar did not give the family an Ayushman Bharat card because they owned their home (indiaspend2023).
- **Mumbra, Thane:** Khadeeja Bano, 46, a domestic worker earning ₹9,100 a month, had a mastectomy for cancer in 2019 at the municipal BYL Nair Hospital for ₹15,000 total — but still pays ₹12,000–13,000 every four months for tests and medicines the hospital doesn't provide, plus lost nearly a year of work during treatment and lockdown; none of that income loss appears in official health-expenditure data (indiaspend2023).

## Gaps

- The NFHS-4 baseline values for anaemia (children and women) were not directly verified from a primary source here; only the NFHS-5 levels (67.1% children, 57% women) and the direction of change ("increased") are cited from Deccan Herald/Indian Express reporting.
- India's rank in the 2024-25 edition of any single health index is not part of this pack by design (composite topic); peer comparison is limited to life expectancy.
- Whether an NHA edition for 2022-23 has since been released was not verified; 2021-22 is treated as latest.
- No independent, nationally representative impact evaluation of PM-JAY on out-of-pocket spending was found beyond the BMJ Global Health coverage study; the government's "₹1.25 lakh crore savings" figure is a government claim.
- The exact date of the PIB release on health-expenditure shares (GHE 29%→48%) was not pinned down; cited by its PIB release ID only.
