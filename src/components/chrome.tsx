import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-4">
        <a href="/" className="no-underline">
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-faint">
            {SITE.name}
          </span>
        </a>
        <nav className="flex gap-5 text-sm text-ink-soft">
          <a href="/" className="no-underline hover:text-ink">Indexes</a>
          <a href="/about" className="no-underline hover:text-ink">About</a>
          <a href="/sources" className="no-underline hover:text-ink">Sources</a>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="rule mt-20">
      <div className="mx-auto max-w-4xl px-5 py-10 text-sm text-faint">
        <p>
          {SITE.name} — {SITE.tagline}. Every figure on this site carries a public
          source; see <a href="/sources" className="text-saffron underline">the bibliography</a>.
        </p>
        <p className="mt-2">
          Part of <a href="https://browserstay.com/" className="underline">BrowserStay</a>
          {" · "}
          <a href="mailto:connect@browserstay.com" className="underline">connect@browserstay.com</a>
        </p>
      </div>
    </footer>
  );
}
