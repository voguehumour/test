"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { WORK } from "@/lib/work";
import CountUp from "@/components/CountUp";
import RevealText from "@/components/RevealText";
import { EASE_HOUSE } from "@/lib/motion";

function Slab({ study, index }: { study: (typeof WORK)[number]; index: number }) {
  const flip = index % 2 === 1;
  return (
    <Link
      href={`/work/${study.slug}`}
      data-cursor="link"
      data-cursor-label="open"
      className="group grid min-h-[100svh] grid-cols-12 items-center gap-[var(--gutter)] px-[var(--gutter)] py-24"
    >
      <div
        className={`col-span-12 md:col-span-6 ${flip ? "md:order-2" : ""}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <motion.img
            src={study.image}
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
            style={{
              viewTransitionName: `work-${study.slug}`,
              filter: "saturate(0.85)",
            }}
            initial={{ scale: 1, filter: "brightness(0.94) saturate(0.85)" }}
            whileHover={{
              scale: 1.03,
              filter: "brightness(1) saturate(0.9)",
              transition: { duration: 0.7, ease: EASE_HOUSE },
            }}
          />
        </div>
      </div>

      <div className={`col-span-12 md:col-span-6 ${flip ? "md:order-1" : ""}`}>
        <p className="font-mono text-step--1 text-fg-dim">
          {study.client} · {study.year}
        </p>
        <RevealText
          as="h3"
          lines={[study.title]}
          className="mt-3 font-serif text-step-3 leading-[1.02] tracking-tight"
        />
        <p className="mt-5 max-w-[46ch] text-fg-dim">{study.context}</p>
        <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
          {study.metrics.map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-step-2 text-fg">
                <CountUp value={m.value} />
              </dt>
              <dd className="font-mono text-step--1 text-fg-dim mt-1 max-w-[16ch]">
                {m.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Link>
  );
}

export default function SelectedWork() {
  return (
    <div className="px-[var(--gutter)] pt-24">
      <div className="grid grid-cols-12">
        <h2 className="col-span-12 md:col-span-8 font-mono text-step--1 tracking-widest uppercase text-fg-dim border-t border-hairline pt-4">
          Selected work — {WORK.length} of many
        </h2>
      </div>

      {WORK.map((s, i) => (
        <Slab key={s.slug} study={s} index={i} />
      ))}

      {/* TODO: third case study */}
      <div className="grid min-h-[60svh] grid-cols-12 items-center gap-[var(--gutter)]">
        <div className="col-span-12 md:col-span-6 md:col-start-4 text-center">
          <p className="font-serif text-step-2 text-fg-faint">
            A third story, when it&rsquo;s worth telling.
          </p>
          <p className="mt-3 font-mono text-step--1 text-fg-faint">
            {/* TODO: third case study */}
          </p>
        </div>
      </div>
    </div>
  );
}
