import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import helmet from "@/assets/hero-helmet.png";

const FLOATING = [
  { label: "Preparation Score", value: "87%", pos: "left-0 top-8", delay: 0.5 },
  { label: "Study Streak", value: "12 Days", pos: "right-0 top-28", delay: 0.7 },
  { label: "Fitness Progress", value: "78%", pos: "left-2 bottom-24", delay: 0.9 },
  { label: "AI Readiness", value: "82%", pos: "right-2 bottom-6", delay: 1.1 },
];

export function Hero() {
  const reduced = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduced || window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: PointerEvent) => {
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 14,
        y: (e.clientY / window.innerHeight - 0.5) * -10,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduced]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32 pb-24 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            <span className="label-mono text-foreground/80">
              AI-Powered • Smart Analytics • Personalized Preparation
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-8 text-[clamp(2.4rem,6.2vw,4.6rem)] leading-[0.98] font-semibold tracking-tight uppercase"
          >
            Prepare with purpose.
            <br />
            <span className="text-brass-gradient">Serve with pride.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-xl text-base font-medium text-foreground/85 sm:text-lg"
          >
            AI-Driven Army Recruitment Preparation and Personalized Guidance System
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            An intelligent preparation platform that combines personalized learning, mock
            assessments, performance analytics and fitness progress tracking to help defence
            aspirants prepare systematically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap gap-4"
            id="start"
          >
            <a
              href="#how-it-works"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-all duration-300 hover:shadow-[var(--glow-olive)] hover:brightness-110"
            >
              Start Your Preparation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/40 px-6 py-3.5 text-sm font-semibold tracking-wide uppercase backdrop-blur transition-all duration-300 hover:border-accent/50 hover:text-accent"
            >
              Explore Features
            </a>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
          <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--olive)_22%,transparent),transparent_65%)] blur-2xl" />
          <div className="animate-sweep absolute inset-[6%] rounded-full border border-dashed border-primary/25" />
          <div className="absolute inset-[16%] rounded-full border border-accent/20" />
          <div className="animate-pulse-ring absolute inset-[24%] rounded-full border border-primary/30" />

          <motion.img
            src={helmet}
            alt="3D render of a modern military helmet with holographic data overlay"
            width={1024}
            height={1024}
            className="animate-float-slow absolute inset-[12%] h-[76%] w-[76%] object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
            style={{
              transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            }}
            animate={reduced ? undefined : { opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />

          {FLOATING.map((c) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: c.delay }}
              className={`glass absolute ${c.pos} rounded-lg px-3.5 py-2.5 shadow-[var(--shadow-elevated)]`}
            >
              <p className="label-mono text-[0.6rem]">{c.label}</p>
              <p className="font-display text-lg text-accent">{c.value}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <a
        href="#stats"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-accent sm:flex"
      >
        <span className="label-mono">Scroll to begin your journey</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
