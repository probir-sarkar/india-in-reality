import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  Cell,
  LabelList,
} from "recharts";
import type { PeerPoint, TrendPoint } from "@/data/types";

const INK = "#1b2631";
const SAFFRON = "#c96f2e";
const MUTED = "#8494a1";

export function TrendChart({
  points,
  unit,
  color = SAFFRON,
}: {
  points: TrendPoint[];
  unit: string;
  color?: string;
}) {
  const data = points.map((p) => ({ ...p, label: String(p.year) }));
  const values = points.map((p) => p.value);
  const pad = Math.max((Math.max(...values) - Math.min(...values)) * 0.15, 0.5);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 12, right: 24, bottom: 4, left: 0 }}>
        <CartesianGrid stroke="#eee8db" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fill: MUTED, fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "#ddd6c8" }}
        />
        <YAxis
          domain={[Math.max(0, Math.min(...values) - pad), Math.max(...values) + pad]}
          tick={{ fill: MUTED, fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          width={56}
          unit={unit}
        />
        <Tooltip
          contentStyle={{
            border: "1px solid #ddd6c8",
            borderRadius: 8,
            fontSize: 13,
            background: "#fffdf8",
          }}
          formatter={(v) => [`${String(v)}${unit}`, ""]}
          labelStyle={{ color: INK, fontWeight: 600 }}
        />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2.5}
          dot={{ r: 4, fill: color }}
          activeDot={{ r: 6 }}
          isAnimationActive={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function PeerChart({
  points,
  unit,
  highlight = "India",
  lowerIsBetter = false,
}: {
  points: PeerPoint[];
  unit: string;
  highlight?: string;
  lowerIsBetter?: boolean;
}) {
  const data = [...points].sort((a, b) =>
    lowerIsBetter ? b.value - a.value : a.value - b.value,
  );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 90, bottom: 4, left: 0 }}>
        <XAxis type="number" hide />
        <YAxis
          type="category"
          dataKey="country"
          width={110}
          tick={{ fill: INK, fontSize: 13 }}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip
          contentStyle={{
            border: "1px solid #ddd6c8",
            borderRadius: 8,
            fontSize: 13,
            background: "#fffdf8",
          }}
          formatter={(v, _n, item) => [
            `${String(v)}${unit} (${(item as unknown as { payload: PeerPoint }).payload.year})`,
            "",
          ]}
        />
        <Bar dataKey="value" barSize={18} isAnimationActive={false}>
          {data.map((p) => (
            <Cell key={p.country} fill={p.country === highlight ? SAFFRON : "#d8d1c2"} />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            formatter={(v) => `${String(v)}${unit}`}
            style={{ fill: INK, fontSize: 12 }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
