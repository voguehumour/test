import Link from "next/link";
import { Metadata } from "next";
import { Painterly } from "@/components/Painterly";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Private portrait, interior, and landscape commissions — process, timeline, and consultation.",
};

const stages = [
  {
    n: "I",
    title: "Conversation",
    body: "Every commission begins with a private conversation, in person or by call. We discuss the sitter, the room, the intention, the painting that lives in your imagination — and the painting I am willing to make. A commission is only accepted when both are aligned.",
  },
  {
    n: "II",
    title: "Sittings",
    body: "Portraits typically require between 8 and 18 sittings, in the studio or — for select commissions — in your residence. Each sitting is unhurried. Coffee, conversation, silence; whatever the painting requires.",
  },
  {
    n: "III",
    title: "Studio",
    body: "Between sittings, the painting develops slowly, in layers of glaze. I send no progress photographs — the painting must be seen at scale, in its proper light. Studio visits are arranged at meaningful milestones.",
  },
  {
    n: "IV",
    title: "Delivery",
    body: "The completed painting is varnished, hand-framed in a tradition appropriate to the work, and delivered personally or by climate-controlled courier. Documentation, certificate of authenticity, and a private monograph accompany every commission.",
  },
];

const tiers = [
  {
    label: "Studies & small works",
    range: "30 × 40 — 50 × 60 cm",
    timeline: "3 — 4 months",
    price: "From €18,000",
  },
  {
    label: "Bust & half-length portraits",
    range: "70 × 90 — 110 × 90 cm",
    timeline: "6 — 9 months",
    price: "From €45,000",
  },
  {
    label: "Full-length & group portraits",
    range: "140 cm and above",
    timeline: "9 — 14 months",
    price: "On enquiry",
  },
];

const faqs = [
  ["How many commissions do you accept each year?", "Three to five — no more. The waiting list is published privately each January."],
  ["Do you travel to sit subjects?", "Yes, for select commissions. Travel and accommodation are arranged separately and added at cost."],
  ["Can the painting be photographed during the process?", "I prefer not — the painting deserves to be seen for the first time when it is finished, in proper light. A studio visit is more honest than a photograph."],
  ["What if the family is unhappy with the result?", "I do not begin a painting I am uncertain about, and I do not deliver a painting the family is uncertain about. There is a single review point, mid-way, where we re-confirm direction together."],
  ["Are commissions exhibited?", "Only with the family's written permission, and only at major institutional exhibitions. The painting belongs to you the moment it is delivered."],
];

const testimonials = [
  {
    quote:
      "It is the only painting in my house that the children whisper near. Zach has caught something my photographs could not — a stillness that belongs to my mother alone.",
    by: "S. K. — private collector, London",
  },
  {
    quote:
      "A commission that took fourteen months and was, in every measurable way, worth fourteen years.",
    by: "Lord & Lady H. — Suffolk",
  },
  {
    quote:
      "The painting arrived, and the room rearranged itself around it. There is no other way to describe it.",
    by: "Foundation Vermeer-Klein — Brussels",
  },
];

export default function CommissionsPage() {
  return (
    <article>
      <section className="relative pt-44 pb-20">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="—" label="Commissions" />
          <Reveal className="mt-8">
            <h1 className="font-display text-[14vw] md:text-[11vw] leading-[0.86] tracking-[-0.02em] text-ink">
              <RevealText>A painting</RevealText>
              <br />
              <em className="italic">
                <RevealText delay={0.12}>made for you,</RevealText>
              </em>
              <br />
              <RevealText delay={0.24}>slowly.</RevealText>
            </h1>
          </Reveal>
          <Reveal delay={0.4} className="mt-12 grid grid-cols-12">
            <p className="col-span-12 md:col-span-6 md:col-start-7 font-serif text-lg leading-[1.7] text-ink-muted">
              The studio accepts a small slate of private commissions each
              year — portraits of individuals, families, and quiet interiors.
              Each commission is treated as a private collaboration; what
              follows is the rhythm of that collaboration.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="I" label="Process" />
          <Reveal className="mt-6">
            <h2 className="font-display text-5xl md:text-7xl italic leading-[0.95] text-ink">
              Four movements.
            </h2>
          </Reveal>

          <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-16">
            <div className="col-span-12 md:col-span-5 md:sticky md:top-32 self-start">
              <Painterly
                src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1400&q=80"
                alt="Studio at work"
                parallax={50}
                className="aspect-[4/5] w-full"
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </div>
            <div className="col-span-12 md:col-span-7 md:pl-12">
              <ul>
                {stages.map((s, i) => (
                  <Reveal key={s.n} delay={i * 0.06}>
                    <li className="border-t border-ink/15 py-10">
                      <div className="flex items-baseline gap-6">
                        <span className="numeral font-sans text-[11px] uppercase tracking-widest text-ink-muted w-10">
                          {s.n}
                        </span>
                        <h3 className="font-display italic text-3xl md:text-4xl text-ink">
                          {s.title}
                        </h3>
                      </div>
                      <p className="mt-4 ml-16 font-serif text-base leading-[1.8] text-ink-muted max-w-2xl">
                        {s.body}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-24 md:py-32 bg-canvas-warm/30">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="grid grid-cols-12 gap-y-12">
            <div className="col-span-12 md:col-span-4">
              <SectionLabel numeral="II" label="Pricing philosophy" />
              <Reveal className="mt-6">
                <h2 className="font-display text-5xl md:text-6xl italic leading-tight text-ink">
                  A question of time.
                </h2>
              </Reveal>
              <Reveal delay={0.15} className="mt-6">
                <p className="font-serif text-base leading-[1.75] text-ink-muted max-w-md">
                  Pricing is calculated on the painting's scale, complexity,
                  and the duration of the engagement. The figures below are
                  starting points, offered transparently. Every commission is
                  quoted in full following the initial conversation.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-8 md:pl-12">
              <div className="space-y-2">
                {tiers.map((t, i) => (
                  <Reveal key={t.label} delay={i * 0.05}>
                    <div className="grid grid-cols-12 gap-4 border-t border-ink/15 py-8">
                      <span className="col-span-12 md:col-span-5 font-display italic text-2xl md:text-3xl text-ink">
                        {t.label}
                      </span>
                      <span className="col-span-6 md:col-span-3 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                        <span className="block text-ink/50">Scale</span>
                        <span className="numeral mt-1 block text-ink-soft normal-case tracking-wider font-serif">
                          {t.range}
                        </span>
                      </span>
                      <span className="col-span-6 md:col-span-2 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                        <span className="block text-ink/50">Time</span>
                        <span className="mt-1 block text-ink-soft normal-case tracking-wider font-serif">
                          {t.timeline}
                        </span>
                      </span>
                      <span className="col-span-12 md:col-span-2 md:text-right font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                        <span className="block text-ink/50">Investment</span>
                        <span className="numeral mt-1 block text-ink normal-case tracking-wider font-serif">
                          {t.price}
                        </span>
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 md:py-44">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12">
          <SectionLabel numeral="III" label="In the words of collectors" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <figure className="border-t border-ink/20 pt-6">
                  <blockquote className="font-display italic text-2xl md:text-[1.7rem] leading-[1.35] text-ink">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
                    — {t.by}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 md:py-32 bg-canvas-warm/30">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12">
          <SectionLabel numeral="IV" label="Often asked" />
          <Reveal className="mt-6">
            <h2 className="font-display text-5xl md:text-6xl italic leading-tight text-ink">
              Plain answers.
            </h2>
          </Reveal>
          <div className="mt-12">
            {faqs.map(([q, a], i) => (
              <Reveal key={q} delay={i * 0.04}>
                <div className="grid grid-cols-12 gap-6 border-t border-ink/15 py-8">
                  <span className="col-span-12 md:col-span-5 font-display italic text-2xl text-ink">
                    {q}
                  </span>
                  <span className="col-span-12 md:col-span-7 font-serif text-base leading-[1.8] text-ink-muted">
                    — {a}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 md:py-40">
        <div className="mx-auto max-w-[1300px] px-6 md:px-12 text-center">
          <Reveal>
            <h2 className="font-display text-6xl md:text-9xl leading-[0.9] text-ink">
              Begin a <em className="italic">conversation.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="mt-8">
            <p className="font-serif text-lg text-ink-muted max-w-xl mx-auto">
              Initial enquiries are answered personally, usually within five
              working days. Discretion is assumed; references are available on
              request.
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-12">
            <Link
              href="/contact?regarding=commission"
              data-cursor-label="Enquire"
              className="group inline-flex items-center gap-4 font-sans text-[12px] uppercase tracking-widest text-ink"
            >
              <span className="block h-px w-12 bg-ink transition-all duration-700 group-hover:w-20" />
              Begin a private commission
              <span className="block h-px w-12 bg-ink transition-all duration-700 group-hover:w-20" />
            </Link>
          </Reveal>
        </div>
      </section>
    </article>
  );
}
