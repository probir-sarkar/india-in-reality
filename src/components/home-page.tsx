import { createFileRoute, Link } from "@tanstack/react-router";
import type { IndexPage } from "@/data/types";
import { CATEGORIES } from "@/data/types";
import { SITE } from "@/lib/site";
import { tr, langPath, type Lang } from "@/i18n/config";
import { Header, Footer } from "@/components/chrome";

export function HomePage({ lang, registry }: { lang: Lang; registry: IndexPage[] }) {
  const t = tr(lang);
  return (
    <>
      <Header lang={lang} />
      <main className="mx-auto max-w-4xl px-5">
        <section className="pt-14 pb-10">
          <p className="kicker">{t.heroKicker}</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            {t.heroTitleA}
            <span className="text-saffron">{t.heroTitleB}</span>
          </h1>
          <p className="dev mt-3 text-xl text-indigo-ink">
            आँकड़े झूठ नहीं बोलते — पर पूरा सच भी नहीं कहते।
          </p>
          <span className="hero-stroke mt-4" aria-hidden="true" />
          <p className="prose-block mt-5 max-w-2xl text-[1.05rem] text-ink-soft">
            {t.heroIntro}
          </p>
        </section>

        <section className="rule pt-10 pb-16">
          <p className="kicker">{t.theIndices}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {registry
              .filter((ix) => !ix.slug.startsWith("sample"))
              .map((ix) => (
                <Link
                  key={ix.slug}
                  to={langPath(lang, "/indexes/$slug")}
                  params={{ slug: ix.slug }}
                  className="no-underline"
                >
                  <article className="card-sheet h-full p-5">
                    <div className="flex items-center justify-between">
                      <span className="kicker" style={{ color: CATEGORIES[ix.category].color }}>
                        {CATEGORIES[ix.category].label}
                      </span>
                      <span className="font-mono text-xs text-faint">{ix.headline.value}</span>
                    </div>
                    <h2 className="mt-2 font-serif text-xl text-ink">{ix.name}</h2>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{ix.tagline}</p>
                  </article>
                </Link>
              ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}

export const homeMeta = (lang: Lang) => ({
  meta: [
    {
      title: `${SITE.name} — ${SITE.tagline}`,
      description: SITE.description,
    },
    ...(lang === "en"
      ? [{ name: "alternate", hrefLang: "hi", href: "https://inr.probir.dev/hi/" }]
      : [{ name: "alternate", hrefLang: "en", href: "https://inr.probir.dev/" }]),
  ],
});
