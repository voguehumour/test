"use client";

import { Gravity, MatterBody } from "@/components/Gravity";
import { cn } from "@/lib/utils";

type Chip = {
  label: string;
  x: string;
  y: number;
  angle?: number;
  variant: "skill" | "skillAccent" | "service";
};

// Smaller neutral chips for skills, larger accent chips for services.
const CHIPS: Chip[] = [
  // Services (accent, slightly larger)
  { label: "AI Strategy Consulting", x: "28%", y: -40, angle: -6, variant: "service" },
  { label: "Custom Model Development", x: "62%", y: -120, angle: 5, variant: "service" },
  { label: "AI Integration", x: "45%", y: -220, angle: -3, variant: "service" },
  { label: "Team Training", x: "18%", y: -300, angle: 8, variant: "service" },
  { label: "Proof-of-Concept Builds", x: "74%", y: -360, angle: -7, variant: "service" },

  // Skills (neutral / outline)
  { label: "LLM Strategy", x: "10%", y: 0, angle: 10, variant: "skillAccent" },
  { label: "RAG Pipelines", x: "38%", y: -60, angle: -10, variant: "skill" },
  { label: "Fine-Tuning", x: "55%", y: -10, angle: 4, variant: "skill" },
  { label: "Prompt Engineering", x: "80%", y: -40, angle: -8, variant: "skillAccent" },
  { label: "Agentic Workflows", x: "25%", y: -150, angle: 6, variant: "skill" },
  { label: "MLOps", x: "68%", y: -200, angle: -4, variant: "skill" },
  { label: "Data Strategy", x: "48%", y: -320, angle: 9, variant: "skillAccent" },
  { label: "Computer Vision", x: "85%", y: -260, angle: -6, variant: "skill" },
  { label: "NLP", x: "14%", y: -200, angle: 12, variant: "skill" },
  { label: "Python", x: "60%", y: -420, angle: -10, variant: "skill" },
  { label: "LangChain", x: "33%", y: -440, angle: 7, variant: "skillAccent" },
  { label: "Vector DBs", x: "78%", y: -480, angle: -5, variant: "skill" },
];

function chipClass(variant: Chip["variant"]) {
  switch (variant) {
    case "service":
      return "bg-accent text-bg border border-accent px-5 py-2.5 text-sm md:text-base font-medium shadow-[0_8px_30px_rgba(217,106,68,0.35)]";
    case "skillAccent":
      return "bg-accent/10 text-accent border border-accent/40 px-4 py-2 text-xs md:text-sm font-medium";
    default:
      return "bg-white/[0.04] text-fg border border-hairline px-4 py-2 text-xs md:text-sm font-medium";
  }
}

export default function SkillsPhysics() {
  return (
    <Gravity
      gravity={{ x: 0, y: 1 }}
      grabCursor
      addTopWall
      className="z-10"
    >
      {CHIPS.map((chip) => (
        <MatterBody
          key={chip.label}
          x={chip.x}
          y={chip.y}
          angle={chip.angle}
          matterBodyOptions={{
            friction: 0.4,
            restitution: 0.25,
            density: 0.002,
          }}
        >
          <div
            className={cn(
              "select-none whitespace-nowrap rounded-full backdrop-blur-sm",
              chipClass(chip.variant)
            )}
          >
            {chip.label}
          </div>
        </MatterBody>
      ))}
    </Gravity>
  );
}
