import type { IndexPage } from "../types";
import { happiness } from "./happiness";
import { hdi } from "./hdi";
import { pressFreedom } from "./press-freedom";
import { democracy } from "./democracy";
import { sampleIndex } from "./sample";

export const INDEXES: IndexPage[] = [hdi, happiness, pressFreedom, democracy, sampleIndex];
