import RevealText from "@/components/RevealText";

export const metadata = { title: "About" };

export default function About() {
  return (
    <div className="px-[var(--gutter)] pt-32 pb-32">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 md:col-start-3">
          <RevealText
            as="h1"
            lines={["I think about AI,", "then I build the thing."]}
            className="font-serif text-step-4 leading-[1.0] tracking-tight"
          />
          <div className="mt-12 space-y-6 text-fg-dim leading-[1.7] max-w-[58ch]">
            {/* TODO: voice */}
            <p>
              I&rsquo;m Animesh — an AI consultant who came up through product
              design and engineering. That order matters: I learned to ship
              before I learned to advise, so my advice tends to be the kind you
              can act on by Friday.
            </p>
            <p>
              Most AI consulting stops at the strategy deck. Mine doesn&rsquo;t,
              because I can sit down and prototype the thing we just discussed —
              which keeps the strategy honest and the team unblocked. Product
              designer and creative engineer aren&rsquo;t side gigs; they&rsquo;re
              the reason the consulting is trustworthy.
            </p>
            <p>
              I work best with founders and product teams who have a real
              problem and a short runway. I&rsquo;m less useful if you want a
              forty-slide future-of-AI narrative. I&rsquo;m very useful if you
              want the boring outcome moved and the team smarter when I leave.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
