import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/chrome";
import { tr } from "@/i18n/config";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      {
        title: "About — India in Reality",
        description:
          "Why this site exists, how it works, and what it refuses to do.",
      },
    ],
  }),
});

function About() {
  const t = tr("en");
  return (
    <>
      <Header lang="en" />
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="kicker">About</p>
        <h1 className="mt-2 font-serif text-4xl">{t.aboutTitle}</h1>
        <div className="prose-block mt-6 max-w-2xl text-[1.02rem] text-ink-soft">
          <p>
            I love India more than any other country in the world. That is exactly why I
            want to know more about it — the good and the bad, the numbers and the
            people behind them — and why I want to share what I find with anyone else
            who feels the same.
          </p>
          <p>
            India gets ranked, a lot. Some years it lands near the bottom of indices on
            hunger, press freedom, air quality or democracy; some years it dismisses the
            whole exercise. The rejections are usually reported as a fight, and the
            rankings as facts. Neither treatment helps a reader.
          </p>
          <p>
            This site takes each index seriously enough to explain it: who builds it,
            from what inputs, what it can and cannot see, and where its method breaks.
            Then it gives the Indian government's response in full, because a rejection
            is sometimes partisan noise and sometimes a real methodological objection,
            and the reader deserves to know which.
          </p>
          <p>
            The rules are simple. Every number carries a public source. Sources are open
            for anyone to check — but I am one person working with the help of AI, and
            not every source is independently verified. If you find an error, write to
            me and I will fix it: <a className="underline" href="mailto:me@probirsarkar.com">me@probirsarkar.com</a> or{" "}
            <a className="underline" href="https://www.linkedin.com/in/probir-sarkar" target="_blank" rel="noopener noreferrer">
              on LinkedIn
            </a>.
          </p>
          <p>
            This is a side project, not a business — no product, no paywall, no ads, and
            none of that ever. If you find it useful, you can{" "}
            <a className="underline text-saffron" href="/donate">help cover the costs</a>{" "}
            of the domain, the server and the research.
          </p>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
