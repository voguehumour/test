"use client";

import { motion } from "motion/react";
import RevealText from "@/components/RevealText";
import { EASE_HOUSE } from "@/lib/motion";

// Three principles. Not icons, not numbered cards — three paragraphs, each
// headed by a short display-serif phrase. {/* TODO: voice */}
const PRINCIPLES = [
  {
    head: "Start with the boring outcome",
    body: "The interesting demo and the useful product are rarely the same thing. I start by finding the unglamorous number a team actually needs to move, then work backward to the smallest model that moves it. Most of the value is in the scoping, before a line of code.",
  },
  {
    head: "Prototype before deck",
    body: "A working prototype settles arguments a slide deck only starts. I'd rather hand you something you can click on by Friday than a roadmap you have to imagine. Building it myself means the strategy and the thing stay honest with each other.",
  },
  {
    head: "Leave the team smarter",
    body: "The engagement that ends with a dependency on me failed. I write the prompts, the evals, and the docs so your team can keep shipping after I'm gone — and I'd rather teach the judgment than hand over a black box.",
  },
];

export default function HowIWork() {
  return (
    <div className="px-[var(--gutter)] py-24">
      <h2 className="font-mono text-step--1 tracking-widest uppercase text-fg-dim border-t border-hairline pt-4 mb-16">
        How I work
      </h2>
      <div className="grid grid-cols-12 gap-y-20">
        {PRINCIPLES.map((p, i) => (
          <div
            key={p.head}
            className="col-span-12 md:col-span-10 lg:col-span-8 lg:col-start-3 grid grid-cols-1 md:grid-cols-12 gap-[var(--gutter)]"
          >
            <RevealText
              as="h3"
              lines={[p.head]}
              className="md:col-span-5 font-serif text-step-2 leading-[1.05] tracking-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE_HOUSE, delay: 0.1 }}
              className="md:col-span-7 text-fg-dim max-w-[52ch]"
            >
              {p.body}
            </motion.p>
          </div>
        ))}
      </div>
    </div>
  );
}
