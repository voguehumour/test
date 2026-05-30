"use client";

import Reveal from "@/components/ui/Reveal";

const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "X / Twitter", href: "https://x.com" },
];

const EMAIL = "hello@animeshjaiswal.com";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden border-t border-hairline bg-bg px-5 py-24 sm:px-8 md:py-36"
    >
      {/* Ambient accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            Let&apos;s build
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-fg md:text-8xl">
            Have an AI idea worth shipping?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="rounded-full bg-accent px-8 py-4 text-base font-medium text-bg transition-transform hover:scale-[1.03]"
            >
              Book a Consultation
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="group inline-flex items-center gap-2 text-lg text-fg-dim transition-colors hover:text-fg"
            >
              <span className="border-b border-hairline pb-0.5 group-hover:border-accent">
                {EMAIL}
              </span>
            </a>
          </div>
        </Reveal>

        <div className="mt-20 flex flex-col gap-6 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold text-fg">
              Animesh Jaiswal
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-accent">
              AI Consultant
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-fg-dim transition-colors hover:text-fg"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-fg-faint">
            © {new Date().getFullYear()} Animesh Jaiswal
          </p>
        </div>
      </div>
    </footer>
  );
}
