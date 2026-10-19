import { createFileRoute, Link } from "@tanstack/react-router";
import { INDEXES } from "@/data/indexes";
import { CATEGORIES } from "@/data/types";
import { SITE } from "@/lib/site";
import { Header, Footer } from "@/components/chrome";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      {
        title: `${SITE.name} — ${SITE.tagline}`,
        description: SITE.description,
      },
    ],
  }),
});

function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5">
        <section className="pt-14 pb-10">
          <p className="kicker">A cited field guide</p>
          <h1 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            India, through the indices everyone quotes —
            <span className="text-saffron"> read honestly.</span>
          </h1>
          <p className="prose-block mt-5 max-w-2xl text-[1.05rem] text-ink-soft">
            Every year, a crop of global rankings puts India near the bottom, and every
            year the government rejects them as biased. Both parts of that cycle deserve
            more curiosity than they get. This site takes each index one at a time: what
            it measures, what it says about India, how much to trust it, what the
            government says back, and what the numbers look like on the ground.
            Every figure carries a public source.
          </p>
        </section>

        <section className="rule pt-10 pb-16">
          <p className="kicker">The indices</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {INDEXES.map((ix) => (
              <Link
                key={ix.slug}
                to="/indexes/$slug"
                params={{ slug: ix.slug }}
                className="no-underline"
              >
                <article className="h-full rounded-[10px] border border-line bg-[#fffdf8] p-5 transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <span
                      className="kicker"
                      style={{ color: CATEGORIES[ix.category].color }}
                    >
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
      <Footer />
    </>
  );
}

