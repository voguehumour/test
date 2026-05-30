"use client";

import dynamic from "next/dynamic";
import Reveal from "@/components/ui/Reveal";

// Load the Matter.js physics canvas on the client only — Gravity pulls in
// svg-path-commander and poly-decomp, which expect a browser environment.
const SkillsPhysics = dynamic(() => import("./SkillsPhysics"), {
  ssr: false,
});

export default function Skills() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden border-y border-hairline bg-bg py-20 md:py-28"
    >
      <div className="mx-auto mb-10 max-w-[1400px] px-5 sm:px-8 md:mb-14">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            What I bring
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-fg md:text-6xl">
            Skills &amp; Services
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-xl text-fg-dim">
            Grab them, throw them around. Everything I use to take an AI idea
            from a napkin sketch to something running in production.
          </p>
        </Reveal>
      </div>

      {/* Full-bleed physics playground */}
      <div className="relative h-[70vh] min-h-[520px] w-full">
        <SkillsPhysics />
      </div>
    </section>
  );
}
