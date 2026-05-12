import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Commission Process",
  description:
    "How a portrait commission works — from initial consultation to delivery.",
};

const sections: { heading: string; body: string[] }[] = [
  {
    heading: "Initial Consultation",
    body: [
      "The process begins with a conversation about the vision for the portrait. This includes discussing size, composition, mood, wardrobe, lighting, and where the final piece will live. Whether the painting is intended as a personal keepsake, a gift, or a family heirloom, the goal is to create something timeless and deeply personal.",
      "Clients are welcome to share inspiration images, existing photographs, or ideas they may have for the piece.",
    ],
  },
  {
    heading: "Reference Photography",
    body: [
      "High quality reference material is essential to creating a successful portrait.",
      "Depending on the project, references may come from existing photographs provided by the client, a custom directed photoshoot, or a combination of both. For larger commissions, a dedicated photoshoot is often recommended in order to achieve the strongest possible lighting, composition, and overall design.",
      "The goal during this stage is to gather reference material that feels natural, authentic, and painterly rather than overly posed or artificial.",
    ],
  },
  {
    heading: "Composition & Design",
    body: [
      "Once references are selected, the composition of the painting is developed. This stage may involve cropping adjustments, value studies, color considerations, and overall design decisions that help establish the final direction of the portrait.",
      "Attention is given not only to likeness, but also to mood, atmosphere, gesture, edge quality, and the overall visual impact of the piece.",
    ],
  },
  {
    heading: "Approval & Scheduling",
    body: [
      "After the concept, size, and reference material are finalized, the commission is officially scheduled.",
      "A deposit is required to reserve a place on the calendar and begin work on the painting.",
      "At this stage, major compositional decisions should be finalized before work begins on the final surface.",
    ],
  },
  {
    heading: "Painting Process",
    body: [
      "Each portrait is created by hand using professional archival materials intended to last for generations.",
      "Throughout the process, focus is placed on creating a painting that feels alive, personal, and enduring. Select progress updates may be shared during the development of the work.",
      "Completion times vary depending on the scale and complexity of the portrait.",
    ],
  },
  {
    heading: "Framing",
    body: [
      "Framing recommendations are available upon request. Clients may choose to receive the painting framed and ready to hang, or unframed depending on preference.",
      "A carefully chosen frame can play an important role in the final presentation of the artwork.",
    ],
  },
  {
    heading: "Shipping & Delivery",
    body: [
      "Completed paintings are professionally packaged for safe delivery.",
      "Local delivery may be available within Southern California. Domestic and international shipping are also available. Shipping costs vary depending on size, framing, and destination.",
    ],
  },
  {
    heading: "Final Notes",
    body: [
      "Because each painting is created through a highly individualized process, only a limited number of commissions are accepted each year.",
      "For commission inquiries, availability, or additional information, please visit the Contact page.",
    ],
  },
];

export default function CommissionProcessPage() {
  return (
    <article className="container-narrow pt-10 md:pt-14 pb-20">
      <header className="mb-10 md:mb-14">
        <h1 className="font-display text-4xl md:text-5xl">
          The Commission Process
        </h1>
        <p className="mt-6 text-[17px] md:text-[18px] leading-[1.7] text-[color:var(--color-text-primary)]">
          Each portrait is approached as a highly individual work of art. The
          process is designed to create not only a strong likeness, but a
          painting with presence, atmosphere, and lasting emotional value.
        </p>
      </header>

      <div className="space-y-12 md:space-y-14">
        {sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-display text-2xl md:text-3xl text-[color:var(--color-text-primary)]">
              {s.heading}
            </h2>
            <div className="mt-4 space-y-5 text-[17px] md:text-[18px] leading-[1.7] text-[color:var(--color-text-primary)]">
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 pt-10 border-t border-[color:var(--color-border)] flex flex-wrap items-center gap-3">
        <Link
          href="/contact?subject=Commission%20Inquiry"
          className="btn-solid"
        >
          Inquire about a commission
        </Link>
        <Link href="/commission" className="btn-outline">
          See pricing
        </Link>
      </div>
    </article>
  );
}
