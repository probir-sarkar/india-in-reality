import type { IndexPage } from "../types";
import { hdi } from "./hdi";
import { happiness } from "./happiness";
import { airQuality } from "./air-quality";
import { health } from "./health";
import { education } from "./education";
import { hunger } from "./hunger";
import { pressFreedom } from "./press-freedom";
import { democracy } from "./democracy";
import { environment } from "./environment";
import { inequality } from "./inequality";
import { iphone } from "./iphone";

export const INDEXES: IndexPage[] = [
  airQuality,
  health,
  education,
  hunger,
  hdi,
  inequality,
  pressFreedom,
  democracy,
  environment,
  happiness,
  iphone,
];
