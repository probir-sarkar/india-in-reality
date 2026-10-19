import type { IndexPage } from "../types";

export const iphone: IndexPage = {
  slug: "iphone-affordability",
  name: "The iPhone Test",
  tagline:
    "155 days of average per-capita income to buy an iPhone 17 in India — 3.5 days in Switzerland. One product, nineteen countries, the affordability gap made concrete.",
  category: "money",
  measure: [
    "This page answers one question: how long would an average worker in each country have to work to buy one specific, identical product — the iPhone 17 with 256GB of storage, the base version of Apple's current mainstream iPhone — at the official price in that country?",
    "The price is set against World Bank GDP per capita (current US$), converted into days of work by dividing the year into 365 equal daily incomes. Where the ILO publishes one, mean monthly wages give a second, employee-level view. It is a crude but vivid gauge: the same globally-priced product against very different average incomes. Prices were captured from Apple's own country stores on 19 October 2026, and from authorised distributors or named retailers where no Apple store exists.",
  ],
  built: {
    paragraphs: [
      "The price is the iPhone 17 256GB 'From' price on each Apple online store's buy page — the same SKU everywhere, inclusive of GST/VAT in every market except the United States, where sales tax is added at checkout and varies by state. Seven countries without an Apple online store (Pakistan, Bangladesh, Nepal, Sri Lanka, Nigeria, Egypt, Indonesia) use the authorised distributor's or a named major retailer's price, flagged below.",
      "Income comes from one consistent source: World Bank GDP per capita, current US$, latest published year, retrieved from the World Bank API on 19 October 2026. Days of work = price in US$ ÷ (GDP per capita ÷ 365). Worked example for India: ₹99,900 at the 2025 average rate (₹87.16/US$) is $1,146; against a $2,702 per-capita income that is $7.40 a day — 154.8 days.",
    ],
    inputs: [
      "iPhone 17 256GB official price per country (Apple stores; authorised distributors where no store exists)",
      "World Bank GDP per capita, current US$ (2025; 2024 for UAE)",
      "World Bank official exchange rate, 2025 period average",
    ],
    scale: "days of average per-capita income; lower is more affordable",
  },
  headline: {
    value: "155 days",
    label: "of average per-capita income to buy one iPhone 17 in India",
    rank: "Switzerland: 3.4 days · US: 3.6 · Pakistan: 324",
    asOf: "prices 19 Oct 2026; World Bank 2025 incomes",
    source: "applein2026",
  },
  trend: {
    title: "The Indian price of the same phone",
    takeaway:
      "India assembles every iPhone 17 sold worldwide — yet between launch and the 2026 cycle, Apple raised the Indian price of the standard model by 20.5%, from ₹82,900 to ₹99,900.",
    source: "livemint2026; moneycontrol2026",
    unit: "",
    points: [
      { year: 2025, value: 82900 },
      { year: 2026, value: 99900 },
    ],
  },
  peers: {
    title: "Days of work to buy one iPhone 17",
    takeaway:
      "A Swiss or American worker needs under four days; an Indian worker about five months of daily income; a Pakistani over ten months. The phone is the same everywhere — the income is not.",
    source: "applein2026; worldbank2026; worldbankfx2026; propakistani2026",
    unit: " d",
    lowerIsBetter: true,
    points: [
      { country: "Switzerland", value: 3.4, year: 2026 },
      { country: "United States", value: 3.6, year: 2026 },
      { country: "Australia", value: 5.6, year: 2026 },
      { country: "Germany", value: 7.5, year: 2026 },
      { country: "UK", value: 7.5, year: 2026 },
      { country: "UAE", value: 7.5, year: 2026 },
      { country: "Japan", value: 10.8, year: 2026 },
      { country: "China", value: 24.9, year: 2026 },
      { country: "Mexico", value: 30.1, year: 2026 },
      { country: "Brazil", value: 50.6, year: 2026 },
      { country: "Indonesia", value: 75.5, year: 2026 },
      { country: "Vietnam", value: 86.5, year: 2026 },
      { country: "Philippines", value: 106.5, year: 2026 },
      { country: "India", value: 154.8, year: 2026 },
      { country: "Egypt", value: 186.7, year: 2026 },
      { country: "Bangladesh", value: 207.5, year: 2026 },
      { country: "Nepal", value: 269.9, year: 2026 },
      { country: "Nigeria", value: 275.0, year: 2026 },
      { country: "Pakistan", value: 323.8, year: 2026 },
    ],
  },
  credibility: {
    strengths: [
      "The price side is unusually solid: the identical SKU priced in 13 countries directly on Apple's own stores on a single day, and elsewhere by the authorised national distributor or a named retailer.",
      "Income and exchange rates come from one versioned source (World Bank API), wage data from one ILOSTAT series — differences reflect the data, not patchwork vintages.",
      "The iPhone is a globally traded, essentially identical consumer good, so a nominal-dollar comparison is more meaningful for it than for non-traded goods.",
    ],
    criticisms: [
      {
        text: "GDP per capita is a mean across the whole population — children and non-workers included — pulled up by the top of the distribution. With India's top 1% taking a record 22.6% of national income, days-of-work at mean income understates what the median Indian would need.",
        source: "wid2024",
      },
      {
        text: "The opposite bias also runs: per-capita income is lower than income per employed worker, so the true burden on someone in formal employment is smaller. The two biases pull in opposite directions — read this as an ordering, not a precise burden.",
        source: "worldbank2026",
      },
      {
        text: "The ILO mean-wage series covers employees, mostly formal-sector jobs; in India and South Asia a large share of workers are informal or self-employed, so months-of-wages is optimistic for the typical worker there.",
        source: "ilo2026",
      },
      {
        text: "Apple itself treats taxes inconsistently: US sticker prices exclude state sales tax while every other country's price includes GST/VAT — which flatters the US slightly.",
        source: "appleus2026",
      },
      {
        text: "Exchange-rate timing: October 2026 local prices were converted at World Bank 2025 average rates, so a weaker rupee or naira in 2026 makes those countries look less affordable than at spot rates.",
        source: "worldbankfx2026",
      },
      {
        text: "No purchasing-power adjustment is applied — deliberately: the iPhone is priced globally in hard currency. PPP-corrected comparisons of general consumption would show smaller gaps.",
        source: "worldbank2026",
      },
    ],
    gaps:
      "Sri Lanka is omitted — no Apple store and no single defensible official price (retailer listings ranged Rs 266,500–424,600). Seven countries' prices are distributor/retailer figures, not Apple-store prices. Bangladesh and Indonesia use October 2025 launch prices. The US $899 embeds a $30 carrier-activation discount (unlocked $929 → 3.8 days). ILO wage data is unavailable for China, Japan, Nepal and the UAE, and is dated for several others. Sri Lanka's exclusion and every flagged figure are listed in full in the pack.",
  },
  politics: [
    {
      text:
        "Union Budget, 23 July 2024: Finance Minister Nirmala Sitharaman cut basic customs duty on mobile phones from 20% to 15% 'in the interest of consumers'; Reuters reported a direct benefit to Apple estimated at $35–50m a year.",
      source: "reuters2024",
      date: "23 Jul 2024",
    },
    {
      text:
        "Within a week of that budget, Apple cut iPhone prices across India — up to ₹6,000 on Pro models — passing on the duty cut.",
      source: "thehindu2024",
      date: "29 Jul 2024",
    },
    {
      text:
        "The mirror image, 1 February 2018: when import duty rose from 15% to 20% under Make in India, Apple raised Indian iPhone prices ~3% within days — while the one locally-assembled model (the Bengaluru-built iPhone SE) stayed unchanged. Indian iPhone prices track import duties.",
      source: "economictimes2018",
      date: "Feb 2018",
    },
    {
      text:
        "September 2026: hours after launching the iPhone 18 Pro, Apple raised Indian prices of existing models 20–29% — the iPhone 17 went from ₹82,900 to ₹99,900 — citing memory-cost inflation running at 20–30% in India versus an 8–10% international average, alongside a weakening rupee.",
      source: "livemint2026",
      date: "Sep 2026",
    },
    {
      text:
        "Make in India showcase: with the iPhone 17 series, every model — Pro included — was assembled in India from day one for the world, with India supplying nearly half of US-sold iPhones and record exports (~$10bn in H1 FY25).",
      source: "toi2025",
    },
    {
      text:
        "Pakistan's device-registration regime adds an explicit levy: PTA tax on an imported iPhone 17 is Rs 108,937, pushing the authorised price 'considerably higher compared to US launch prices due to import duties, taxes, and PTA registration costs'.",
      source: "propakistani2026",
    },
  ],
  stories: [
    {
      title: "Apple resets production for India — the affordability cliff, in one decision",
      body: [
        "Weeks after raising Indian prices by more than 20%, the Economic Times reported Apple was cutting production of the standard iPhone 17 for the Indian market, because price-conscious buyers were pausing purchases — even as exports of the same model stayed robust ('the capacity will be redirected for exports').",
        "Around 85% of iPhones sold in India are standard non-Pro models, which is why the rise bit so hard; Pro demand stayed firm. At ₹99,900 — 155 days of average per-capita income — the mainstream iPhone had priced itself out of its own core Indian buyers.",
      ],
      source: "economictimes2026",
      date: "Oct 2026",
    },
    {
      title: "India becomes the iPhone factory",
      body: [
        "For the first time with the iPhone 17 series, all models shipped 'made in India' from launch day: Apple's five Indian plants produced roughly $22bn of iPhones in FY25, about 80% of it exported, including $1.25bn in the usually lean month of September 2025 (up 155% year-on-year). India now supplies nearly half of the iPhones sold in the United States — a supply-chain reroute driven by US tariff risk.",
        "The irony the affordability table captures: the country that builds the phone for the world pays, in average income terms, among the longest working lives for it.",
      ],
      source: "hindustantimes2025",
      date: "2025",
    },
  ],
  verdict:
    "As a gauge of the global income gap, the iPhone test is blunt but honest: the same object costs an Indian worker about five months of average per-capita income and a Swiss worker three days, and no purchasing-power adjustment changes that, because the phone is priced in hard currency everywhere. The metric's real weakness is the word 'average' — mean income flatters unequal countries while understating formal workers — so read the ranking, not the decimals. The sharper Indian finding is domestic: a phone assembled in India, for the world, just became 20% more expensive in India, and the buyers it priced out were its own mainstream ones.",
};
