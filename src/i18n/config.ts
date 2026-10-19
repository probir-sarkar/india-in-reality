import i18next from "i18next";

/**
 * i18next with both languages bundled — no async backends, so prerendered
 * routes can resolve translations at build time via i18n.getFixedT(lang).
 * English lives at the root, Hindi under /hi.
 */
const resources = {
  en: {
    common: {
      navIndexes: "Indexes",
      navAbout: "About",
      navSources: "Sources",
      heroKicker: "A cited field guide",
      heroTitleA: "India, through the indices everyone quotes — ",
      heroTitleB: "read honestly.",
      heroIntro:
        "Every year, a crop of global rankings puts India near the bottom, and every year the government rejects them as biased. Both parts of that cycle deserve more curiosity than they get. This site takes each index one at a time: what it measures, what it says about India, how much to trust it, what the government says back, and what the numbers look like on the ground. Every figure carries a public source.",
      theIndices: "The indices",
      s01: "What it measures",
      s02: "How the number is built",
      inputs: "Inputs",
      scale: "Scale",
      s03: "How much to trust it",
      doesWell: "What it does well",
      shaky: "Where it is shaky",
      knownGap: "Known gap",
      s04: "The politics",
      s05: "On the ground",
      s06: "The honest bottom line",
      latest: "Latest",
      asOf: "As of",
      source: "Source",
      navDonate: "Donate",
      footerBiblio: "the bibliography",
      footerEvery: "Every figure on this site carries a public source; see ",
      footerIndependent:
        "An independent project by Probir Sarkar, built with the help of AI. Sources are public, but not every source is independently verified — corrections are welcome.",
      aboutTitle: "Rankings are arguments. Read the argument.",
      sourcesTitle: "Sources",
      sourcesIntro:
        "Every figure and claim on this site references one of these. Bracketed tags like [who2024] on the pages point here. Primary sources (the index publishers' own reports) come first in each entry's link.",
      notFound: "No such index here.",
      backToList: "Back to the list.",
    },
  },
  hi: {
    common: {
      navIndexes: "सूचकांक",
      navAbout: "परिचय",
      navSources: "स्रोत",
      heroKicker: "हर आंकड़े के साथ स्रोत",
      heroTitleA: "भारत, उन्हीं सूचकांकों के आईने में — ",
      heroTitleB: "ईमानदारी से।",
      heroIntro:
        "हर साल कुछ वैश्विक रैंकिंग भारत को नीचे दिखाती हैं, और हर साल सरकार उन्हें पक्षपाती कहकर खारिज कर देती है। इस चक्र के दोनों हिस्सों को उससे ज़्यादा जिज्ञासा मिलनी चाहिए। यह साइट हर सूचकांक को अलग-अलग समझाती है: वह मापता क्या है, भारत के बारे में कहता क्या है, उस पर कितना भरोसा किया जाए, सरकार का जवाब क्या है, और ज़मीन पर आंकड़े कैसे दिखते हैं। हर आंकड़े के साथ एक सार्वजनिक स्रोत है।",
      theIndices: "सूचकांक",
      s01: "यह क्या मापता है",
      s02: "यह आंकड़ा कैसे बनता है",
      inputs: "आधार",
      scale: "पैमाना",
      s03: "इस पर कितना भरोसा करें",
      doesWell: "जहाँ यह सही है",
      shaky: "जहाँ यह कमज़ोर है",
      knownGap: "ज्ञात कमी",
      s04: "राजनीति",
      s05: "ज़मीन पर",
      s06: "सीधी बात",
      latest: "नवीनतम",
      asOf: "आँकड़े",
      source: "स्रोत",
      navDonate: "सहयोग करें",
      footerBiblio: "ग्रंथसूची",
      footerEvery: "इस साइट का हर आंकड़ा एक सार्वजनिक स्रोत से जुड़ा है; देखें ",
      footerIndependent:
        "प्रोबिर सरकार की एक स्वतंत्र परियोजना, जिसमें AI की मदद ली गई है। स्रोत सार्वजनिक हैं, पर हर स्रोत की स्वतंत्र जाँच नहीं हुई है — सुधार के सुझाव स्वागत योग्य हैं।",
      aboutTitle: "रैंकिंग एक तर्क है। तर्क को पढ़िए।",
      sourcesTitle: "स्रोत",
      sourcesIntro:
        "इस साइट का हर आंकड़ा और दावा इन्हीं स्रोतों में से किसी को संदर्भित करता है। पन्नों पर [who2024] जैसे टैग यहीं ले जाते हैं। प्राथमिक स्रोत — सूचकांक बनाने वालों की अपनी रिपोर्टें — हर लिंक की पहली कड़ी हैं।",
      notFound: "यहाँ ऐसा कोई सूचकांक नहीं है।",
      backToList: "सूची पर लौटें।",
    },
  },
};

export type Lang = "en" | "hi";

// eslint-disable-next-line import/no-named-as-default-member
export const i18n = i18next.createInstance();
i18n.init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

/**
 * The string bundle for one language — plain object access (t.navIndexes).
 * Backed by i18next's own resource store, so new languages are one bundle each.
 */
export function tr(lang: Lang) {
  return i18n.getResourceBundle(lang, "common") as (typeof resources)["en"]["common"];
}

/** Path helper: English lives at the root, Hindi under /hi. */
export function langPath(lang: Lang, path: string) {
  return lang === "en" ? path : `/hi${path}`;
}
