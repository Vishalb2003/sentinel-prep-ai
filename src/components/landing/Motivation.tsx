import { ArrowRight } from "lucide-react";
import bg from "@/assets/motivation-bg.jpg";
import { Reveal } from "./primitives";

export function Motivation() {
  return (
    <section className="relative isolate overflow-hidden py-32">
      <img
        src={bg}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,var(--background),transparent_35%,transparent_65%,var(--background))]" />
      <div className="grid-lines absolute inset-0 -z-10 opacity-30" />

      <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-[clamp(2rem,5.4vw,4rem)] leading-[1] font-semibold uppercase">
          Discipline creates <span className="text-brass-gradient">readiness.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Train consistently. Learn intelligently. Track your progress. Move closer to your goal.
        </p>
        <a
          href="#start"
          className="group mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-all duration-300 hover:shadow-[var(--glow-olive)] hover:brightness-110"
        >
          Start Preparing
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Reveal>
    </section>
  );
}
