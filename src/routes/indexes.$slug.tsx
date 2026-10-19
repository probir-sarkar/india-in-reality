import { createFileRoute, Link } from "@tanstack/react-router";
import { INDEXES } from "@/data/indexes";
import { SOURCES } from "@/data/sources";
import { CATEGORIES } from "@/data/types";
import { ChartFrame } from "@/components/chart-frame";
import { TrendChart, PeerChart } from "@/components/charts";
import { Header, Footer } from "@/components/chrome";

export const Route = createFileRoute("/indexes/$slug")({
  component: IndexDetail,
  head: ({ params }) => {
    const ix = INDEXES.find((i) => i.slug === params.slug);
    return {
      meta: [
        {
          title: ix
            ? `${ix.name}: what it says, and what to make of it — India in Reality`
            : "Not found — India in Reality",
        },
        { name: "description", content: ix?.tagline ?? "" },
      ],
    };
  },
});

function SourceRef({ id }: { id: string }) {
  const ids = id.split(";").map((s) => s.trim()).filter(Boolean);
  return (
    <sup className="ml-0.5 whitespace-nowrap font-mono text-[0.65rem]">
      {ids.map((one) => {
        const s = SOURCES[one];
        if (!s) return null;
        return (
          <a
            key={one}
            href={`/sources#${one}`}
            className="text-saffron no-underline"
            title={`${s.title} — ${s.publisher} (${s.year})`}
          >
            [{one}]
          </a>
        );
      })}
    </sup>
  );
}

function Section({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rule mt-12 pt-8">
      <p className="kicker">{n}</p>
      <h2 className="mt-1 font-serif text-2xl">{title}</h2>
      <div className="prose-block mt-4 text-[0.98rem] text-ink-soft">{children}</div>
    </section>
  );
}

function IndexDetail() {
  const { slug } = Route.useParams();
  const ix = INDEXES.find((i) => i.slug === slug);
  if (!ix) return <NotFound />;
  const cat = CATEGORIES[ix.category];

  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5">
        <div className="pt-12">
          <p className="kicker" style={{ color: cat.color }}>
            {cat.label}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight">{ix.name}</h1>
          <p className="mt-3 max-w-2xl font-serif text-xl text-ink-soft">{ix.tagline}</p>

          <div className="chart-frame mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3 p-5">
            <div>
              <p className="kicker">Latest</p>
              <p className="mt-1 font-mono text-4xl font-semibold text-ink">
                {ix.headline.value}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                {ix.headline.label}
                {ix.headline.rank ? ` · ${ix.headline.rank}` : ""}
              </p>
            </div>
            <div className="text-sm text-faint">
              As of {ix.headline.asOf}
              <SourceRef id={ix.headline.source} />
            </div>
          </div>
        </div>

        <Section n="01" title="What it measures">
          {ix.measure.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Section>

        <Section n="02" title="How the number is built">
          {ix.built.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p className="kicker mt-5">Inputs</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {ix.built.inputs.map((inp, i) => (
              <li key={i}>{inp}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-faint">Scale: {ix.built.scale}</p>
        </Section>

        <ChartFrame
          title={ix.trend.title}
          takeaway={ix.trend.takeaway}
          source={ix.trend.source}
        >
          <TrendChart points={ix.trend.points} unit={ix.trend.unit} color={cat.color} />
        </ChartFrame>

        <ChartFrame
          title={ix.peers.title}
          takeaway={ix.peers.takeaway}
          source={ix.peers.source}
        >
          <PeerChart
            points={ix.peers.points}
            unit={ix.peers.unit}
            lowerIsBetter={ix.peers.lowerIsBetter}
          />
        </ChartFrame>

        <Section n="03" title="How much to trust it">
          <p className="kicker">What it does well</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {ix.credibility.strengths.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
          <p className="kicker mt-6">Where it is shaky</p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            {ix.credibility.criticisms.map((c, i) => (
              <li key={i}>
                {c.text}
                <SourceRef id={c.source} />
              </li>
            ))}
          </ul>
          {ix.credibility.gaps && (
            <p className="mt-4 rounded-md bg-paper-2 p-4 text-sm">
              <strong className="text-ink">Known gap:</strong> {ix.credibility.gaps}
            </p>
          )}
        </Section>

        <Section n="04" title="The politics">
          <ul className="space-y-4">
            {ix.politics.map((c, i) => (
              <li key={i} className="border-l-2 border-line pl-4">
                {c.text}
                <SourceRef id={c.source} />
                {c.date && <span className="ml-2 font-mono text-xs text-faint">{c.date}</span>}
              </li>
            ))}
          </ul>
        </Section>

        <Section n="05" title="On the ground">
          <div className="space-y-8">
            {ix.stories.map((st, i) => (
              <div key={i}>
                <h3 className="font-serif text-lg text-ink">{st.title}</h3>
                {st.body.map((p, j) => (
                  <p key={j} className="mt-2">
                    {p}
                    {j === st.body.length - 1 && <SourceRef id={st.source} />}
                  </p>
                ))}
                {st.date && <p className="mt-1 font-mono text-xs text-faint">{st.date}</p>}
              </div>
            ))}
          </div>
        </Section>

        <Section n="06" title="The honest bottom line">
          <p className="font-serif text-lg leading-relaxed text-ink">{ix.verdict}</p>
        </Section>

        <div className="rule mt-14 flex justify-between pt-6 pb-4 text-sm">
          {prevNext(slug)}
        </div>
      </main>
      <Footer />
    </>
  );
}

function prevNext(slug: string) {
  const i = INDEXES.findIndex((x) => x.slug === slug);
  const prev = INDEXES[(i - 1 + INDEXES.length) % INDEXES.length];
  const next = INDEXES[(i + 1) % INDEXES.length];
  return (
    <>
      <Link to="/indexes/$slug" params={{ slug: prev.slug }} className="text-saffron no-underline">
        ← {prev.name}
      </Link>
      <Link to="/indexes/$slug" params={{ slug: next.slug }} className="text-saffron no-underline">
        {next.name} →
      </Link>
    </>
  );
}

function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-4xl px-5 py-20">
        <h1 className="font-serif text-3xl">No such index here.</h1>
        <p className="mt-3">
          <Link to="/" className="text-saffron underline">Back to the list.</Link>
        </p>
      </main>
      <Footer />
    </>
  );
}
