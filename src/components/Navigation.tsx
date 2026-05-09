"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Index" },
  { href: "/gallery", label: "Gallery" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/exhibitions", label: "Exhibitions" },
  { href: "/commissions", label: "Commissions" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[backdrop-filter,background-color,padding] duration-700 ease-cinematic",
        scrolled
          ? "py-4 backdrop-blur-md bg-canvas/70 border-b border-ink/10"
          : "py-7 bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-12">
        <Link href="/" className="group block">
          <span className="block font-display text-[22px] md:text-[26px] leading-none tracking-editorial italic">
            Zach <span className="not-italic">Shev</span>
          </span>
          <span className="mt-1 block font-sans text-[10px] tracking-widest uppercase text-ink-muted">
            Painter · Studio
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9 font-sans text-[12px] tracking-wide uppercase">
          {links.slice(1).map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "relative py-1 transition-colors duration-500",
                  active ? "text-ink" : "text-ink-muted hover:text-ink",
                )}
              >
                <span>{l.label}</span>
                <span
                  className={cn(
                    "absolute -bottom-0.5 left-0 right-0 h-px origin-left scale-x-0 bg-ink/60 transition-transform duration-700 ease-cinematic",
                    active ? "scale-x-100" : "group-hover:scale-x-100",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          className="lg:hidden flex flex-col items-end gap-1.5 py-2"
        >
          <span
            className={cn(
              "block h-px w-7 bg-ink transition-transform duration-500",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-ink transition-opacity duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-7 bg-ink transition-transform duration-500",
              open && "-translate-y-[5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden fixed inset-0 top-0 z-40 bg-canvas/95 backdrop-blur-xl pt-28 px-8"
          >
            <nav className="flex flex-col gap-6">
              {links.slice(1).map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={l.href}
                    className="block font-display text-5xl italic text-ink"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
