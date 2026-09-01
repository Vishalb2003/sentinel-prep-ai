import { useEffect, useState } from "react";
import { Menu, Shield, X } from "lucide-react";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Preparation", href: "#how-it-works" },
  { label: "Fitness", href: "#fitness" },
  { label: "AI Guidance", href: "#ai" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass border-b border-border py-3" : "border-b border-transparent py-5",
      )}
    >
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-md border border-primary/40 bg-primary/10">
            <Shield className="h-4.5 w-4.5 text-primary" strokeWidth={1.6} />
            <span className="animate-pulse-ring absolute inset-0 rounded-md border border-primary/40" />
          </span>
          <span className="font-display text-base tracking-[0.2em] uppercase">
            Army Prep <span className="text-accent">AI</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#ai"
            className="rounded-md px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Login
          </a>
          <a
            href="#start"
            className="rounded-md border border-accent/40 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-[var(--glow-olive)]"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-border p-2 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass mt-3 lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-3">
              <a
                href="#start"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md border border-accent/40 bg-accent/10 px-4 py-2.5 text-center text-sm font-medium text-accent"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
