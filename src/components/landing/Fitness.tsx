import { Footprints, MapPin, Smartphone, TrendingUp, Timer } from "lucide-react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import { Reveal, SectionLabel } from "./primitives";

const RUN = [
  { d: 1, v: 22 },
  { d: 2, v: 34 },
  { d: 3, v: 28 },
  { d: 4, v: 44 },
  { d: 5, v: 38 },
  { d: 6, v: 56 },
  { d: 7, v: 62 },
];

const METRICS = [
  { icon: MapPin, label: "Distance", value: "3.4 KM" },
  { icon: Timer, label: "Duration", value: "22:18" },
  { icon: Footprints, label: "Average Pace", value: "6:33 / KM" },
  { icon: TrendingUp, label: "Weekly Progress", value: "+18%" },
];

export function Fitness() {
  return (
    <section id="fitness" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <SectionLabel>Fitness</SectionLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] font-semibold uppercase">
            Build the discipline.
            <br />
            <span className="text-brass-gradient">Track the progress.</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Running sessions are tracked with your phone’s GPS — no smartwatch or additional IoT
            device required. The platform focuses on general fitness preparation and consistency,
            not medical assessment.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
            <Smartphone className="h-4 w-4 text-primary" strokeWidth={1.6} />
            Phone-based GPS run tracking, weekly targets and streaks.
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4">
            {METRICS.map((m, i) => (
              <Reveal key={m.label} delay={0.08 * i}>
                <div className="glass-card rounded-xl p-5">
                  <m.icon className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  <p className="label-mono mt-3">{m.label}</p>
                  <p className="font-display mt-1 text-2xl text-foreground">{m.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mx-auto aspect-square w-full max-w-lg">
            <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--olive)_18%,transparent),transparent_65%)] blur-2xl" />
            <div className="animate-sweep absolute inset-4 rounded-full border border-dashed border-primary/20" />
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full -rotate-90">
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="var(--muted)"
                strokeWidth="8"
              />
              <circle
                cx="100"
                cy="100"
                r="78"
                fill="none"
                stroke="var(--brass)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 78}
                strokeDashoffset={2 * Math.PI * 78 * 0.26}
                className="[transition:stroke-dashoffset_1.6s_ease]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="label-mono">Weekly Target</p>
              <p className="font-display text-6xl font-semibold text-accent">74%</p>
              <p className="mt-1 text-xs text-muted-foreground">18.5 / 25 KM completed</p>
              <div className="mt-6 h-16 w-40">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={RUN}>
                    <Line
                      type="monotone"
                      dataKey="v"
                      stroke="var(--olive)"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
