import { Shield } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Preparation", href: "#how-it-works" },
  { label: "Fitness", href: "#fitness" },
  { label: "AI Guidance", href: "#ai" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#about" },
];

export function Footer() {
  return (
    <footer className="hairline-top relative px-5 py-14 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10">
              <Shield className="h-4.5 w-4.5 text-primary" strokeWidth={1.6} />
            </span>
            <span className="font-display text-base tracking-[0.2em] uppercase">
              Army Prep <span className="text-accent">AI</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            AI-driven preparation and personalized guidance for defence aspirants.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="label-mono">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2.5">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-border pt-6">
        <p className="label-mono text-[0.65rem]">© 2026 Army Prep AI. Academic Project.</p>
      </div>
    </footer>
  );
}
