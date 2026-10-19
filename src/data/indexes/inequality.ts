import type { IndexPage } from "../types";

export const inequality: IndexPage = {
  slug: "billionaire-raj",
  name: "Income & Wealth Concentration (World Inequality Lab)",
  tagline:
    "The top 1% take 22.6% of national income and hold 40.1% of national wealth — both series highs. The government's economists say the paper is wrong; the data underneath it is thinner than either side admits.",
  category: "money",
  measure: [
    "This page tracks how income and wealth are distributed in India, centred on the World Inequality Lab (WIL) working paper 'Income and Wealth Inequality in India, 1922–2023: The Rise of the Billionaire Raj' (Bharti, Chancel, Piketty & Somanchi, March 2024).",
    "Its headline finding: in 2022-23 the top 1% of Indian adults took 22.6% of national income and held 40.1% of national wealth — the highest levels ever recorded in the respective series (income since 1922, wealth since 1961). The authors conclude the modern 'Billionaire Raj' is more unequal than the British colonial Raj.",
  ],
  built: {
    paragraphs: [
      "Published as World Inequality Lab Working Paper 2024/09 (March 2024) by authors at the Paris School of Economics, Harvard Kennedy School and NYU. The method is Distributional National Accounts: national income accounts and wealth aggregates are combined with income-tax tabulations, rich lists, and household surveys on income, consumption and wealth in one consistent framework.",
      "The income series rests on annual income-tax tabulations published by the Indian tax authorities going back to 1922, when the Income Tax Act was enacted. The wealth series is anchored in Forbes/Hurun billionaire and rich-list data reconciled with national wealth aggregates. Outputs are shares of national income and wealth held by the top 1%, top 10%, middle 40% and bottom 50%, plus averages per group.",
      "The authors' own caveat matters: 'the quality of economic data in India is notably poor and has seen a decline recently. It is therefore likely that our results represent a lower bound to actual inequality levels.' It is a working paper — not peer-reviewed, not published in a journal — a point the government's Chief Economic Advisor made repeatedly in rebuttal.",
    ],
    inputs: [
      "Annual income-tax tabulations, 1922 onward (the only source capturing the very rich)",
      "Forbes/Hurun billionaire and rich-list data, reconciled with national wealth aggregates",
      "Household surveys on income, consumption and wealth",
      "National income accounts and wealth aggregates",
    ],
    scale: "Shares of national income / national wealth (percentages); wealth-to-income ratio β",
  },
  headline: {
    value: "22.6%",
    label: "of national income taken by the top 1% of adults, 2022-23 — highest in the series since 1922",
    rank: "top 1% wealth share: 40.1%, highest since 1961",
    asOf: "WIL Working Paper 2024/09 (March 2024)",
    source: "wid2024",
  },
  trend: {
    title: "Top 1% income share — the verified points",
    takeaway:
      "The top 1% income share has roughly doubled since 1990, from 10.5% to 22.6% — the 2022-23 level is the highest in a series running back to 1922, above even the inter-war colonial period. The gap between those two verified points is not charted because the paper's year-by-year values were not extracted here; the underlying series is annual.",
    source: "wid2024",
    unit: "% of national income",
    points: [
      { year: 1990, value: 10.5 },
      { year: 2022, value: 22.6 },
    ],
  },
  peers: {
    title: "Top 1% income share, 2022",
    takeaway:
      "India's top 1% income share (22.6%) is nearly 50% larger than China's (15.7%). The paper states India's share is higher than South Africa's, Brazil's and the US's — 'behind only perhaps Peru, Yemen and a couple of other small countries' — but does not print those countries' values in the sections captured, so only the two verified numbers are charted. On wealth concentration India sits mid-pack: Brazil (85.6%) and South Africa (79.7%) are the top-10% extremes the paper names.",
    source: "wid2024; frontline2024",
    unit: "% of national income, top 1%",
    points: [
      { country: "India", value: 22.6, year: 2022 },
      { country: "China", value: 15.7, year: 2022 },
    ],
  },
  credibility: {
    strengths: [
      "The century-long income series is built from actual tax tabulations, not surveys — the only data source that captures the very rich, who are systematically missed in household surveys.",
      "The method reconciles tax, rich-list and national-accounts data with surveys rather than trusting any one source; top income and wealth shares track each other across the whole period, an internal consistency check.",
      "The authors publish their uncertainty explicitly: estimates are 'a lower bound to actual inequality levels' given declining Indian data quality.",
    ],
    criticisms: [
      {
        text: "Chief Economic Advisor V. Anantha Nageswaran (with Deeksha Supyaal Bisht, Mint, 27 March 2024) argued the paper relies on outdated PLFS data, relegates the newer HCES 2022-23 to a footnote, double-counts market capitalisation as personal 'wealth' from Forbes/Hurun lists, and mistakes improved tax compliance for rising inequality; he pointed to NITI Aayog's finding that 248 million Indians escaped multidimensional poverty in a decade.",
        source: "swarajya2024",
      },
      {
        text: "Former PMEAC member Surjit Bhalla (with Karan Bhasin, Indian Express, 27 March 2024) attacked the paper's footnote-admitted uncertainty and cited Auten-Splinter's finding that US top-1% post-tax shares barely moved, questioning the Piketty-style method globally.",
        source: "indianexpress2024c",
      },
      {
        text: "The WIL authors' counter: the critiques misread footnote 36 (which concerns only whether the tax code is regressive by wealth, not the inequality estimates), the critics attributed an inflated 1999 top-1% share (their series says 14.7%), and the rebuttals are 'textbook cases of inequality denial.'",
        source: "indianexpress2024b",
      },
      {
        text: "Official consumption Ginis point the other way: rural fell from 0.283 (2011-12) to 0.266 (2022-23) to 0.237 (2023-24), urban from 0.363 to 0.314 to 0.284. But HCES 2022-23 introduced a modified mixed reference period (MMRP), so comparisons with pre-2011 surveys are not like-for-like — the 'declining inequality' claim rests on a changed instrument.",
        source: "mospi2024b",
      },
      {
        text: "India's data gaps are real regardless of side: no official consumption survey was published for 2011-12 to 2022-23 (the 2017-18 round was junked in November 2019 citing 'data quality' after a leaked draft showed the first fall in rural consumption in four decades), and the decennial Census has not been conducted since 2011.",
        source: "indiaforum",
      },
    ],
    gaps:
      "The paper's comparative top-1% values for the US, Brazil and South Africa were not printed in the extracted sections — only the qualitative claim and China's 15.7% are verified, which is why the peers chart carries two points. The original CEA op-ed (Mint, 27 March 2024) was not retrieved; its content is sourced via Swarajya's summary plus the WIL authors' response. No official income-based Gini exists — the official Gini is consumption-based, and the leaked 2017-18 consumption estimates were never officially published.",
  },
  politics: [
    {
      text:
        "November 2019: the government decided not to release the NSS 2017-18 consumption survey. Two National Statistical Commission members, including acting chair P.C. Mohanan, had already resigned in January 2019 amid related data-withholding disputes.",
      source: "sciencedirect2024",
      date: "Nov 2019",
    },
    {
      text:
        "16 January 2023: Oxfam's 'Survival of the Richest: The India Story' (Davos release) reported India's top 1% held more than 40.5% of wealth in 2021 while the bottom 50% held about 3%, and urged wealth taxes. Oxfam India CEO Amitabh Behar said India was 'on a fast track to becoming a country only for the rich.'",
      source: "bbc2023",
      date: "16 Jan 2023",
    },
    {
      text:
        "1 January 2022: the Home Ministry denied renewal of Oxfam India's FCRA registration, cutting off foreign funding; the rejection was confirmed in December 2022, and in February 2023 the ministry recommended a CBI probe into alleged FCRA violations.",
      source: "thehindu2023",
      date: "Feb 2023",
    },
    {
      text:
        "27 March 2024: the CEA's Mint article 'Ten reasons why Piketty's paper gets it wrong on inequality in India' rebutted the Billionaire Raj paper, pointing instead to a doubling middle class (PRICE data) and multidimensional-poverty declines. The same day, Bhalla-Bhasin's Indian Express column made parallel attacks.",
      source: "swarajya2024",
      date: "27 Mar 2024",
    },
    {
      text:
        "April 2024: the WIL authors responded, defending the 22.6%/40.1% findings and accusing government-adjacent economists of 'inequality denial.' No PIB release disputes the Billionaire Raj paper directly; the official rebuttal channel was the CEA's op-ed and replies in the financial press.",
      source: "indianexpress2024b",
      date: "Apr 2024",
    },
  ],
  stories: [
    {
      title: "The Ambani wedding",
      body: [
        "On 12 July 2024, Anant Ambani — son of Asia's richest man, Mukesh Ambani — married after months of celebrations that Reliance itself promoted worldwide. Reuters noted the spectacle 'overshadow[ed] some critical social media posts that have questioned the opulence at a time of growing inequality in India.' At the March 2024 pre-wedding gala the BBC put Mukesh Ambani's net worth at $115bn per Forbes; Quartz reported expected wedding spending of at least $132m — against an average Indian wedding of about $15,000, roughly three times the average annual household income. For scale, the WIL paper computes that India's roughly 10,000 wealthiest adults own an average ₹22.6bn each: 16,763 times the average Indian's wealth.",
      ],
      source: "reuters2024",
      date: "12 Jul 2024",
    },
    {
      title: "Oxfam's Adani arithmetic",
      body: [
        "Oxfam's January 2023 India supplement calculated that a one-off 20% tax on Gautam Adani's unrealised gains (2017-21) could have raised ₹1.79 lakh crore — 'enough to employ more than five million Indian primary school teachers for a year.' The same report noted that 64% of the ₹14.83 lakh crore collected in GST in 2021-22 came from the bottom 50% of the population — consumption taxes falling on the poorer half of a consumption-tax base.",
      ],
      source: "economictimes2023",
      date: "Jan 2023",
    },
    {
      title: "Billionaires, counted",
      body: [
        "In 1991, one Indian appeared on the Forbes billionaire list. By 2011 there were 52; by 2022, 162 — and their combined wealth had grown from under 1% of net national income to roughly 25%. Over the same three decades the national wealth-to-income ratio rose from 3.83 (1995) to 5.75 (2022), and the top 1% wealth share went from 13% (1961) to 40.1% (2022-23).",
      ],
      source: "wid2024",
      date: "Mar 2024",
    },
  ],
  verdict:
    "The strongest claim in the Billionaire Raj paper — top 1% shares at century highs, built from tax tabulations that actually see the rich — has survived its critics so far, and the critics' counter-evidence leans on instruments (consumption Ginis, multidimensional poverty) that either changed methodology or measure something narrower. The honest qualification runs the other way too: this is an unrefereed working paper resting partly on Forbes valuations, and its authors themselves call their numbers a lower bound on bad data. India went eleven years without a consumption survey and fifteen without a Census, so every side of this argument is arguing over partial evidence. What is not partial: the billionaires multiplied from one to 162 in a generation, and the official data needed to check what that did to everyone else was not published.",
};
