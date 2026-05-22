import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-border)] mt-24">
      <div className="container-content py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <span className="font-display text-lg">
            Gigi Coons <span className="italic">of Texas</span>
          </span>
          <p className="text-xs text-[color:var(--color-text-secondary)] mt-1 uppercase tracking-[0.1em]">
            Texas · TICA Registered
          </p>
        </div>

        <p className="text-sm text-[color:var(--color-text-secondary)]">
          © {year} {SITE.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-6 text-sm">
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors"
          >
            Instagram
          </a>
          <Link
            href={`mailto:${SITE.email}`}
            className="text-[color:var(--color-text-secondary)] hover:text-[color:var(--color-text-primary)] transition-colors"
          >
            {SITE.email}
          </Link>
        </div>
      </div>
    </footer>
  );
}
