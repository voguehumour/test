"use client";

import { motion } from "motion/react";
import { EASE_HOUSE } from "@/lib/motion";

type Props = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
};

// Display headlines reveal via line-mask: overflow-hidden, translateY from
// ~110%, staggered 80ms per line. Never a letter-scramble or typewriter.
export default function RevealText({
  lines,
  as = "h2",
  className,
  delay = 0,
}: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px" }}
      aria-label={lines.join(" ")}
    >
      {lines.map((line, i) => (
        <span key={i} className="line-mask" aria-hidden>
          <motion.span
            variants={{
              hidden: { y: "110%" },
              show: {
                y: 0,
                transition: {
                  duration: 0.7,
                  ease: EASE_HOUSE,
                  delay: delay + i * 0.08,
                },
              },
            }}
            style={{ display: "block" }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
