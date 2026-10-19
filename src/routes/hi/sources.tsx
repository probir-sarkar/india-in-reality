import { createFileRoute } from "@tanstack/react-router";
import { SOURCES } from "@/data/sources";
import { Header, Footer } from "@/components/chrome";
import { tr } from "@/i18n/config";

export const Route = createFileRoute("/hi/sources")({
  component: SourcesPageHi,
  head: () => ({
    meta: [
      {
        title: "स्रोत — India in Reality",
        description: "भारत इन रियलिटी पर उद्धृत हर रिपोर्ट, अध्ययन और ख़बर — लिंक के साथ।",
      },
    ],
  }),
});

function SourcesPageHi() {
  const t = tr("hi");
  const entries = Object.entries(SOURCES)
    .filter(([id]) => id !== "placeholder")
    .sort((a, b) => a[0].localeCompare(b[0]));
  return (
    <>
      <Header lang="hi" />
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="kicker">ग्रंथसूची</p>
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
      <Footer lang="hi" />
    </>
  );
}
