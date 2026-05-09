import Link from "next/link";
import { Metadata } from "next";
import { collections, getArtworksByCollection, type Collection } from "@/lib/artworks";
import { Painterly } from "@/components/Painterly";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Five thematic rooms — Portrait Studies, Emotional Landscapes, Human Presence, Silence & Memory, Light Studies.",
};

export default function CollectionsPage() {
  const entries = Object.entries(collections) as [
    Collection,
    (typeof collections)[Collection],
  ][];

  return (
    <div>
      <section className="relative pt-44 pb-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="—" label="Collections" />
          <Reveal className="mt-8">
            <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.86] tracking-[-0.02em] text-ink">
              <RevealText>Five rooms,</RevealText>
              <br />
              <em className="italic">
                <RevealText delay={0.12}>one long sentence.</RevealText>
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.3} className="mt-12 max-w-2xl">
            <p className="font-serif text-lg leading-[1.7] text-ink-muted">
              Each collection is a different chamber of the same studio
              practice. Walk through them slowly. Some are portraits, some
              landscapes, some quiet interiors — all of them are concerned with
              the same long question.
            </p>
          </Reveal>
        </div>
      </section>

      {entries.map(([key, c], i) => {
        const works = getArtworksByCollection(key);
        const lead = works[0];
        const reverse = i % 2 === 1;
        return (
          <section
            key={key}
            className={`relative py-24 md:py-40 ${i % 2 === 0 ? "" : "bg-canvas-warm/30"}`}
          >
            <div className="mx-auto max-w-[1600px] px-6 md:px-12">
              <div
                className={`grid grid-cols-12 gap-x-6 gap-y-12 items-center ${
                  reverse ? "md:[direction:rtl]" : ""
                }`}
              >
                <div className="col-span-12 md:col-span-7 [direction:ltr]">
                  {lead && (
                    <Link
                      href={`/collections/${key}`}
                      data-cursor-label="Enter room"
                      className="block"
                    >
                      <Painterly
                        src={lead.image}
                        alt={lead.title}
                        parallax={70}
                        className="aspect-[4/5] w-full lift"
                        sizes="(max-width:768px) 100vw, 56vw"
                      />
                    </Link>
                  )}
                </div>
                <div className="col-span-12 md:col-span-5 [direction:ltr] md:px-12">
                  <Reveal>
                    <span
                      className="font-sans text-[11px] uppercase tracking-widest"
                      style={{ color: c.accent }}
                    >
                      {c.subtitle}
                    </span>
                  </Reveal>
                  <Reveal delay={0.1} className="mt-4">
                    <h2 className="font-display text-5xl md:text-7xl italic leading-[0.95] text-ink">
                      {c.title}
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2} className="mt-6">
                    <p className="font-serif text-lg leading-[1.75] text-ink-muted">
                      {c.statement}
                    </p>
                  </Reveal>
                  <Reveal delay={0.3} className="mt-10">
                    <Link
                      href={`/collections/${key}`}
                      data-cursor-label="Enter"
                      className="group inline-flex items-center gap-3 font-sans text-[12px] uppercase tracking-widest text-ink"
                    >
                      <span
                        className="block h-px w-10 transition-all duration-700 group-hover:w-16"
                        style={{ backgroundColor: c.accent }}
                      />
                      Enter the room — {works.length} works
                    </Link>
                  </Reveal>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
