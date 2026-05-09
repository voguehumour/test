import { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";
import { Reveal, RevealText } from "@/components/Reveal";
import { SectionLabel } from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Acquisitions, commissions, gallery representation, and museum loans — write privately to the studio.",
};

export default function ContactPage() {
  return (
    <article>
      <section className="relative pt-44 pb-24">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <SectionLabel numeral="—" label="Contact" />
          <Reveal className="mt-8">
            <h1 className="font-display text-[14vw] md:text-[11vw] leading-[0.86] tracking-[-0.02em] text-ink">
              <RevealText>Write to</RevealText>
              <br />
              <em className="italic">
                <RevealText delay={0.12}>the studio.</RevealText>
              </em>
            </h1>
          </Reveal>
          <Reveal delay={0.3} className="mt-12 grid grid-cols-12">
            <p className="col-span-12 md:col-span-6 md:col-start-7 font-serif text-lg leading-[1.7] text-ink-muted">
              Replies are written personally and arrive, usually, within five
              working days. The studio is small; correspondence is treated as
              the beginning of a conversation, not a transaction.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12 grid grid-cols-12 gap-x-6 gap-y-16">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <Suspense fallback={<div className="h-96" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
          <aside className="col-span-12 md:col-span-4 md:col-start-9 space-y-12">
            <Reveal delay={0.15}>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                The studio
              </p>
              <p className="mt-3 font-display italic text-3xl text-ink leading-tight">
                4 Rue de la Lanterne
              </p>
              <p className="mt-1 font-serif text-base text-ink-soft">
                2000 Antwerp · Belgium
                <br />
                By appointment only
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                Direct correspondence
              </p>
              <a
                href="mailto:studio@zachshev.com"
                className="mt-3 block font-display italic text-3xl text-ink hover:text-bronze transition-colors duration-700"
              >
                studio@zachshev.com
              </a>
              <a
                href="mailto:press@zachshev.com"
                className="mt-1 block font-serif text-base text-ink-soft hover:text-bronze transition-colors"
              >
                press@zachshev.com
              </a>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                Representation
              </p>
              <p className="mt-3 font-serif text-base text-ink-soft leading-relaxed">
                Gallery representation enquiries are welcomed but do not
                guarantee a partnership. The studio currently works with two
                galleries on a non-exclusive basis.
              </p>
            </Reveal>
            <Reveal delay={0.36}>
              <p className="font-sans text-[10px] uppercase tracking-widest text-ink-muted">
                Channels
              </p>
              <ul className="mt-3 space-y-1 font-serif text-base text-ink-soft">
                <li><a className="hover:text-bronze transition-colors" href="#">Instagram · @zachshev.studio</a></li>
                <li><a className="hover:text-bronze transition-colors" href="#">Artsy</a></li>
                <li><a className="hover:text-bronze transition-colors" href="#">Substack — Studio Notes</a></li>
              </ul>
            </Reveal>
          </aside>
        </div>
      </section>
    </article>
  );
}
