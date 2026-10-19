import type { IndexPage } from "../types";

/**
 * SAMPLE entry — pipeline smoke test only. Deleted when real data files land
 * from research/. Do not deploy with this present.
 */
export const sampleIndex: IndexPage = {
  slug: "sample",
  name: "Sample index (pipeline test)",
  tagline: "Temporary file proving the page, charts and source gate work.",
  category: "life",
  measure: ["This is a placeholder. It exercises every block a real page uses."],
  built: {
    paragraphs: ["Placeholder methodology paragraph."],
    inputs: ["Input one", "Input two"],
    scale: "0–100",
  },
  headline: { value: "00", label: "placeholder rank of 0", asOf: "never", source: "placeholder" },
  trend: {
    title: "Sample trend",
    takeaway: "Placeholder takeaway.",
    source: "placeholder",
    unit: "",
    points: [
      { year: 2020, value: 10 },
      { year: 2021, value: 12 },
      { year: 2022, value: 9 },
    ],
  },
  peers: {
    title: "Sample peers",
    takeaway: "Placeholder takeaway.",
    source: "placeholder",
    unit: "",
    points: [
      { country: "India", value: 9, year: 2022 },
      { country: "China", value: 11, year: 2022 },
      { country: "US", value: 13, year: 2022 },
    ],
  },
  credibility: {
    strengths: ["Placeholder strength."],
    criticisms: [{ text: "Placeholder criticism.", source: "placeholder" }],
  },
  politics: [{ text: "Placeholder politics.", source: "placeholder" }],
  stories: [{ title: "Placeholder story", body: ["Placeholder body."], source: "placeholder" }],
  verdict: "Placeholder verdict.",
};
