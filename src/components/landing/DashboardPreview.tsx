import { motion, useReducedMotion } from "framer-motion";
import { Bar, BarChart, Cell, ResponsiveContainer } from "recharts";
import { Reveal, MetricBar, SectionLabel } from "./primitives";

const TESTS = [
  { n: "T1", v: 52 },
  { n: "T2", v: 61 },
  { n: "T3", v: 58 },
  { n: "T4", v: 73 },
  { n: "T5", v: 79 },
  { n: "T6", v: 88 },
];

export function DashboardPreview() {
  const reduced = useReducedMotion();
  return (
    <section id="about" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Dashboard</SectionLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] font-semibold uppercase">
            Your personal <span className="text-brass-gradient">command center.</span>
          </h2>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: reduced ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 0.75, 0.2, 1] }}
          style={{ perspective: 1400 }}
          className="glass mt-14 rounded-2xl p-3 shadow-[var(--shadow-elevated)] sm:p-5"
        >
          <div className="mb-4 flex items-center gap-2 px-2">
            <span className="h-2 w-2 rounded-full bg-destructive/70" />
            <span className="h-2 w-2 rounded-full bg-accent/70" />
            <span className="h-2 w-2 rounded-full bg-primary/70" />
            <span className="label-mono ml-3">Aspirant Dashboard</span>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            <div className="glass-card rounded-xl p-6 md:row-span-2">
              <p className="label-mono">Preparation Score</p>
              <p className="font-display mt-1 text-5xl font-semibold text-accent">87%</p>
              <div className="mt-7 space-y-5">
                <MetricBar label="Today's Progress" value={64} />
                <MetricBar label="Fitness Progress" value={78} tone="brass" />
                <MetricBar label="Consistency" value={91} />
              </div>
              <div className="mt-7 rounded-lg border border-border p-4">
                <p className="label-mono text-accent">AI Recommendation</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Allocate 40 minutes to Mathematics today and keep your 12-day streak alive.
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <p className="label-mono">Study Streak</p>
              <p className="font-display mt-1 text-3xl">12 Days</p>
              <div className="mt-4 flex gap-1.5">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span
                    key={i}
                    className={`h-6 flex-1 rounded-sm ${i < 12 ? "bg-primary/70" : "bg-muted"}`}
                  />
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <p className="label-mono">Weak Subjects</p>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  ["Mathematics", "62%"],
                  ["General Science", "70%"],
                  ["English", "74%"],
                ].map(([s, v]) => (
                  <li key={s} className="flex justify-between text-muted-foreground">
                    <span>{s}</span>
                    <span className="font-mono text-foreground/80">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-6 md:col-span-2">
              <div className="flex items-center justify-between">
                <p className="label-mono">Mock Test Performance</p>
                <span className="label-mono text-primary">Last 6 tests</span>
              </div>
              <div className="mt-4 h-32 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={TESTS}>
                    <Bar dataKey="v" radius={[4, 4, 0, 0]}>
                      {TESTS.map((_, i) => (
                        <Cell
                          key={i}
                          fill={i === TESTS.length - 1 ? "var(--brass)" : "var(--olive)"}
                          fillOpacity={i === TESTS.length - 1 ? 1 : 0.45}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
