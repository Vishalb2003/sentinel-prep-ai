import { motion } from "framer-motion";
import { Reveal, SectionLabel } from "./primitives";

const STEPS = [
  { n: "01", title: "Create Profile", text: "Set up your recruitment preparation profile." },
  { n: "02", title: "Prepare", text: "Study subjects and complete practice activities." },
  { n: "03", title: "Get Analyzed", text: "The system evaluates your performance automatically." },
  { n: "04", title: "Improve", text: "Receive personalized recommendations and track progress." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionLabel>How it works</SectionLabel>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3.1rem)] leading-[1.05] font-semibold uppercase">
            A disciplined <span className="text-brass-gradient">preparation loop.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-border lg:block" />
          <motion.div
            className="absolute top-6 left-0 hidden h-px bg-gradient-to-r from-primary to-accent lg:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
          <ol className="grid gap-10 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.15}>
                <li className="relative lg:pr-8">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-background font-mono text-sm text-accent">
                    {s.n}
                  </span>
                  <h3 className="mt-6 text-lg tracking-wide uppercase">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
