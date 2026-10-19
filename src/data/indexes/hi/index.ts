import type { IndexPage } from "../../types";

/**
 * Hindi registry. TEMPORARY: re-exports the English data files until the Hindi
 * translations land in src/data/indexes/hi/<slug>.ts. The /hi routes render
 * Hindi chrome and section headings today; the bodies switch over as each
 * translated file replaces its entry here.
 */
import { hdi } from "../hdi";
import { happiness } from "../happiness";
import { airQuality } from "../air-quality";
import { health } from "../health";
import { education } from "../education";
import { hunger } from "../hunger";
import { pressFreedom } from "../press-freedom";
import { democracy } from "../democracy";
import { environment } from "../environment";
import { inequality } from "../inequality";

export const INDEXES_HI: IndexPage[] = [
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
];
