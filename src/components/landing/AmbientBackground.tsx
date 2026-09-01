import { useEffect, useState } from "react";

const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 37) % 100,
  top: (i * 61) % 100,
  size: 1 + (i % 3),
  delay: (i % 11) * 1.4,
  duration: 18 + (i % 7) * 4,
}));

/** Cinematic layered background: gradient, grid, contours, fog, particles. */
export function AmbientBackground() {
  const [pointer, setPointer] = useState({ x: 50, y: 30 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setPointer({
          x: (e.clientX / window.innerWidth) * 100,
          y: (e.clientY / window.innerHeight) * 100,
        });
        frame = 0;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div
        className="animate-gradient absolute inset-0 opacity-90"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div className="grid-lines absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />

      {/* topographic contours */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <path
            key={i}
            d={`M-50 ${140 + i * 62} C 220 ${70 + i * 62}, 430 ${230 + i * 62}, 660 ${150 + i * 62} S 1050 ${60 + i * 62}, 1260 ${170 + i * 62}`}
            fill="none"
            stroke="var(--olive)"
            strokeWidth={i % 3 === 0 ? 1.2 : 0.6}
          />
        ))}
      </svg>

      {/* soft light ray */}
      <div className="absolute -top-1/3 left-1/2 h-[120vh] w-[60vw] -translate-x-1/2 rotate-12 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--brass)_10%,transparent),transparent_65%)] blur-3xl" />

      {/* fog */}
      <div className="animate-float-slow absolute bottom-0 left-0 h-1/2 w-full bg-[radial-gradient(ellipse_at_bottom,color-mix(in_oklab,var(--olive-deep)_45%,transparent),transparent_70%)] blur-2xl" />

      {/* particles */}
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite alternate`,
          }}
        />
      ))}

      {/* cursor-following light */}
      <div
        className="absolute h-[42rem] w-[42rem] rounded-full opacity-40 blur-3xl transition-transform duration-500 ease-out"
        style={{
          left: `calc(${pointer.x}% - 21rem)`,
          top: `calc(${pointer.y}% - 21rem)`,
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--olive) 14%, transparent), transparent 65%)",
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,color-mix(in_oklab,var(--background)_65%,transparent))]" />
    </div>
  );
}
