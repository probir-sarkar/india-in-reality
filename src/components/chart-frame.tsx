import { useEffect, useState, type ReactNode } from "react";
import { motion } from "motion/react";

/**
 * Chart frames: the frame, takeaway line and source footnote are
 * server-rendered; the chart itself mounts client-side (Recharts measures its
 * container in JS) and settles in with a short motion fade-rise.
 */
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <figure className="chart-frame my-8 overflow-hidden p-5">
      <figcaption>
        <p className="kicker">{title}</p>
        <p className="mt-1 font-serif text-lg leading-snug text-ink">{takeaway}</p>
      </figcaption>
      <div style={{ minHeight: height }} className="mt-4">
        {mounted ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ height }}
          >
            {children}
          </motion.div>
        ) : (
          <div style={{ height }} />
        )}
      </div>
      <p className="mt-3 text-xs text-faint">Source: {source}</p>
    </figure>
  );
}
