import { Metadata } from "next";
import Link from "next/link";
import { Painterly } from "@/components/Painterly";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Exhibitions",
  description:
    "Selected exhibitions, museum loans, press, and awards — Zach Shev, 2016 — present.",
};

const upcoming = [
  {
    when: "March — May 2026",
    where: "London",
    title: "Solitude, a Slow Country",
    venue: "Galerie Roussel · 11 Cork Street",
    note: "Solo. 14 new paintings. Opening 11 March, by invitation.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=1400&q=80",
  },
  {
    when: "September 2026",
    where: "Antwerp",
    title: "Studio Visit — A Small Survey",
    venue: "MSK Ghent · Project Room III",
    note: "Curated by E. Kaminski. Includes loans from three private collections.",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80",
  },
];

const exhibitions = [
  { y: "2025", t: "The Long Hour", v: "The Phillips Collection · Washington, D.C.", k: "Group · museum" },
  { y: "2024", t: "Royal Society of Portrait Painters Annual", v: "Mall Galleries · London", k: "Group · annual" },
  { y: "2024", t: "Anna, in the Window — A Painting Released", v: "Galerie Roussel · Paris", k: "Solo · cabinet" },
  { y: "2023", t: "The Quiet Hand", v: "BOZAR · Brussels", k: "Group · curated" },
  { y: "2022", t: "Henrik in the Doorway", v: "Christie's · King Street · auction preview", k: "Special viewing" },
  { y: "2021", t: "Nine Painters Looking East", v: "MSK Ghent", k: "Group · museum" },
  { y: "2019", t: "Slow Country", v: "Galerie Roussel · Paris", k: "Solo" },
  { y: "2018", t: "First Light — Selected Studies", v: "Sint-Lucas · Antwerp", k: "Solo" },
  { y: "2016", t: "A Slow Country (debut)", v: "Galerie Roussel · Paris", k: "Solo · debut" },
];

const awards = [
  ["2024", "de László Foundation Medal", "Royal Society of Portrait Painters"],
  ["2022", "BP Portrait Award · longlist", "National Portrait Gallery, London"],
  ["2019", "Elected Member, RP", "Royal Society of Portrait Painters"],
  ["2017", "Bouchard Prize for Painting", "Académie Royale, Brussels"],
  ["2011", "Marc Maet Prize", "Royal Academy of Fine Arts, Antwerp"],
];

const press = [
  {
    pub: "FT Weekend Magazine",
    line: "Quietly, almost invisibly, Shev has become one of the most serious portraitists working in Europe.",
    issue: "October 2024",
  },
  {
    pub: "The Burlington Magazine",
    line: "A slow, deliberate art that recalls Hammershøi and rewards an unhurried eye.",
    issue: "Vol. CLXVI, No. 1455",
  },
  {
    pub: "Apollo",
    line: "The painting refuses to perform. Instead it stands its ground, and waits.",
    issue: "March 2025",
  },
  {
    pub: "Le Monde",
    line: "Une peinture qui sait se taire — and that, today, is rare and precious.",
    issue: "April 2024",
  },
];

export default function ExhibitionsPage() {
  return (
    <article>
      <section className="relative pt-44 pb-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="—" label="Exhibitions" />
          <Reveal className="mt-8">
            <h1 className="font-display text-[14vw] md:text-[11vw] leading-[0.86] tracking-[-0.02em] text-ink">
              <RevealText>A record</RevealText>
              <br />
              <em className="italic">
                <RevealText delay={0.12}>of public rooms.</RevealText>
              </em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Upcoming */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <SectionLabel numeral="I" label="Upcoming" />
          <Reveal className="mt-6">
            <h2 className="font-display text-5xl md:text-7xl italic leading-[0.95] text-ink">
              Where the work is going.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {upcoming.map((u, i) => (
              <Reveal key={u.title} delay={i * 0.1}>
                <article className="group">
                  <Painterly
                    src={u.image}
                    alt={u.title}
                    parallax={50}
                    className="aspect-[4/3] w-full lift"
                    sizes="(max-width:768px) 100vw, 50vw"
                  />
                  <div className="mt-6">
                    <p className="font-sans text-[11px] uppercase tracking-widest text-bronze">
                      {u.when} · {u.where}
                    </p>
                    <h3 className="mt-3 font-display italic text-3xl md:text-4xl text-ink">
                      {u.title}
                    </h3>
                    <p className="mt-2 font-serif text-base text-ink-soft">{u.venue}</p>
                    <p className="mt-3 font-serif text-base text-ink-muted leading-relaxed">
                      {u.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 md:py-32 bg-canvas-warm/30">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="II" label="Selected exhibitions" />
          <Reveal className="mt-6">
            <h2 className="font-display text-5xl md:text-6xl italic leading-tight text-ink">
              2016 — present.
            </h2>
          </Reveal>
          <div className="mt-12">
            {exhibitions.map((e, i) => (
              <Reveal key={`${e.y}-${e.t}`} delay={i * 0.03}>
                <div className="group grid grid-cols-12 gap-4 border-t border-ink/15 py-7 transition-colors hover:bg-canvas/40">
                  <span className="col-span-3 md:col-span-1 numeral font-sans text-sm uppercase tracking-widest text-ink-muted">
                    {e.y}
                  </span>
                  <span className="col-span-9 md:col-span-5 font-display italic text-2xl md:text-3xl text-ink">
                    {e.t}
                  </span>
                  <span className="col-span-12 md:col-span-4 font-serif text-base text-ink-soft">
                    {e.v}
                  </span>
                  <span className="col-span-12 md:col-span-2 font-sans text-[11px] uppercase tracking-widest text-ink-muted md:text-right">
                    {e.k}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel numeral="III" label="Awards" />
              <Reveal className="mt-6">
                <h2 className="font-display text-5xl md:text-6xl italic leading-tight text-ink">
                  Honours.
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-8 md:pl-8">
              {awards.map(([y, name, body], i) => (
                <Reveal key={String(name)} delay={i * 0.04}>
                  <div className="grid grid-cols-12 gap-4 border-t border-ink/15 py-7">
                    <span className="col-span-3 md:col-span-2 numeral font-sans text-sm uppercase tracking-widest text-ink-muted">
                      {y}
                    </span>
                    <span className="col-span-9 md:col-span-5 font-display italic text-2xl md:text-3xl text-ink">
                      {name}
                    </span>
                    <span className="col-span-12 md:col-span-5 font-serif text-base text-ink-muted">
                      {body}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="relative py-24 md:py-32 bg-canvas-warm/30">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="IV" label="Press" />
          <Reveal className="mt-6">
            <h2 className="font-display text-5xl md:text-7xl italic leading-tight text-ink">
              In other rooms.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12">
            {press.map((p, i) => (
              <Reveal key={p.pub} delay={i * 0.05}>
                <figure className="border-t border-ink/20 pt-6">
                  <p className="font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                    {p.pub} · {p.issue}
                  </p>
                  <blockquote className="mt-4 font-display italic text-2xl md:text-[1.6rem] leading-[1.3] text-ink">
                    “{p.line}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 text-center">
          <Reveal>
            <p className="font-display text-3xl md:text-5xl italic text-ink leading-tight">
              For press kits, hi-resolution imagery, and curatorial enquiries —
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <Link
              href="/contact?regarding=press"
              data-cursor-label="Write"
              className="group inline-flex items-center gap-4 font-sans text-[12px] uppercase tracking-widest text-ink"
            >
              <span className="block h-px w-10 bg-ink transition-all duration-700 group-hover:w-16" />
              Write to the studio
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
