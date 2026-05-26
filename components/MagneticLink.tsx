"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useSpring } from "motion/react";

type Props = {
  href: string;
  label?: string; // cursor label, e.g. "view", "read", "open"
  className?: string;
  radius?: number;
  children: React.ReactNode;
};

// Felt, not seen: a 28px magnetic radius with a soft lerp toward the cursor.
export default function MagneticLink({
  href,
  label = "open",
  className,
  radius = 28,
  children,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.6 });

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    if (Math.hypot(dx, dy) < radius + Math.max(r.width, r.height) / 2) {
      x.set(dx * 0.18);
      y.set(dy * 0.18);
    }
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      style={{ x, y, display: "inline-block" }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <Link
        ref={ref}
        href={href}
        className={className}
        data-cursor="link"
        data-cursor-label={label}
      >
        {children}
      </Link>
    </motion.span>
  );
}
