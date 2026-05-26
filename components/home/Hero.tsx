"use client";

import { motion } from "motion/react";
import RevealText from "@/components/RevealText";
import { EASE_HOUSE } from "@/lib/motion";

export default function Hero() {
  return (
    <div className="relative min-h-[100svh] px-[var(--gutter)] pt-28 pb-16">
      {/* availability indicator — Animesh edits this line in code */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_HOUSE, delay: 0.2 }}
        className="absolute right-[var(--gutter)] top-28 flex items-center gap-2 font-mono text-step--1 text-fg-dim"
      >
        <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden />
        {/* TODO: voice */}
        available for new work — Q3 2026
      </motion.div>

      {/* network lives in the right two-thirds; this transparent region only
          exists to switch the cursor to its interactive state */}
      <div
        className="absolute right-0 top-0 h-full w-2/3 hidden md:block"
        data-cursor="network"
        aria-hidden
      />

      <div className="relative grid grid-cols-12 gap-[var(--gutter)] h-full">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center min-h-[70svh]">
          <RevealText
            as="h1"
            lines={["Animesh", "Jaiswal"]}
            className="font-serif text-step-5 leading-[0.92] tracking-tight"
          />
          <div className="mt-8 max-w-[44ch] space-y-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_HOUSE, delay: 0.35 }}
              className="font-mono text-step-0 text-fg"
            >
              {/* TODO: voice */}
              AI consultant — I help teams ship intelligent products that
              actually work.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_HOUSE, delay: 0.5 }}
              className="font-mono text-step--1 tracking-wide text-fg-dim lowercase"
            >
              also: product designer, creative engineer
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
