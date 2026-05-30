"use client";

import { Gravity, MatterBody } from "@/components/Gravity";
import { cn } from "@/lib/utils";

export type Category = "core" | "stacks" | "services";

// Reference palette: periwinkle, pink, teal-green, grey, amber-orange.
const COLORS = ["#7c83f3", "#f3a0c0", "#3aa991", "#c6c6c6", "#f0a868"];

type Item = { label: string; emoji?: boolean };

const DATA: Record<Category, Item[]> = {
  core: [
    { label: "LLM Strategy" },
    { label: "RAG Pipelines" },
    { label: "Fine-Tuning" },
    { label: "Prompt Engineering" },
    { label: "Agentic Workflows" },
    { label: "MLOps" },
    { label: "Data Strategy" },
    { label: "Computer Vision" },
    { label: "NLP" },
    { label: "🧠", emoji: true },
    { label: "🤖", emoji: true },
    { label: "🔮", emoji: true },
    { label: "⚙️", emoji: true },
  ],
  stacks: [
    { label: "Python" },
    { label: "LangChain" },
    { label: "Vector DBs" },
    { label: "PyTorch" },
    { label: "Hugging Face" },
    { label: "OpenAI" },
    { label: "LlamaIndex" },
    { label: "Pinecone" },
    { label: "Docker" },
    { label: "🐍", emoji: true },
    { label: "⚡", emoji: true },
    { label: "🦜", emoji: true },
    { label: "🤗", emoji: true },
  ],
  services: [
    { label: "AI Strategy Consulting" },
    { label: "Custom Model Development" },
    { label: "AI Integration" },
    { label: "Team Training" },
    { label: "Proof-of-Concept Builds" },
    { label: "AI Audits" },
    { label: "Model Evaluation" },
    { label: "Workshops" },
    { label: "🚀", emoji: true },
    { label: "🎯", emoji: true },
    { label: "✨", emoji: true },
    { label: "👨‍💻", emoji: true },
    { label: "👀", emoji: true },
  ],
};

// Spread starting positions across the upper area; chips fall and pile up.
const XS = ["8%", "22%", "36%", "50%", "64%", "78%", "92%", "15%", "30%", "45%", "60%", "75%", "88%"];

function layout(i: number) {
  return {
    x: XS[i % XS.length],
    y: 20 + ((i * 53) % 340),
    angle: ((i * 37) % 24) - 12,
  };
}

export default function SkillsPhysics({ category }: { category: Category }) {
  const items = DATA[category];

  return (
    <Gravity gravity={{ x: 0, y: 1 }} grabCursor addTopWall className="z-10">
      {items.map((item, i) => {
        const color = COLORS[i % COLORS.length];
        const { x, y, angle } = layout(i);

        return (
          <MatterBody
            key={`${category}-${item.label}`}
            x={x}
            y={y}
            angle={angle}
            bodyType={item.emoji ? "circle" : "rectangle"}
            matterBodyOptions={{ friction: 0.4, restitution: 0.3, density: 0.002 }}
          >
            {item.emoji ? (
              <div
                className="flex h-12 w-12 select-none items-center justify-center rounded-full text-2xl shadow-md md:h-16 md:w-16 md:text-3xl"
                style={{ backgroundColor: color }}
              >
                {item.label}
              </div>
            ) : (
              <div
                className="select-none whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium text-white shadow-md sm:px-5 sm:py-2.5 sm:text-xl md:px-7 md:py-3 md:text-3xl"
                style={{ backgroundColor: color }}
              >
                {item.label}
              </div>
            )}
          </MatterBody>
        );
      })}
    </Gravity>
  );
}
