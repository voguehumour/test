"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Category } from "./SkillsPhysics";

// Load the Matter.js physics canvas on the client only — Gravity pulls in
// svg-path-commander and poly-decomp, which expect a browser environment.
const SkillsPhysics = dynamic(() => import("./SkillsPhysics"), { ssr: false });

const TABS: { id: Category; label: string }[] = [
  { id: "core", label: "Core Capabilities" },
  { id: "stacks", label: "Tech Stacks" },
  { id: "services", label: "Services" },
];

export default function Skills() {
  const [tab, setTab] = useState<Category>("services");

  return (
    <section
      id="services"
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-white"
    >
      <h2 className="sr-only">Skills and Services</h2>

      {/* Category tabs */}
      <div className="z-20 flex items-center justify-center gap-4 px-5 pb-6 pt-28 sm:gap-8 md:pt-32">
        {TABS.map((t) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "font-mono text-[0.6rem] uppercase tracking-[0.2em] transition-colors sm:text-xs",
                active
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-600"
              )}
            >
              {active ? `( ${t.label} )` : t.label}
            </button>
          );
        })}
      </div>

      {/* Full-bleed physics playground. Remounting on tab change re-drops the chips. */}
      <div className="relative flex-1">
        <SkillsPhysics key={tab} category={tab} />
      </div>
    </section>
  );
}
