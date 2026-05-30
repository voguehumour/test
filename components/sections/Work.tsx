"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const PROJECTS = [
  {
    title: "Ledger Copilot",
    tag: "RAG · Fintech",
    blurb:
      "An agentic assistant that answers finance-ops questions over 12M documents with grounded citations. Cut research time by 70%.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
  },
  {
    title: "Atlas Search",
    tag: "Vector DB · Enterprise",
    blurb:
      "Semantic search across a sprawling knowledge base, fine-tuned embeddings and a reranker tuned for recall on long-tail queries.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Vision QC",
    tag: "Computer Vision · Manufacturing",
    blurb:
      "Real-time defect detection on the line. Edge-deployed model with a human-in-the-loop labelling flow that improves weekly.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
  },
  {
    title: "Forecast Engine",
    tag: "MLOps · Retail",
    blurb:
      "Demand forecasting pipeline with automated retraining, drift monitoring, and a dashboard the ops team actually opens.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
];

export default function Work() {
  return (
    <section
      id="work"
      className="relative w-full bg-bg px-5 py-24 sm:px-8 md:py-36"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                Selected work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-3 max-w-2xl font-display text-4xl font-semibold tracking-tight text-fg md:text-6xl">
                Case studies, not slideware.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} y={40}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                style={{ transformStyle: "preserve-3d", perspective: 1000 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-hairline bg-bg-raise"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover opacity-70 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-raise via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-hairline bg-bg/60 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-fg-dim backdrop-blur-md">
                    {p.tag}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-fg-dim">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm text-accent">
                    <span>View case study</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
