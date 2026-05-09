"use client";

import { motion } from "framer-motion";

export function Marquee({
  items,
  duration = 50,
  className,
}: {
  items: string[];
  duration?: number;
  className?: string;
}) {
  const seq = [...items, ...items];
  return (
    <div
      aria-hidden
      className={`relative w-full overflow-hidden whitespace-nowrap ${className ?? ""}`}
    >
      <motion.div
        className="inline-flex gap-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {seq.map((s, i) => (
          <span key={i} className="inline-flex items-center gap-12">
            <span className="font-display italic text-ink/80">{s}</span>
            <span className="block h-1 w-1 rounded-full bg-ink/30" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
