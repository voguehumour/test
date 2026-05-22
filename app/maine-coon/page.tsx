import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Maine Coon Breed",
  description:
    "Everything you need to know about Maine Coon cats — history, physical characteristics, personality, care, and why they make extraordinary companions.",
};

const sections = [
  {
    label: "01",
    title: "Origin & History",
    paragraphs: [
      "The Maine Coon is one of the oldest natural breeds in North America, and holds the distinction of being the official state cat of Maine. Though its exact origins remain a charming mystery, the breed is believed to have evolved from longhaired cats brought to North America by early European settlers, developing its hardy constitution through natural selection in the rugged New England climate.",
      "By the late 19th century, Maine Coons were already popular show cats, competing — and winning — at early American cat shows. Despite a period of declining popularity during the mid-20th century, dedicated breeders preserved the breed, and today the Maine Coon is consistently among the most beloved cats in the world.",
    ],
  },
  {
    label: "02",
    title: "Physical Characteristics",
    paragraphs: [
      "Maine Coons are the largest domesticated cat breed, with males typically weighing 13–18 pounds and females 8–12 pounds. They are slow-maturing cats, not reaching full size until 3–5 years of age.",
      "Their most distinctive features include a long, rectangular body; a thick, shaggy coat with a silky undercoat; tufted lynx-like ears; and a large, flowing tail they can wrap around themselves for warmth. Their paws are large and well-tufted — originally an adaptation for walking on snow. Maine Coons come in nearly every color and pattern, from classic tabby to solid and smoke.",
    ],
  },
  {
    label: "03",
    title: "Personality & Temperament",
    paragraphs: [
      "Often called \"dog-like,\" Maine Coons are famously loyal, sociable, and curious. They tend to follow their owners from room to room, greet guests enthusiastically, and maintain a playful, kitten-like spirit well into adulthood.",
      "They are highly intelligent and enjoy interactive play, puzzle toys, and learning tricks. Unlike many cat breeds, Maine Coons are typically comfortable on leashes and enjoy supervised outdoor time. They are gentle and patient — an exceptional choice for families with children or other pets.",
      "Maine Coons are vocal in a uniquely endearing way. They chirp, trill, and chatter rather than meow loudly, often holding full conversations with their owners.",
    ],
  },
  {
    label: "04",
    title: "Care & Grooming",
    paragraphs: [
      "Despite their impressive coats, Maine Coons are relatively easy to groom. Their fur is less prone to matting than many other longhaired breeds, but regular brushing 2–3 times per week keeps it looking its best and reduces shedding.",
      "Like all cats, Maine Coons benefit from a high-protein diet, regular veterinary care, and mental enrichment. Their large size means they appreciate tall cat trees, wide scratching posts, and plenty of space to stretch and climb. Interactive play is essential to keep their active minds engaged.",
    ],
  },
  {
    label: "05",
    title: "Why a Maine Coon?",
    paragraphs: [
      "Maine Coons are often described as the perfect cat for people who think they don't like cats. Their dog-like devotion, gentle temperament, and adaptable nature make them well-suited to almost any household — singles, couples, families with children, multi-pet homes.",
      "They are not demanding, but they will reward your companionship with unwavering affection. Once you share your life with a Maine Coon, it's very hard to imagine life without one.",
    ],
  },
];

export default function MaineCoonPage() {
  return (
    <div className="container-content pt-10 md:pt-14 pb-24">
      <header className="mb-12 md:mb-16 max-w-[640px]">
        <p className="text-xs uppercase tracking-[0.25em] text-[color:var(--color-text-secondary)] mb-3">
          Breed Information
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-[1.1]">
          The Maine Coon
        </h1>
        <p className="mt-5 text-lg text-[color:var(--color-text-secondary)] font-display italic">
          Gentle giants with hearts to match.
        </p>
      </header>

      <div className="space-y-14 md:space-y-16 max-w-[720px]">
        {sections.map((s) => (
          <section key={s.label}>
            <div className="flex items-start gap-0 md:gap-6 mb-4">
              <span className="hidden md:block text-xs uppercase tracking-[0.2em] text-[color:var(--color-text-secondary)] pt-1.5 min-w-[120px] text-right shrink-0">
                {s.label}
              </span>
              <h2 className="font-display text-2xl md:text-3xl">{s.title}</h2>
            </div>
            <div className="md:pl-[144px] space-y-4 text-[17px] leading-[1.75] text-[color:var(--color-text-primary)]">
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="hairline mt-16 md:mt-20 mb-12" />

      <div className="text-center max-w-[480px] mx-auto">
        <p className="font-display italic text-xl text-[color:var(--color-text-secondary)]">
          Interested in bringing a Maine Coon into your home?
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Link href="/kittens" className="btn-solid">
            View Available Kittens
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
