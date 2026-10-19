import { SITE } from "@/lib/site";
import { tr, langPath, type Lang } from "@/i18n/config";

const LANGS = [
  { code: "en" as const, label: "EN" },
  { code: "hi" as const, label: "हिं" },
];

/** A 12-spoke wheel mark — chakra-adjacent, deliberately not the flag's. */
export function WheelMark({ className = "size-6" }: { className?: string }) {
  const spokes = Array.from({ length: 12 }, (_, i) => (i * 360) / 12);
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      {spokes.map((deg) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <line
            key={deg}
            x1={16 + 3.2 * Math.cos(rad)}
            y1={16 + 3.2 * Math.sin(rad)}
            x2={16 + 13.2 * Math.cos(rad)}
            y2={16 + 13.2 * Math.sin(rad)}
            stroke="currentColor"
            strokeWidth="1.4"
          />
        );
      })}
    </svg>
  );
}

export function Header({ lang = "en" }: { lang?: Lang }) {
  const t = tr(lang);
  return (
    <>
      <div className="tricolour" />
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3.5">
          <a href={langPath(lang, "/")} className="flex items-center gap-2.5 no-underline text-ink">
            <WheelMark className="size-7 text-leaf" />
            <span className="flex flex-col leading-none">
              <span className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-faint">
                India in Reality
              </span>
              <span className="dev mt-0.5 text-sm text-saffron">इंडिया इन रियलिटी</span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4 text-sm text-ink-soft">
              <a href={langPath(lang, "/")} className="no-underline hover:text-ink">{t.navIndexes}</a>
              <a href={langPath(lang, "/about")} className="no-underline hover:text-ink">{t.navAbout}</a>
              <a href={langPath(lang, "/sources")} className="no-underline hover:text-ink">{t.navSources}</a>
              <a href={langPath(lang, "/donate")} className="no-underline font-semibold text-saffron hover:text-leaf">
                {t.navDonate}
              </a>
            </nav>
            <div className="flex items-center gap-1 rounded-full border border-line px-1 py-0.5 font-mono text-xs">
              {LANGS.map((l) => (
                <a
                  key={l.code}
                  href={langPath(l.code, "/")}
                  aria-current={l.code === lang ? "true" : undefined}
                  className={
                    l.code === lang
                      ? "rounded-full bg-ink px-2 py-0.5 no-underline text-white"
                      : "px-2 py-0.5 no-underline text-faint hover:text-ink"
                  }
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer({ lang = "en" }: { lang?: Lang }) {
  const t = tr(lang);
  return (
    <footer className="mt-20">
      <div className="jaali" />
      <div className="mx-auto max-w-4xl px-5 py-10 text-sm text-faint">
        <p>
          {SITE.name} — {t.footerEvery}
          <a href={langPath(lang, "/sources")} className="text-saffron underline">{t.footerBiblio}</a>.
        </p>
        <p className="mt-2">
          {t.footerIndependent}{" "}
          <a href="https://www.linkedin.com/in/probir-sarkar" target="_blank" rel="noopener noreferrer" className="underline">
            Probir Sarkar
          </a>
          {" · "}
          <a href="mailto:me@probirsarkar.com" className="underline">me@probirsarkar.com</a>
          {" · "}
          <a href={langPath(lang, "/donate")} className="text-saffron underline">{t.navDonate}</a>
        </p>
      </div>
    </footer>
  );
}
