"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: "8+", label: "Years in ML / AI" },
  { value: "40+", label: "Models shipped" },
  { value: "20+", label: "Teams advised" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-bg px-5 py-24 sm:px-8 md:py-36"
    >
      <div className="mx-auto grid max-w-[1400px] gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        {/* Portrait placeholder */}
        <Reveal y={40}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-hairline bg-bg-raise">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-[6rem] font-semibold text-fg/10 md:text-[8rem]">
                AJ
              </span>
            </div>
            <motion.div
              aria-hidden
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="absolute bottom-4 left-4 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-fg-faint">
              Animesh Jaiswal
            </div>
          </div>
        </Reveal>

        {/* Bio */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
              About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-fg md:text-5xl">
              I help companies turn AI hype into systems that ship.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg-dim">
              I&apos;m Animesh — an AI consultant who sits between strategy and
              engineering. I&apos;ve spent the last several years helping
              startups and enterprises figure out where AI actually moves the
              needle, then building the thing: RAG systems, fine-tuned models,
              agentic workflows, and the MLOps to keep them alive.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 max-w-xl leading-relaxed text-fg-dim">
              No buzzword theatre. Just clear thinking, honest scoping, and
              software that earns its place in production.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-hairline pt-8">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-3xl font-semibold text-fg md:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-fg-faint">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
