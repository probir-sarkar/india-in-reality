# Education — India in Reality

## What it measures

There is no single global index here; the education pack tracks four official measurements. ASER (Annual Status of Education Report) is a citizen-led household survey that tests whether rural children can actually read a Class 2-level text and do basic arithmetic, regardless of what grade reports say. Literacy is the share of Indians aged 7+ who can read and write a simple message, measured by Census (until 2011) and by NSO surveys (NSS, PLFS) since. The Gross Enrolment Ratio (GER) measures participation in higher education (age 18–23) via the AISHE survey. UDISE+ is the government's school-information system, from which annual dropout rates are computed.

## How it is built

- **ASER** — published by Pratham's ASER Centre since 2005; household (not school) survey of rural India, one-on-one testing of children aged 5–16; annual until 2014, then alternate years; "Beyond Basics" editions (2017, 2023) survey 14–18-year-olds (aser2023, aser2018).
- **Literacy** — Census of India (last in 2011, 7+ definition, "effective literacy rate"); since then NSO survey data: NSS 75th Round (2017–18) and PLFS Annual Reports, quoted by the Ministry of Education in Parliament (pib_nss75, sansad_pq).
- **AISHE GER** — Ministry of Education annual survey of all higher-education institutions; GER = enrolment as % of the 18–23 population (pib_aishe2021_22, pib_aishe_fs).
- **UDISE+** — Ministry of Education's Unified District Information System for Education Plus; annual school-level census used to compute dropout, retention and pupil-teacher ratios (pib_udise).
- **PISA** — OECD's triennial test of 15-year-olds' reading, math and science; India is not an OECD member and has participated only once, in 2009 (ie_pisa2009, telegraph2020).

## India trend

**Class 5 children (rural, all schools) who can read a Class 2-level text (ASER):**

| Year | Value | Rank | source_id |
|---|---|---|---|
| 2016 | 47.9% | — | aser2018 |
| 2018 | 50.3% | — | aser2018 |
| 2022 | 42.8% | — | ie_aser2024 |
| 2024 | 48.7% | — | ie_aser2024 |

Government schools only, same test: 41.7% (2012), 41.7% (2016), 44.2% (2018) (aser2018); 38.5% (2022), 44.8% (2024) (pib_aser2024).

**Literacy rate (age 7+):**

| Year | Value | Rank | source_id |
|---|---|---|---|
| 1951 | 18.32% (Census) | — | pib_litfactsheet |
| 2011 | 74.04% (Census; M 82.14%, F 65.46%) | — | pib_litfactsheet |
| 2017–18 | 77.7% (NSS 75th Round) | — | pib_nss75 |
| 2023–24 | 80.9% (PLFS Annual Report) | — | sansad_pq |

**Higher education GER (18–23 years):**

| Year | Value | Rank | source_id |
|---|---|---|---|
| 2014–15 | 23.7% | — | pib_aishe_fs |
| 2021–22 | 28.4% | — | pib_aishe2021_22 |
| 2022–23 | 29.5% | — | pib_aishe_fs |
| 2023–24 | 30.0% | — | pib_aishe_fs |

**Secondary-level school dropout rate (UDISE+):**

| Year | Value | Rank | source_id |
|---|---|---|---|
| 2022–23 | 13.8% | — | pib_udise |
| 2023–24 | 10.9% | — | pib_udise |
| 2024–25 | 8.2% | — | pib_udise |
| 2025–26 | 7.0% | — | pib_udise |

PISA: no Indian rank since 2009, when participating students from Tamil Nadu and Himachal Pradesh placed 73rd of 74 education systems, above only Kyrgyzstan (telegraph2020, ie_pisa2009).

## Peers

Adult literacy rate (age 15+, UNESCO Institute for Statistics via World Bank Open Data; latest available year — India has no recent UIS-consistent entry, 2024 shown):

| Country | Value | Year | source_id |
|---|---|---|---|
| India | 78.2% | 2024 | wblit |
| China | 96.7% | 2020 | wblit |
| Sri Lanka | 92.7% | 2024 | wblit |
| Brazil | 94.7% | 2024 | wblit |
| Bangladesh | 79.0% | 2022 | wblit |
| Nepal | 68.7% | 2019 | wblit |
| Pakistan | 58.9% | 2021 | wblit |

India's own official PLFS 2023–24 figure (7+ years) is 80.9% (sansad_pq). No recent comparable UIS entry exists for the US or UK (both report ~99% in older UIS data; not verified here — see Gaps). PISA: India has no peers table because it has not participated since 2009; in PISA 2018 the four Chinese provinces (B-S-J-Z) topped reading, but India did not take part (ie_pisa2009).

## Credibility

Strengths:
- ASER tests children one-on-one at home in rural areas, so its reading/arithmetic numbers are independent of school self-reporting, and it covers every rural district in "basic" years (649,491 children in 17,997 villages in 2024) (pib_aser2024).
- ASER's long unbroken series (2005–2024) lets users see the COVID drop and recovery rather than single-year snapshots (aser2018, pib_aser2024).
- UDISE+ and AISHE are near-full censuses of schools and colleges, not samples (pib_udise, pib_aishe_fs).
- NFHS-5 (2019–21) provides comparable state-level education and schooling indicators alongside literacy (nfhs5).

Criticisms and data gaps:
- India has not conducted a Census since 2011; the 2021 Census was postponed (COVID) and the next one now has a reference date of 1 March 2027, meaning every "literacy rate" since 2011 is survey-based, not census-based (pib_census2027).
- Literacy numbers are not comparable across sources: 74.04% (Census 2011), 77.7% (NSS 2017–18), 80.9% (PLFS 2023–24) use different surveys and years; the frequently repeated claim of a single "NFHS-5 literacy rate of 77.7%" is not in the NFHS-5 national factsheet, which reports literacy only for ages 15–49 (women 71.5%, men 84.4%) (nfhs5, pib_nss75, sansad_pq).
- ASER's Class 5 reading figure remains below its 2018 level (48.7% in 2024 vs 50.3%), so post-COVID "sharp gains" headlines describe a recovery, not record learning (aser2018, ie_aser2024).
- UDISE+ dropout rates are administrative data dependent on school-side reporting and have been revised across rounds; the 2025–26 "sharp fall" (secondary 8.2% → 7.0%) should be read with that caution (pib_udise).
- India has been absent from PISA for 15+ years, so no internationally comparable learning benchmark exists for Indian 15-year-olds since 2009 (telegraph2020, indiatoday2025).
- The Indian Express reported ASER 2018's all-children Class 5 figure as 50.4% while the ASER 2018 report text says 50.3% — a one-decimal-point discrepancy between press reporting and the primary report (aser2018, ie_aser2024).

## Politics

- **NEP 2020** — Cabinet approved the National Education Policy on 29 July 2020, promising universalisation from pre-school to secondary level and a higher-education GER target of 50% by 2035 (pib_nep2020, pib_aishe_fs).
- **PISA exit** — After signing an agreement with the OECD in January 2019 to re-enter PISA, the government pulled out of PISA 2022; Minister of State for Education Annapurna Devi told the Lok Sabha (November 2020) that COVID-induced school closures had forced a "relook" at participation (ie_pisa2019, telegraph2020). In March 2025, India was reported to be heading toward skipping PISA 2025 as well (indiatoday2025).
- **Census delay** — The Ministry of Home Affairs notified (June 2025) that Census 2027 will be conducted in two phases with caste enumeration, reference date 1 March 2027 — 16 years after the last census (pib_census2027).
- **Government framing of literacy gains** — A PIB factsheet (29 September 2026) presents the journey from 18.32% literacy in 1951 to 74.04% in 2011 and cites PLFS urban literacy of 89%, while a Lok Sabha answer (21 July 2025) gave the official current figure as 80.9% and pointed to the ULLAS adult-literacy programme (2022–27) (pib_litfactsheet, sansad_pq).
- **Government framing of ASER 2024** — PIB's own release (4 February 2025) publicised the "leap in rural school enrollment" and post-COVID reading recovery, adopting ASER findings positively rather than contesting them (pib_aser2024).

## Real stories

- **A classroom on a walkway in Nuh, Haryana.** The Hindu (7 October 2026) profiled the Government Primary School in Mannaki village, Nuh district: eight-year-old Suraiya sits on a mat in the walkway that doubles as her Class 2 classroom because the real classroom's floor is damp and its blackboard broken; the school, built in 1985, has 75 students and three teachers on record (one away on election duty), no working latrines, and shuts for days each monsoon as floodwater enters the mid-day-meal kitchen. A teacher, Habib, said staff "try our best"; another produced a written order instructing staff not to speak to media (hindu_nuh).
- **Tamil Nadu's 15-year-olds, second from the bottom of the world.** In PISA 2009, the only time India participated, students in Tamil Nadu and Himachal Pradesh took the OECD test; the states placed 72nd and 73rd of 74 education systems. The government blamed a "disconnect" between the test and India's curriculum, then stayed out for a decade, signed back in for PISA 2022, and withdrew again citing COVID (ie_pisa2009, ie_pisa2019, telegraph2020).

## Gaps

- Could not verify a primary-source exact date for the Telegraph's November 2020 PISA-withdrawal report (article date not shown on accessible page); the Lok Sabha statement is dated only as "November 2020".
- The 2018 ASER all-children figure is 50.3% in the report but 50.4% in Indian Express's 2025 report — flagged, both cited.
- No recent UIS/World Bank adult-literacy figure for the US, UK or Nepal after 2019; the peers table uses each country's latest available year, so rows are not same-year comparable.
- NFHS-5's own national factsheet does not contain an all-ages 77.7% literacy rate; that widely repeated figure could only be traced to the NSS 75th Round (2017–18) — noted to prevent misattribution.
- ASER 2024 was not conducted in 2020/2021 (COVID), so no ASER data exists for those years.
