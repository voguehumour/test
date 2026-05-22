import type { Metadata } from "next";
import Link from "next/link";
import { KittenCard } from "@/components/KittenCard";
import { KITTENS } from "@/lib/kittens-data";

export const metadata: Metadata = {
  title: "Available Kittens",
  description:
    "Browse available Maine Coon kittens from Gigi Coons of Texas. TICA-registered, health tested, and raised with love in a family home.",
};

const available = KITTENS.filter((k) => k.status !== "Sold");

export default function KittensPage() {
  return (
    <div className="container-content pt-10 md:pt-14 pb-24">
      <header className="mb-10 md:mb-14 max-w-[640px]">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-text-secondary)] mb-3">
          Current Litter
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.1]">
          Available Kittens
        </h1>
        <p className="mt-4 text-[color:var(--color-text-secondary)] leading-relaxed max-w-[520px]">
          All kittens are TICA registered, health tested, fully vaccinated, and
          raised underfoot in our family home. They go home at 12–16 weeks.
        </p>
      </header>

      {available.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {available.map((kitten) => (
            <KittenCard key={kitten.id} kitten={kitten} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-[color:var(--color-border)] bg-[color:var(--color-background-alt)]">
          <p className="font-display italic text-2xl text-[color:var(--color-text-secondary)]">
            No kittens available at this time.
          </p>
          <p className="mt-3 text-sm text-[color:var(--color-text-secondary)]">
            Join our waitlist and be the first to know about upcoming litters.
          </p>
          <div className="mt-8">
            <Link href="/contact?subject=Waitlist Inquiry" className="btn-solid">
              Join the Waitlist
            </Link>
          </div>
        </div>
      )}

      <div className="hairline mt-16 md:mt-20 mb-10" />

      <div className="max-w-[560px] mx-auto text-center">
        <h2 className="font-display text-2xl md:text-3xl mb-4">
          Interested in a future kitten?
        </h2>
        <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed mb-6">
          Our waiting list fills quickly. Reach out early to reserve your place
          and receive updates on upcoming litters.
        </p>
        <Link href="/contact?subject=Waitlist Inquiry" className="btn-outline">
          Join the Waitlist
        </Link>
      </div>
    </div>
  );
}
