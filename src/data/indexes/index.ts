import type { IndexPage } from "../types";
import { happiness } from "./happiness";
import { hdi } from "./hdi";
import { sampleIndex } from "./sample";

export const INDEXES: IndexPage[] = [hdi, happiness, sampleIndex];
