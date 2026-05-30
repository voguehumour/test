"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Diagnose",
    body: "We map your goals, data, and constraints. I tell you honestly where AI helps — and where it doesn't.",
  },
  {
    n: "02",
    title: "Prototype",
    body: "A working proof-of-concept in weeks, not quarters. Real data, real outputs, something you can put in front of users.",
  },
  {
    n: "03",
    title: "Productionize",
    body: "Harden it: evals, guardrails, monitoring, and MLOps so the system stays reliable when it leaves the lab.",
  },
  {
    n: "04",
    title: "Enable",
    body: "Hand over clean docs and train your team, so you own the system long after I'm gone.",
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-bg px-5 py-24 sm:px-8 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            How I work
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-fg md:text-6xl">
            A clear path from idea to impact.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08}>
              <div className="group relative h-full bg-bg p-7 md:p-8">
                <motion.div
                  className="absolute left-0 top-0 h-px w-0 bg-accent group-hover:w-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <span className="font-mono text-sm text-accent">{step.n}</span>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-dim">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
