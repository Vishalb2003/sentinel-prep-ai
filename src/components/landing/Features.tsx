import { Activity, BarChart3, BrainCircuit, Compass, GraduationCap, Target } from "lucide-react";
import { Reveal, SectionLabel } from "./primitives";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Smart Preparation",
    text: "Structured learning resources and subject-wise preparation.",
  },
  {
    icon: Target,
    title: "Mock Assessment",
    text: "Practice examinations with automated scoring and performance analysis.",
  },
  {
    icon: BrainCircuit,
    title: "AI Performance Analysis",
    text: "Analyze your preparation patterns and identify areas that need improvement.",
  },
  {
    icon: Compass,
    title: "Personalized Guidance",
    text: "Receive intelligent recommendations based on your performance.",
  },
  {
    icon: Activity,
    title: "Fitness Progress",
    text: "Track your running and exercise progress and monitor preparation consistency.",
  },
  {
    icon: BarChart3,
    title: "Daily Progress",
    text: "Automatically track learning activity, completed topics and preparation streaks.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>Capabilities</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] font-semibold uppercase">
            One platform. <span className="text-brass-gradient">Complete preparation.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Everything you need to organize, evaluate and improve your recruitment preparation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06}>
              <article className="glass-card group h-full rounded-xl p-7">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary transition-colors duration-300 group-hover:border-accent/40 group-hover:text-accent">
                  <f.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-6 text-lg font-medium tracking-wide uppercase">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                <span className="label-mono mt-6 block text-[0.6rem] text-primary/60">
                  Module {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
