import { createFileRoute } from "@tanstack/react-router";
import { SOURCES } from "@/data/sources";
import { Header, Footer } from "@/components/chrome";
import { tr } from "@/i18n/config";

export const Route = createFileRoute("/sources")({
  component: SourcesPage,
  head: () => ({
    meta: [
      {
        title: "Sources — India in Reality",
        description:
          "Every report, paper and news story cited on India in Reality, with links.",
      },
    ],
  }),
});

function SourcesPage() {
  const t = tr("en");
  const entries = Object.entries(SOURCES)
    .filter(([id]) => id !== "placeholder")
    .sort((a, b) => a[0].localeCompare(b[0]));
  return (
    <>
      <Header lang="en" />
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="kicker">Bibliography</p>
        <h1 className="mt-2 font-serif text-4xl">{t.sourcesTitle}</h1>
        <p className="prose-block mt-4 max-w-2xl text-ink-soft">{t.sourcesIntro}</p>
        <ol className="mt-10 space-y-4">
          {entries.map(([id, s]) => (
            <li key={id} id={id} className="rule pt-4">
              <span className="font-mono text-xs text-saffron">[{id}]</span>{" "}
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-ink underline">
                {s.title}
              </a>
              <span className="text-ink-soft">
                {" "}— {s.publisher}, {s.year}
              </span>
            </li>
          ))}
        </ol>
      </main>
      <Footer lang="en" />
    </>
  );
}
