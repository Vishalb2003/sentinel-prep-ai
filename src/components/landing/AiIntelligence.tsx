import { Sparkles } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { MetricBar, Reveal, SectionLabel } from "./primitives";

const TREND = [
  { week: "W1", score: 54 },
  { week: "W2", score: 61 },
  { week: "W3", score: 58 },
  { week: "W4", score: 68 },
  { week: "W5", score: 75 },
  { week: "W6", score: 82 },
];

const RADAR = [
  { subject: "Reasoning", value: 86 },
  { subject: "Maths", value: 62 },
  { subject: "GK", value: 78 },
  { subject: "English", value: 74 },
  { subject: "Science", value: 70 },
  { subject: "Fitness", value: 74 },
];

export function AiIntelligence() {
  return (
    <section id="ai" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>AI Intelligence</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] font-semibold uppercase">
            Your preparation. <span className="text-brass-gradient">Understood by AI.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.25fr]">
          <Reveal className="h-full">
            <div className="glass-card h-full rounded-xl p-7">
              <p className="label-mono">Readiness Index</p>
              <p className="font-display mt-1 text-5xl font-semibold text-accent">82%</p>
              <div className="mt-8 space-y-6">
                <MetricBar label="Preparation Score" value={82} />
                <MetricBar label="Academic Performance" value={78} tone="brass" />
                <MetricBar label="Fitness Progress" value={74} />
                <MetricBar label="Consistency" value={91} tone="brass" />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.1}>
              <div className="glass-card rounded-xl p-7">
                <div className="flex items-center justify-between">
                  <p className="label-mono">Performance Trend</p>
                  <span className="label-mono text-primary">+28% / 6 weeks</span>
                </div>
                <div className="mt-5 h-52 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={TREND} margin={{ left: -28, right: 8, top: 8 }}>
                      <defs>
                        <linearGradient id="prepFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--olive)" stopOpacity={0.55} />
                          <stop offset="100%" stopColor="var(--olive)" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid stroke="var(--border)" vertical={false} />
                      <XAxis
                        dataKey="week"
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
                      />
                      <Tooltip
                        cursor={{ stroke: "var(--brass)", strokeOpacity: 0.3 }}
                        contentStyle={{
                          background: "var(--surface)",
                          border: "1px solid var(--border)",
                          borderRadius: 8,
                          color: "var(--foreground)",
                          fontSize: 12,
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="score"
                        stroke="var(--olive)"
                        strokeWidth={2}
                        fill="url(#prepFill)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              <Reveal delay={0.16}>
                <div className="glass-card h-full rounded-xl p-7">
                  <p className="label-mono">Subject Balance</p>
                  <div className="mt-2 h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={RADAR} outerRadius="72%">
                        <PolarGrid stroke="var(--border)" />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{ fill: "var(--muted-foreground)", fontSize: 10 }}
                        />
                        <Radar
                          dataKey="value"
                          stroke="var(--brass)"
                          fill="var(--brass)"
                          fillOpacity={0.22}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="glass-card relative h-full overflow-hidden rounded-xl p-7">
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" strokeWidth={1.6} />
                    <p className="label-mono text-accent">AI Insight</p>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-foreground/90">
                    “Your reasoning performance is improving. Mathematics requires additional
                    practice. Your preparation consistency has increased this week.”
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Focus: Mathematics", "Streak protected", "Pace improving"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-[0.7rem] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
