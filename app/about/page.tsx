import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the family behind Gigi Coons of Texas — a TICA-registered Maine Coon cattery dedicated to health, temperament, and breed quality.",
};

const pillars = [
  {
    title: "Health First",
    body: "All of our breeding cats are health tested for HCM, SMA, PKDef, and other heritable conditions. Kittens come with a health guarantee, are fully vaccinated, and receive a veterinary exam before going home.",
  },
  {
    title: "TICA Registered",
    body: "We are a registered cattery with The International Cat Association (TICA). Every kitten comes with full pedigree documentation confirming their lineage and breed authenticity.",
  },
  {
    title: "Raised with Love",
    body: "Our kittens are raised underfoot in our home — not in cages. From birth they are handled daily, exposed to household sounds and activity, and socialized with children and other animals.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-content pt-10 md:pt-14 pb-24">
      <header className="mb-12 md:mb-16 max-w-[640px]">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-text-secondary)] mb-3">
          Our Story
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.1]">
          About Gigi Coons
          <br />
          <span className="italic">of Texas</span>
        </h1>
        <p className="mt-5 text-lg text-[color:var(--color-text-secondary)] font-display italic">
          A family cattery rooted in a love for the Maine Coon breed.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
        <div className="md:col-span-7 space-y-5 text-[17px] leading-[1.75] text-[color:var(--color-text-primary)]">
          <p>
            Gigi Coons of Texas was born out of a lifelong passion for Maine Coons —
            the gentle giants of the cat world. Our cattery is named after our beloved
            foundation queen, Gigi, whose extraordinary temperament and beauty set the
            standard for everything we strive to produce.
          </p>
          <p>
            We are a small, family-owned cattery based in Texas. We believe deeply that
            the best kittens come from cats who are raised as part of the family — not
            in cages, but in our home, socializing with children, other animals, and
            the full rhythm of everyday life. Our kittens are confident, affectionate,
            and ready to thrive in any loving home.
          </p>
          <p>
            Every breeding decision we make is guided by one principle: producing
            kittens that are healthy, well-tempered, and true to the breed standard.
            We are proud to be TICA registered and committed to the continuous
            improvement of the Maine Coon breed.
          </p>
        </div>

        <div className="md:col-span-5">
          <div
            className="w-full bg-[color:var(--color-background-alt)] border border-[color:var(--color-border)] flex items-center justify-center text-[color:var(--color-text-secondary)]"
            style={{ aspectRatio: "4 / 5" }}
            aria-hidden
          >
            <span className="text-sm uppercase tracking-[0.1em]">Photo coming soon</span>
          </div>
        </div>
      </div>

      <div className="hairline mb-16 md:mb-20" />

      <section aria-label="Our commitments" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
        {pillars.map((p) => (
          <div key={p.title} className="space-y-3">
            <h2 className="font-display text-xl">{p.title}</h2>
            <p className="text-sm text-[color:var(--color-text-secondary)] leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </section>

      <div className="hairline mb-16 md:mb-20" />

      <section className="max-w-[640px]">
        <h2 className="font-display text-2xl md:text-3xl mb-5">What to Expect</h2>
        <div className="space-y-4 text-[17px] leading-[1.75]">
          <p>
            When you adopt a kitten from Gigi Coons of Texas, you become part of our
            extended family. We are here to answer questions before, during, and long
            after your kitten comes home. We carefully screen all prospective families
            to ensure each kitten is placed in a loving, indoor-only home.
          </p>
          <p>
            Kittens go home at 12–16 weeks of age, after they are fully weaned, litter
            trained, vaccinated, and have received their initial veterinary exam. We
            provide a kitten care packet with feeding guidelines, health records, and
            resources for your new family member.
          </p>
        </div>
        <div className="mt-8">
          <Link href="/contact" className="btn-solid">
            Get in Touch
          </Link>
        </div>
      </section>

      <Script
        id="ld-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: SITE.name,
            url: SITE.url,
            email: SITE.email,
            description: SITE.description,
            address: {
              "@type": "PostalAddress",
              addressRegion: "TX",
              addressCountry: "US",
            },
          }),
        }}
      />
    </div>
  );
}
