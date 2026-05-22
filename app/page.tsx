import Link from "next/link";
import { SITE } from "@/lib/site";

const sections = [
  {
    href: "/about",
    label: "About Us",
    description: "Meet the family behind Gigi Coons of Texas and our breeding philosophy.",
  },
  {
    href: "/maine-coon",
    label: "The Breed",
    description: "Learn about the magnificent Maine Coon — history, temperament, and care.",
  },
  {
    href: "/kittens",
    label: "Available Kittens",
    description: "Browse our current and upcoming litters and inquire about adoption.",
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Reach out with questions, or join our waitlist for a future kitten.",
  },
];

export default function HomePage() {
  return (
    <div className="container-content pt-16 md:pt-24 pb-24">
      <section className="text-center max-w-[780px] mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-text-secondary)] mb-5">
          Maine Coon Kittens · Texas
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.08] tracking-[-0.02em]">
          Gigi Coons
          <br />
          <span className="italic">of Texas</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl font-display italic text-[color:var(--color-text-secondary)]">
          {SITE.tagline}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/kittens" className="btn-solid">
            View Available Kittens
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </section>

      <div className="hairline my-16 md:my-20" />

      <section aria-label="Site sections">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[color:var(--color-border)]">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-[color:var(--color-background)] p-8 md:p-10 flex flex-col gap-3 hover:bg-[color:var(--color-background-alt)] transition-colors"
            >
              <h2 className="font-display text-2xl md:text-3xl group-hover:text-[color:var(--color-accent)] transition-colors">
                {s.label}
              </h2>
              <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed">
                {s.description}
              </p>
              <span className="mt-auto pt-2 text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
