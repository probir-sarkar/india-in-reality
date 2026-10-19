import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { Header, Footer } from "@/components/chrome";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      {
        title: `About — ${SITE.name}`,
        description:
          "Why this site exists, how it works, and what it refuses to do.",
      },
    ],
  }),
});

function About() {
  return (
    <>
      <Header lang="en" />
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="kicker">About</p>
        <h1 className="mt-2 font-serif text-4xl">Rankings are arguments. Read the argument.</h1>
        <div className="prose-block mt-6 max-w-2xl text-[1.02rem] text-ink-soft">
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
            The rules are simple. Every number carries a public source. Criticisms of an
            index are stated with their source too, not absorbed as our own opinion.
            Stories from the ground come from named journalism. Where data is missing,
            missing is what we say.
          </p>
          <p>
            Nothing here is affiliated with any government, party or platform. It is one
            independent project, part of BrowserStay's family of small public-interest
            sites. Corrections: connect@browserstay.com.
          </p>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
