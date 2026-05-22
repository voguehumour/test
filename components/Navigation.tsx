"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/about", label: "About Us" },
  { href: "/maine-coon", label: "The Breed" },
  { href: "/kittens", label: "Available Kittens" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--color-border)] bg-[color:var(--color-background)]/92 backdrop-blur-md">
      <div className="container-content flex items-center justify-between gap-6 py-4 md:py-5">
        <Link href="/" aria-label="Gigi Coons of Texas — home" className="flex items-center">
          <span className="font-display text-xl tracking-[-0.01em]">
            Gigi Coons <span className="italic">of Texas</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-block py-1 transition-colors",
                      active
                        ? "text-[color:var(--color-text-primary)]"
                        : "text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)]",
                    )}
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute left-0 right-0 -bottom-0.5 h-px origin-left bg-current transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col items-end gap-1.5 p-2 -mr-2"
        >
          <span
            className={cn(
              "block h-px w-7 bg-[color:var(--color-text-primary)] transition-transform duration-300",
              open && "translate-y-[6px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-5 bg-[color:var(--color-text-primary)] transition-opacity duration-200",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-7 bg-[color:var(--color-text-primary)] transition-transform duration-300",
              open && "-translate-y-[5px] -rotate-45",
            )}
          />
        </button>
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        className={cn(
          "md:hidden fixed inset-0 top-[60px] z-30 bg-[color:var(--color-background)] transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full pointer-events-none",
        )}
      >
        <nav aria-label="Mobile" className="container-content py-10">
          <ul className="flex flex-col gap-6">
            {links.map((l) => {
              const active = isActive(pathname, l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block font-display italic text-3xl",
                      active
                        ? "text-[color:var(--color-text-primary)]"
                        : "text-[color:var(--color-text-secondary)]",
                    )}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function isActive(pathname: string | null, href: string) {
  if (!pathname) return false;
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}
