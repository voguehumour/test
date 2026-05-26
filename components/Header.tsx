"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header
      className="fixed top-0 left-0 right-0 flex items-center justify-between px-[var(--gutter)] py-4 mix-blend-difference"
      style={{ zIndex: "var(--z-header)" as unknown as number }}
    >
      <Link
        href="/"
        data-cursor="link"
        data-cursor-label="home"
        className="font-mono text-step--1 tracking-tight text-fg"
        style={{ viewTransitionName: "wordmark" }}
      >
        AJ<span className="text-accent">.</span>
      </Link>

      <nav className="flex items-center gap-5">
        {NAV.map((n) => {
          const active = pathname.startsWith(n.href);
          return (
            <Link
              key={n.href}
              href={n.href}
              data-cursor="link"
              data-cursor-label="view"
              className="font-mono text-step--1 tracking-wide transition-colors duration-200"
              style={{ color: active ? "var(--accent)" : "var(--fg)" }}
            >
              {n.label}
            </Link>
          );
        })}
        <ThemeToggle />
      </nav>
    </header>
  );
}
