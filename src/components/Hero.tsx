"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Painterly } from "./Painterly";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 1], ["0px", "8px"]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--vh",
      `${window.innerHeight * 0.01}px`,
    );
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden pt-32"
    >
      <motion.div
        style={{ y, opacity, filter: blur }}
        className="relative z-10 mx-auto flex max-w-[1600px] flex-col px-6 md:px-12"
      >
        <div className="flex items-center justify-between">
          <div className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
            <span className="numeral">MMXXVI</span>
            <span className="mx-3">·</span>
            Antwerp
          </div>
          <div className="hidden md:flex items-center gap-3 font-sans text-[10px] uppercase tracking-widest text-ink-muted">
            <span className="block h-px w-12 bg-ink/30" />
            A living digital exhibition
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-6 gap-y-8">
          <div className="col-span-12 md:col-span-7">
            <h1 className="font-display text-[14vw] md:text-[10.5vw] leading-[0.86] tracking-[-0.02em] text-ink">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Quiet
                </motion.span>
              </span>
              <span className="block overflow-hidden italic">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
                  className="block"
                >
                  paintings,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.36 }}
                  className="block"
                >
                  long looking.
                </motion.span>
              </span>
            </h1>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-12 flex flex-col justify-end">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="font-serif text-base md:text-lg leading-[1.7] text-ink-soft max-w-md"
            >
              Zach Shev paints in oil — portraits, interiors, and the slow
              hours of light. The studio works with private collectors, museums,
              and a small number of galleries each year. What follows is a
              record of looking.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 1 }}
              className="mt-10 flex items-center gap-6"
            >
              <Link
                href="/gallery"
                data-cursor-label="View"
                className="group relative inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-widest text-ink"
              >
                <span className="block h-px w-10 bg-ink transition-all duration-700 group-hover:w-16" />
                Enter the gallery
              </Link>
              <Link
                href="/commissions"
                data-cursor-label="Enquire"
                className="font-sans text-[12px] uppercase tracking-widest text-ink-muted hover:text-ink transition-colors duration-700"
              >
                Commissions
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating composition */}
        <div className="relative mt-16 grid grid-cols-12 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="col-span-7 md:col-span-4 aspect-[3/4]"
          >
            <Painterly
              src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&fit=crop&w=1200&q=80"
              alt="Portrait study"
              parallax={40}
              priority
              className="h-full w-full"
              sizes="(max-width:768px) 60vw, 30vw"
            />
          </motion.div>
          <div className="col-span-5 md:col-span-4 hidden md:flex items-end">
            <div className="font-display italic text-2xl md:text-3xl leading-tight text-ink-soft max-w-xs">
              <span className="block text-ink-muted text-sm not-italic font-sans uppercase tracking-widest mb-4">
                I — From the studio
              </span>
              "I don't paint people, I paint the silence around them."
              <span className="mt-3 block text-sm not-italic font-sans uppercase tracking-widest text-ink-muted">
                — Z.S., October
              </span>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="col-span-12 md:col-span-4 aspect-[4/5] mt-12 md:mt-24"
          >
            <Painterly
              src="https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?auto=format&fit=crop&w=1200&q=80"
              alt="Landscape study"
              parallax={70}
              className="h-full w-full"
              sizes="(max-width:768px) 100vw, 30vw"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
          Continue
        </span>
        <motion.span
          animate={{ y: [0, 14, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="block h-12 w-px bg-ink/40"
        />
      </motion.div>
    </section>
  );
}
