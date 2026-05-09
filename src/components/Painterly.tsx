"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

interface PainterlyProps {
  src: string;
  alt: string;
  className?: string;
  parallax?: number;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
}

export function Painterly({
  src,
  alt,
  className,
  parallax = 60,
  priority,
  sizes = "(max-width:768px) 100vw, 50vw",
}: PainterlyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [parallax, -parallax]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden bg-canvas-deep frame-shadow", className)}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-[opacity,transform,filter] duration-[2000ms] ease-cinematic",
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]",
          )}
          onLoad={() => setLoaded(true)}
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, transparent 50%, rgba(42,38,34,0.18) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 mix-blend-multiply opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.16  0 0 0 0 0.14  0 0 0 0 0.12  0 0 0 0.5 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
