export type TrendPoint = { year: number; value: number; rank?: number };
export type PeerPoint = { country: string; value: number; year: number };

export type Claim = { text: string; source: string; date?: string };
export type Story = { title: string; body: string[]; source: string; date?: string };

export type Category =
  | "pollution"
  | "health"
  | "education"
  | "life"
  | "politics"
  | "environment"
  | "money";

export const CATEGORIES: Record<Category, { label: string; color: string }> = {
  pollution: { label: "Pollution", color: "#b23a3a" },
  health: { label: "Health", color: "#c96f2e" },
  education: { label: "Education", color: "#3454a5" },
  life: { label: "Life & lifestyle", color: "#2e7d5b" },
  politics: { label: "Politics & press", color: "#7a4a9e" },
  environment: { label: "Environment & climate", color: "#4a7a3a" },
  money: { label: "Money & inequality", color: "#8a6d2f" },
};

export type IndexPage = {
  slug: string;
  name: string;
  tagline: string;
  category: Category;
  /** What the index measures, in plain words. */
  measure: string[];
  /** Who publishes it, how the number is built, what the scale means. */
  built: { paragraphs: string[]; inputs: string[]; scale: string };
  headline: { value: string; label: string; rank?: string; asOf: string; source: string };
  trend: {
    title: string;
    takeaway: string;
    source: string;
    unit: string;
    /** Lower value = better outcome (ranks, PM2.5, wasting). Flips the reading, not the data. */
    lowerIsBetter?: boolean;
    points: TrendPoint[];
  };
  peers: {
    title: string;
    takeaway: string;
    source: string;
    unit: string;
    lowerIsBetter?: boolean;
    points: PeerPoint[];
  };
  credibility: {
    strengths: string[];
    criticisms: Claim[];
    gaps?: string;
  };
  politics: Claim[];
  stories: Story[];
  /** The honest one-paragraph bottom line. */
  verdict: string;
};
