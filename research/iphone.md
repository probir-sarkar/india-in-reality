# iPhone affordability — days of work to buy an iPhone 17, India vs the world

## What it measures

This pack answers one question: how long would an average worker in each country have to work to buy
one specific, identical product — the Apple iPhone 17 with 256GB of storage, the base version of
Apple's current mainstream iPhone — at the official price in that country? The price is set against two
income measures: World Bank GDP per capita (current US$, latest year), converted into "days of work"
by dividing the year into 365 equal daily incomes, and, where the ILO publishes one, mean nominal
monthly earnings of employees, converted into "months of average wages". It is a crude but vivid
affordability gauge: it compares the same global product against very different average incomes. Prices
were captured from Apple's own country online stores on 19 October 2026 wherever an Apple online store
exists, and from official distributors/authorised resellers or named retail chains where it does not.

## How it is built

- **Price**: the iPhone 17 256GB "From" (base-storage) price shown on each Apple online store's iPhone 17
  buy page (apple.com/<country>/shop/buy-iphone/iphone-17), captured 19 October 2026. Apple sold the
  iPhone 17 with 256GB base storage in every market, so the same model and capacity is compared
  throughout. Prices are as sold to consumers — inclusive of GST/VAT in every market except the
  United States, where sales tax is added at checkout and varies by state (appleus2026).
  - US detail: the listed $899 includes a $30 discount requiring carrier activation with AT&T/T-Mobile/Verizon;
    the "connect on your own later" (unlocked) price is $929 (appleus2026).
  - In October 2026 the iPhone 17 is the newest standard (non-Pro) iPhone; above it sit the iPhone 18 Pro,
    iPhone Air and the foldable iPhone Duo (appleus2026).
  - Countries with no Apple online store (Pakistan, Bangladesh, Nepal, Sri Lanka, Nigeria, Egypt,
    Indonesia) use the price of the Apple-authorised national distributor/agent or a named major
    retailer, flagged in the table and in Gaps.
- **Income (primary)**: World Bank indicator NY.GDP.PCAP.CD "GDP per capita (current US$)", latest
  published value per country (2025 for 18 countries; 2024 for UAE), retrieved from the World Bank API
  on 19 October 2026 (worldbank2026).
- **Income (secondary)**: ILOSTAT series DF_EAR_EMTA_SEX_NB "Average monthly earnings of employees by
  sex" (sex: total), latest available annual value, retrieved from the ILO SDMX API on 19 October 2026
  (ilo2026). Available for 16 of the 20 countries; not published for China, Japan, Nepal or the UAE.
- **Currency conversion**: World Bank official exchange rate, period average (PA.NUS.FCRF), 2025
  (2024 for Vietnam) (worldbankfx2026).
- **Formula (days)**: days of work = price in US$ ÷ (GDP per capita US$ ÷ 365).
- **Formula (months)**: months of wages = price in US$ ÷ (ILO mean monthly wage in US$).
- Worked example (India): ₹99,900 ÷ 87.158 ₹/US$ = $1,146. $1,146 ÷ ($2,702 ÷ 365) = $1,146 ÷ $7.40/day
  = **154.8 days** (applein2026, worldbank2026, worldbankfx2026).

## The arithmetic

Country | iPhone 17 256GB price (local) | Price in US$ | GDP per capita, current US$ (year) | Days of work | source_ids
---|---|---|---|---|---
Pakistan | 397,999 PKR ¹ | 1,416 | 1,596 (2025) | 323.8 | propakistani2026, worldbank2026, worldbankfx2026
Nigeria | 1,400,553 NGN ² | 922 | 1,224 (2025) | 275.0 | slot2026, worldbank2026, worldbankfx2026
Nepal | 157,999 NPR ³ | 1,136 | 1,536 (2025) | 269.9 | gadgetbyte2026, worldbank2026, worldbankfx2026
Bangladesh | 179,999 BDT ⁴ | 1,476 | 2,597 (2025) | 207.5 | dailystar2025, worldbank2026, worldbankfx2026
Egypt | 77,700 EGP ⁵ | 1,578 | 3,086 (2025) | 186.7 | tradeline2026, egyptindependent2025, worldbank2026, worldbankfx2026
India | 99,900 INR | 1,146 | 2,702 (2025) | 154.8 | applein2026, worldbank2026, worldbankfx2026
Philippines | 69,990 PHP | 1,217 | 4,171 (2025) | 106.5 | appleph2026, worldbank2026, worldbankfx2026
Vietnam | 28,999,000 VND | 1,200 | 5,066 (2025) | 86.5 | applevn2026, worldbank2026, worldbankfx2026
Indonesia | 17,249,000 IDR ⁶ | 1,047 | 5,060 (2025) | 75.5 | databoks2025, worldbank2026, worldbankfx2026
Brazil | 8,299 BRL | 1,485 | 10,713 (2025) | 50.6 | applebr2026, worldbank2026, worldbankfx2026
Mexico | 21,999 MXN | 1,144 | 13,889 (2025) | 30.1 | applemx2026, worldbank2026, worldbankfx2026
China | 6,799 CNY | 946 | 13,862 (2025) | 24.9 | applecn2026, worldbank2026, worldbankfx2026
Japan | 159,800 JPY | 1,068 | 35,951 (2025) | 10.8 | applejp2026, worldbank2026, worldbankfx2026
UAE | 3,799 AED | 1,034 | 50,274 (2024) | 7.5 | appleae2026, worldbank2026, worldbankfx2026
United Kingdom | 899 GBP | 1,184 | 57,602 (2025) | 7.5 | appleuk2026, worldbank2026, worldbankfx2026
Germany | 1,099 EUR | 1,242 | 60,496 (2025) | 7.5 | applede2026, worldbank2026, worldbankfx2026
Australia | 1,549 AUD | 998 | 65,130 (2025) | 5.6 | appleau2026, worldbank2026, worldbankfx2026
United States | 899 USD ⁷ | 899 | 90,027 (2025) | 3.6 | appleus2026, worldbank2026
Switzerland | 899 CHF | 1,081 | 114,769 (2025) | 3.4 | applech2026, worldbank2026, worldbankfx2026

¹ Pakistan has no Apple store; price is ProPakistani's dealer-tracked PTA-approved price (updated from
Apple's authorised dealer list; the authorised distributor Mercantile/Jazz launch price in October 2025
was Rs 399,000) (propakistani2026, propakistani2025, jazz2025).
² Nigeria has no Apple store; price is the listed price at SLOT Systems, a major national retailer (slot2026).
³ Nepal has no Apple store; price is the current official price reported by GadgetByte Nepal; the
authorised-reseller launch list (Generation Next, effective 26 September 2025) was NPR 157,299 (gadgetbyte2026).
⁴ Bangladesh has no Apple store; price is the official launch price set by Apple-authorised reseller
Gadget & Gear in October 2025; retailers were discounting to about Tk 147,999 by late 2026 (dailystar2025, mobilebd2026).
⁵ Egypt has no Apple store; price is the current Tradeline (Apple's official Egyptian agent) listing for
the 256GB model; the launch price quoted by Trade Line in September 2025 was LE 62,500 (tradeline2026, egyptindependent2025).
⁶ Indonesia has no Apple online store; price is the official launch price quoted by Apple premium
reseller iBox in October 2025 (databoks2025).
⁷ US price excludes state sales tax; it also includes a $30 carrier-activation discount (unlocked $929) (appleus2026).

**Sri Lanka is omitted** — no single defensible official price exists; see Gaps.

### Monthly-wages version (ILO mean nominal monthly earnings)

Where the ILO publishes mean monthly earnings of employees (sex: total), the same iPhone costs:

Country | iPhone 17 price (US$) | ILO mean monthly wage (local, year) | ≈US$/month | Months of average wages | source_ids
---|---|---|---|---|---
Pakistan | 1,416 | 26,628 (2025) | 95 | 14.9 | ilo2026, worldbankfx2026
Nigeria | 922 | 76,489 (2024) | 50 | 18.3 | ilo2026, worldbankfx2026
Bangladesh | 1,476 | 15,517 (2024) | 127 | 11.6 | ilo2026, worldbankfx2026
Egypt | 1,578 | 4,954 (2024) | 101 | 15.7 | ilo2026, worldbankfx2026
India | 1,146 | 22,220 (2025) | 255 | 4.5 | ilo2026, worldbankfx2026
Philippines | 1,217 | 19,939 (2025) | 347 | 3.5 | ilo2026, worldbankfx2026
Vietnam | 1,200 | 8,579,562 (2024) | 355 | 3.4 | ilo2026, worldbankfx2026
Indonesia | 1,047 | 2,778,129 (2023) | 169 | 6.2 | ilo2026, worldbankfx2026
Brazil | 1,485 | 3,393 (2025) | 607 | 2.4 | ilo2026, worldbankfx2026
Mexico | 1,144 | 10,609 (2025) | 551 | 2.1 | ilo2026, worldbankfx2026
United Kingdom | 1,184 | 3,157 (2025) | 4,157 | 0.3 | ilo2026, worldbankfx2026
Australia | 998 | 5,906 (2021) | 3,805 | 0.3 | ilo2026, worldbankfx2026
Germany | 1,242 | 4,413 (2022) | 4,986 | 0.2 | ilo2026, worldbankfx2026
United States | 899 | 6,273 (2025) | 6,273 | 0.1 | ilo2026
Switzerland | 1,081 | 6,468 (2025) | 7,780 | 0.1 | ilo2026, worldbankfx2026

Not available in this ILO series: China, Japan, Nepal, UAE. The wage-based ranking is even starker than
the GDP-per-capita one: on ILO earnings the iPhone 17 costs an Indian average employee about 4½ months'
wages, a Pakistani about 15 months, and a Nigerian about 18 months — against roughly a fortnight or
less in the US, UK, Germany, Australia and Switzerland.

## Credibility

Strengths:
- The price side is unusually solid for a comparison pack: the identical SKU (iPhone 17 256GB) is priced
  in 13 countries directly on Apple's own country stores on one day (19 October 2026), and in the rest
  by the authorised national distributor or a named national retailer (applein2026, appleus2026, propakistani2026, dailystar2025).
- GDP per capita and exchange rates come from one consistent, versioned source (World Bank API) and the
  wage data from one consistent ILOSTAT series, so cross-country differences reflect the data, not
  patchwork vintages (worldbank2026, worldbankfx2026, ilo2026).
- The iPhone is a globally traded, essentially identical consumer good, so nominal-dollar comparison is
  more meaningful for it than for non-traded goods and services.

Criticisms:
- GDP per capita is a **mean across the whole population, including children and non-workers**, and is
  pulled up by the top of the distribution; it is not the median worker's wage. In highly unequal
  countries the gap between mean income and the median person's income is large — India's top 1% took
  22.6% of national income in 2022-23, the highest ever recorded in that series — so "days of work" at
  GDP-per-capita income understates what a typical (median) Indian would need to work (wid2024).
- Conversely, per-capita income is lower than income per *employed worker*, so for someone actually in
  formal employment the true burden is smaller than the table suggests; the two biases run in opposite
  directions and the metric should be read as an ordering, not a precise burden (worldbank2026).
- The ILO mean-wage series covers **employees**, mostly formal-sector jobs; in India and South Asia a
  large share of workers are informal or self-employed and are not captured, so months-of-wages is
  optimistic for the typical worker there (ilo2026).
- ILO vintages differ widely (Germany 2022, Australia 2021, Indonesia 2023, Bangladesh/Nigeria/Egypt/
  Vietnam 2024), so wage-side comparisons mix years (ilo2026).
- **Taxes are not treated consistently by Apple itself**: US sticker prices exclude state sales tax
  (0–10%+ added at checkout) while all other listed countries' prices include GST/VAT — this flatters
  the US slightly (appleus2026).
- **Exchange-rate timing**: local prices (October 2026) were converted at World Bank 2025 period-average
  rates (2024 for Vietnam). A weaker rupee or naira in 2026 makes those countries look less affordable
  than at spot-2026 rates, and Apple itself cited the weak rupee when it raised Indian prices
  (worldbankfx2026, moneycontrol2026).
- **No purchasing-power adjustment** is applied — deliberately: the iPhone is priced globally in hard
  currency and cannot be bought at PPP-adjusted local prices; but readers should know PPP-corrected
  "affordability" comparisons of general consumption would show smaller gaps (worldbank2026).
- **Made-in-India price parity is a real issue**: India assembles every iPhone 17 model for the world,
  yet Apple raised the Indian price of the iPhone 17 by 20.5% in September 2026 — one of the steepest
  hikes in any market — showing local manufacturing has not produced local price protection
  (toi2025, hindustantimes2025, livemint2026, etelectronics2026).

## Politics

- **Union Budget, 23 July 2024**: Finance Minister Nirmala Sitharaman cut the basic customs duty on
  mobile phones (and PCBA/chargers) from 20% to 15%, saying it was "in the interest of consumers";
  Reuters reported it would directly benefit Apple, which still imported some Pro models, with
  Counterpoint's Neil Shah estimating a $35–50m annual benefit; the budget sits within the
  government's ~$24bn smartphone production-linked incentive scheme (reuters2024).
- **29 July 2024**: within a week of the budget, Apple announced price cuts across its iPhone range in
  India, up to ₹6,000 on Pro models, passing on the duty cut (thehindu2024).
- **Union Budget, 1 February 2018 (the mirror image)**: when the government raised the basic customs
  duty on imported phones from 15% to 20% under Make in India, Apple raised iPhone prices in India by
  ~3% within days — while the one locally assembled model (iPhone SE, built by Wistron in Bengaluru)
  stayed unchanged — a direct demonstration that Indian iPhone prices track import duties
  (economictimes2018).
- **September 2026**: hours after launching the iPhone 18 Pro and iPhone Duo, Apple *raised* (rather
  than the usual cut) prices of existing models in India by 20–29%, taking the iPhone 17 from ₹82,900
  to ₹99,900; Counterpoint's Tarun Pathak noted memory-cost increases in India were running at 20–30%
  versus an international average of 8–10%, alongside a weakening rupee (livemint2026, moneycontrol2026).
- **Make in India showcase**: for the first time with the iPhone 17 series, all models — including
  Pro and iPhone Air — were assembled in India from day one for global markets, with India supplying
  nearly half of US-sold iPhones and record exports (~$10bn in H1 FY25); this is now a centrepiece of
  the government's manufacturing narrative (toi2025, hindustantimes2025).
- **Pakistan**: the state's PTA device-registration regime adds a large explicit levy — PTA tax on an
  imported iPhone 17 is Rs 108,937 — and the authorised launch was pitched as ending grey-market risk,
  with prices "considerably higher compared to US launch prices due to import duties, taxes, and PTA
  registration costs" (propakistani2026, propakistani2025).

## Real stories

- **"Apple resets factory settings for iPhone 17" — India, October 2026.** Weeks after Apple raised
  Indian prices by more than 20%, the Economic Times reported the company was **cutting production of
  the standard iPhone 17 for the Indian market** because price-conscious buyers were pausing purchases,
  even as exports of the same model stayed robust ("the capacity will be redirected for exports as
  demand outside India remains strong"). Around 85% of iPhones sold in India are standard (non-Pro)
  models, which is why the price rise bit so hard; demand for the Pro and iPhone 18 Pro models stayed
  firm. The episode captures the affordability cliff this table measures: at ₹99,900 — 155 days of
  average per-capita income — the mainstream iPhone priced itself out of its own core Indian buyers
  (economictimes2026).
- **India becomes the iPhone factory, 2025.** For the first time, all iPhone 17 models shipped
  "made in India" from launch day: Apple's five Indian plants (Foxconn's Devanahalli and Sriperumbudur
  units, Tata's Hosur, Narsapura and Pegatron facilities) produced ~$22bn of iPhones in FY25, ~80% of
  it exported, including $1.25bn in the usually lean month of September 2025 (up 155% year-on-year);
  India now supplies nearly half of iPhones sold in the US, a supply-chain reroute driven by US tariff
  risk (toi2025, hindustantimes2025).

## Gaps

- **Sri Lanka**: excluded — no Apple online store and no single defensible official price. Retailer
  listings for the iPhone 17 256GB ranged from about Rs 307,000 (M Store cash price) to an MRP of
  Rs 424,600 at Fono.lk (an authorised reseller, whose own cash price was Rs 386,000), with a price
  aggregator showing Rs 266,500–294,900 across seven stores in May 2026 — a spread too wide and too
  unofficial to responsibly put in the table (fono2026, ideabeam2026).
- **ILO mean monthly earnings** could not be found for **China, Japan, Nepal and the UAE** in the
  DF_EAR_EMTA_SEX_NB series; the series used is nominal mean earnings of employees and is dated for
  Germany (2022), Australia (2021) and Indonesia (2023) (ilo2026).
- **Exchange rates** are World Bank 2025 period averages (2024 for Vietnam); October 2026 spot rates
  were not used, so US$ conversions carry FX-timing error, largest for volatile currencies
  (worldbankfx2026).
- **UAE GDP per capita** latest available in the World Bank API is 2024, one year behind the other
  countries (worldbank2026).
- **Nepal** price sources conflict: GadgetByte's current official price (NPR 157,999) vs the
  Generation Next authorised launch list (NPR 157,299, effective 26 September 2025) vs Quality
  Computer's own shop listing (NPR 173,499); the GadgetByte current-official figure is used
  (gadgetbyte2026, qualitycomputer2026).
- **Bangladesh**: the Tk 179,999 used is the October 2025 official launch price; by late 2026
  retailers listed the 256GB model at about Tk 147,999, so the current-market day-count would be
  ~17% lower (dailystar2025, mobilebd2026).
- **Pakistan, Nigeria, Egypt, Indonesia** prices are not Apple-store prices (no Apple online store
  exists there); each is an authorised distributor/agent or major-retailer figure as flagged in the
  table, and Pakistan's grey market (non-PTA units) sells well below the official price
  (propakistani2025, slot2026, tradeline2026, databoks2025).
- **Indonesia**: the Rp17,249,000 figure is the October 2025 official launch price; current-2026
  official pricing may differ and could not be verified on an Apple-owned page.
- The **US $899** embeds a $30 carrier-activation discount; using the unlocked $929 raises the US day
  count from 3.6 to 3.8 days (appleus2026).
- GDP per capita for 2025 is the latest World Bank release but remains subject to revision; figures
  were taken from the API on 19 October 2026 (worldbank2026).
