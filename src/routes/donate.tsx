import { createFileRoute } from "@tanstack/react-router";
import { Header, Footer } from "@/components/chrome";

export const Route = createFileRoute("/donate")({
  component: Donate,
  head: () => ({
    meta: [
      {
        title: "Support this project — India in Reality",
        description:
          "India in Reality is a free, non-commercial side project. Donations help cover the domain, server and research costs.",
      },
    ],
  }),
});

function Donate() {
  return (
    <>
      <Header lang="en" />
      <main className="mx-auto max-w-4xl px-5 py-14">
        <p className="kicker">Support</p>
        <h1 className="mt-2 font-serif text-4xl">Help keep this free</h1>
        <div className="prose-block mt-6 max-w-2xl text-[1.02rem] text-ink-soft">
          <p>
            India in Reality is a side project — one person, with AI's help, researching
            and writing in hours that come out of evenings and weekends. Everything on
            it is free: no paywall, no ads, no sponsored rankings, and none of that is
            ever planned.
          </p>
          <p>
            It still costs real money to run: the domain, the hosting, and the research
            subscriptions and time behind every cited figure. If the site has been
            useful to you, a small contribution towards those costs would genuinely
            help — and keep it independent, because readers, not advertisers, would be
            paying for it.
          </p>
        </div>

        <div className="chart-frame mt-8 max-w-xl p-6">
          <p className="kicker">UPI — India first</p>
          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <img
              src="/upi-qr.png"
              alt="UPI QR code — Probir Sarkar"
              width={200}
              className="rounded-md border border-line"
            />
            <div>
              <p className="text-sm text-ink-soft">
                Scan with any UPI app — PhonePe, GPay, Paytm — or send to the ID below:
              </p>
              <p className="mt-3 rounded-md bg-paper-2 px-4 py-3 font-mono text-lg font-semibold tracking-wide text-ink">
                probirsarkarjio@ybl
              </p>
            </div>
          </div>
        </div>

        <div className="prose-block mt-8 max-w-2xl text-[0.98rem] text-ink-soft">
          <p>
            Outside India?{" "}
            <a
              className="text-saffron underline"
              href="https://github.com/sponsors/probir-sarkar"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Sponsors
            </a>{" "}
            works with any card, or write to{" "}
            <a className="underline" href="mailto:me@probirsarkar.com">me@probirsarkar.com</a> and I will
            find a way.
          </p>
          <p className="text-sm">
            Where the money goes: domain and DNS (~₹2,000/year), hosting on Cloudflare,
            and research time. If donations ever exceed costs, they roll into keeping
            the site up longer — this is not a business, and it will not become one.
            Nothing on this site is sponsored, and no donor gets any influence over what
            is written.
          </p>
        </div>
      </main>
      <Footer lang="en" />
    </>
  );
}
