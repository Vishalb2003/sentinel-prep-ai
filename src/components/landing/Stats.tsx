import { Counter, Reveal } from "./primitives";

const STATS = [
  { to: 6, suffix: "+", label: "Preparation Modules" },
  { to: 1000, suffix: "+", label: "Practice Questions" },
  { to: 50, suffix: "+", label: "Mock Assessments" },
  { text: "24/7", label: "AI Guidance" },
];

export function Stats() {
  return (
    <section id="stats" className="relative px-5 py-16 sm:px-8">
      <div className="glass mx-auto grid max-w-7xl grid-cols-2 gap-y-10 rounded-xl px-6 py-10 md:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="border-border text-center md:not-last:border-r"
          >
            <p className="font-display text-4xl font-semibold text-accent sm:text-5xl">
              {s.text ?? <Counter to={s.to!} suffix={s.suffix} />}
            </p>
            <p className="label-mono mt-2">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
