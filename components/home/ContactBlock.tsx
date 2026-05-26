"use client";

import { motion } from "motion/react";
import ScrambleLink from "@/components/ScrambleLink";
import { EASE_HOUSE } from "@/lib/motion";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/in/" },
];

export default function ContactBlock() {
  return (
    <div className="px-[var(--gutter)] py-32">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: EASE_HOUSE }}
            className="font-serif text-step-3 leading-[1.1] tracking-tight max-w-[20ch]"
          >
            {/* TODO: voice */}
            Available Q3 2026 for a focused AI engagement — scoping, a
            prototype, and a team that can keep shipping.
          </motion.p>

          <div className="mt-10">
            <ScrambleLink
              href="mailto:[email protected]"
              text="[email protected]"
              className="font-mono text-step-1 text-fg transition-colors duration-200 hover:text-accent"
            />
          </div>

          <div className="mt-8 flex gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                data-cursor-label="open"
                className="font-mono text-step--1 text-fg-dim transition-colors duration-200 hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
