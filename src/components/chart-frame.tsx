import { useEffect, useState, type ReactNode } from "react";

/**
 * Recharts measures its container with a hidden clone, which renders nothing
 * useful during prerender. Charts mount client-side only; the frame, the
 * takeaway line and the source footnote stay server-rendered so the page is
 * never blank without JS.
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function ChartFrame({
  title,
  takeaway,
  source,
  children,
  height = 320,
}: {
  title: string;
  takeaway: string;
  source: string;
  children: ReactNode;
  height?: number;
}) {
  return (
    <figure className="chart-frame my-8 p-5">
      <figcaption>
        <p className="kicker">{title}</p>
        <p className="mt-1 font-serif text-lg leading-snug text-ink">{takeaway}</p>
      </figcaption>
      <div style={{ height }} className="mt-4">
        {useMounted() ? (
          children
        ) : (
          <p className="pt-16 text-center text-sm text-faint">Loading chart…</p>
        )}
      </div>
      <p className="mt-3 text-xs text-faint">Source: {source}</p>
    </figure>
  );
}
