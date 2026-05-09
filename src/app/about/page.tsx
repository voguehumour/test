import { Metadata } from "next";
import { Painterly } from "@/components/Painterly";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Zach Shev — biography, philosophy, studio practice, and the slow grammar of looking.",
};

export default function AboutPage() {
  return (
    <article>
      {/* Cover */}
      <section className="relative pt-44 pb-24 md:pb-40">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="I" label="The painter" />
          <Reveal className="mt-10">
            <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.86] tracking-[-0.02em] text-ink">
              <RevealText>The painter</RevealText>
              <br />
              <em className="italic">
                <RevealText delay={0.12}>and the room.</RevealText>
              </em>
            </h1>
          </Reveal>

          <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-12">
            <div className="col-span-12 md:col-span-7 md:col-start-1">
              <Painterly
                src="https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1600&q=80"
                alt="Studio portrait"
                priority
                parallax={70}
                className="aspect-[4/5] w-full"
                sizes="(max-width:768px) 100vw, 60vw"
              />
              <p className="mt-4 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                Plate I — Studio in late afternoon · photograph by H. Vermeer-Klein
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
              <Reveal>
                <p className="font-serif text-lg leading-[1.7] text-ink-soft">
                  Zach Shev (b. 1989) is a contemporary oil painter working
                  primarily in portraiture and quiet interior. He keeps a
                  studio in Antwerp and works slowly — between four and seven
                  paintings per year — in long, repeated sittings.
                </p>
                <p className="mt-6 font-serif text-lg leading-[1.7] text-ink-soft">
                  His paintings are held in private collections across Europe,
                  the United Kingdom, and the United States, and have been
                  exhibited with the Royal Society of Portrait Painters,
                  Christie's, and Galerie Roussel.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="relative py-32 md:py-44 bg-canvas-warm/30">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-y-16">
            <div className="col-span-12 md:col-span-3">
              <SectionLabel numeral="II" label="Philosophy" />
            </div>
            <div className="col-span-12 md:col-span-9">
              <Reveal>
                <p className="font-display text-3xl md:text-5xl leading-[1.18] text-ink first-letter:text-7xl first-letter:font-display first-letter:italic first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:text-bronze">
                  I have always thought of painting as a form of attention,
                  which is to say a form of love. To paint a face is to refuse
                  to look away from it. To paint a room is to insist that the
                  room — the chair in it, the light leaving it — deserves to
                  be remembered.
                </p>
              </Reveal>
              <Reveal delay={0.2} className="mt-12">
                <p className="font-serif text-lg leading-[1.8] text-ink-muted max-w-3xl">
                  My work belongs to a long lineage of painters who believed
                  that slowness is a virtue and that restraint is a kind of
                  generosity. I am suspicious of cleverness. I prefer the
                  painting that survives a second look.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="relative py-32 md:py-44">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="III" label="Studio practice" />
          <Reveal className="mt-6">
            <h2 className="font-display text-6xl md:text-8xl italic leading-[0.92] text-ink">
              The grammar of looking.
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-12">
            {[
              {
                roman: "01",
                title: "Sittings",
                copy: "Each portrait develops over twelve to thirty sittings, generally between two and three hours, in natural north light. The sitter and I rarely speak in the first session — only after the eyes are placed.",
              },
              {
                roman: "02",
                title: "Surface",
                copy: "I work in oil on hand-stretched Belgian linen, prepared with a warm imprimatura of raw umber and lead white. The painting is built in layers of thin, slow-drying glazes — a process closer to writing than to drawing.",
              },
              {
                roman: "03",
                title: "Time",
                copy: "A finished painting is one I no longer feel I can usefully return to. Some take two months. Others take two years. The body of work moves at its own pace.",
              },
            ].map((p, i) => (
              <Reveal key={p.roman} delay={i * 0.08} className="col-span-12 md:col-span-4">
                <div className="border-t border-ink/20 pt-6">
                  <span className="numeral font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                    {p.roman}
                  </span>
                  <h3 className="mt-3 font-display italic text-3xl md:text-4xl text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-4 font-serif text-base leading-[1.75] text-ink-muted">
                    {p.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Studio diptych */}
          <div className="mt-32 grid grid-cols-12 gap-4 md:gap-8">
            <Reveal className="col-span-12 md:col-span-5 md:mt-24">
              <Painterly
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=80"
                alt="Studio detail"
                parallax={50}
                className="aspect-[4/5] w-full"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </Reveal>
            <Reveal delay={0.15} className="col-span-12 md:col-span-7">
              <Painterly
                src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?auto=format&fit=crop&w=1600&q=80"
                alt="Studio window"
                parallax={70}
                className="aspect-[5/4] w-full"
                sizes="(max-width:768px) 100vw, 56vw"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Influences */}
      <section className="relative py-32 md:py-44 bg-canvas-warm/30">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-y-16">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel numeral="IV" label="Influences" />
              <Reveal className="mt-6">
                <h2 className="font-display text-5xl md:text-6xl italic leading-tight text-ink">
                  A short list of debts.
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-8 md:pl-16">
              <ul className="divide-y divide-ink/15">
                {[
                  ["Johannes Vermeer", "for the geometry of light, and for the silence of the women he refused to interrupt."],
                  ["Andrew Wyeth", "for the Pennsylvania winters, and the small dignified privacy of his sitters."],
                  ["Antonio López García", "for forty years of looking at the same wall, and never once exhausting it."],
                  ["Lucian Freud", "for the gravitational seriousness of skin."],
                  ["Giorgio Morandi", "for proving that a row of bottles can be a country."],
                  ["Hammershøi", "for the doorways."],
                ].map(([who, why], i) => (
                  <Reveal key={who} delay={i * 0.05}>
                    <li className="grid grid-cols-12 gap-6 py-7">
                      <span className="col-span-12 md:col-span-4 font-display italic text-2xl md:text-3xl text-ink">
                        {who}
                      </span>
                      <span className="col-span-12 md:col-span-8 font-serif text-base leading-[1.75] text-ink-muted">
                        — {why}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Biography timeline */}
      <section className="relative py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <SectionLabel numeral="V" label="Curriculum" />
          <Reveal className="mt-6">
            <h2 className="font-display text-6xl md:text-7xl italic leading-tight text-ink">
              Brief biography.
            </h2>
          </Reveal>

          <div className="mt-20">
            {[
              { y: "1989", t: "Born", c: "Born in Saint Petersburg. Family relocates to Brussels in 1994." },
              { y: "2007 — 2011", t: "Royal Academy of Fine Arts, Antwerp", c: "BFA, Painting. Studies under M. de Bruycker. Receives the Marc Maet Prize in his final year." },
              { y: "2012", t: "First studio", c: "Establishes a small studio above a bookbinder on Rue de la Lanterne, where he still works." },
              { y: "2016", t: "First solo exhibition", c: "'A Slow Country' at Galerie Roussel, Paris. Sold out within the opening week." },
              { y: "2019", t: "Royal Society of Portrait Painters", c: "Elected member. Awarded the de László Foundation Medal." },
              { y: "2022 — 2024", t: "Museum loans", c: "Works enter the collections of MSK Ghent, the Phillips Collection, and two private foundations." },
              { y: "2026", t: "Present", c: "Working between Antwerp and a small house in the Cévennes. Currently preparing 'Solitude, a Slow Country' (London)." },
            ].map((b, i) => (
              <Reveal key={b.y} delay={i * 0.04}>
                <div className="grid grid-cols-12 gap-6 border-t border-ink/15 py-8">
                  <span className="col-span-12 md:col-span-2 numeral font-sans text-sm uppercase tracking-widest text-ink-muted">
                    {b.y}
                  </span>
                  <span className="col-span-12 md:col-span-4 font-display italic text-2xl md:text-3xl text-ink">
                    {b.t}
                  </span>
                  <span className="col-span-12 md:col-span-6 font-serif text-base leading-[1.75] text-ink-muted">
                    {b.c}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
