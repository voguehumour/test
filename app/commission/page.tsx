import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commission a Portrait",
  description:
    "Commission pricing across all mediums — Oil Paintings, Oil Sketches, Pastel Drawings, Graphite Drawings, and Pet Portraits.",
};

type Row = { size: string; price: string };
type SubGroup = { label?: string; rows: Row[] };
type MediumGroup = { title: string; groups: SubGroup[] };

const pricing: MediumGroup[] = [
  {
    title: "Oil Portrait Paintings",
    groups: [
      {
        label: "Head and Shoulders",
        rows: [
          { size: '9" × 12"', price: "$1,500" },
          { size: '16" × 20"', price: "$2,100" },
          { size: '20" × 24"', price: "$2,400" },
        ],
      },
      {
        label: "Half Body",
        rows: [
          { size: '20" × 24"', price: "$3,400" },
          { size: '24" × 36"', price: "$4,800" },
        ],
      },
      {
        label: "Half Body with Hands",
        rows: [
          { size: '20" × 24"', price: "$4,200" },
          { size: '24" × 36"', price: "$5,000" },
        ],
      },
      {
        label: "Full Body",
        rows: [{ size: '24" × 36"', price: "Starting at $6,000" }],
      },
    ],
  },
  {
    title: "Oil Portrait Sketches",
    groups: [
      {
        rows: [
          { size: '8" × 10"', price: "$450" },
          { size: '11" × 14"', price: "$600" },
          { size: '16" × 20"', price: "$900" },
          { size: '18" × 24"', price: "$1,200" },
        ],
      },
    ],
  },
  {
    title: "Pastel Portrait Drawings",
    groups: [
      {
        label: "Head and Shoulders",
        rows: [
          { size: '9" × 12"', price: "$400" },
          { size: '11" × 14"', price: "$650" },
          { size: '16" × 20"', price: "$800" },
          { size: '18" × 24"', price: "$1,000" },
        ],
      },
      {
        label: "Half Body with Hands",
        rows: [{ size: '16" × 20"', price: "$1,000" }],
      },
      {
        label: "Full Figure",
        rows: [
          { size: '18" × 24"', price: "$1,250" },
          { size: '24" × 36"', price: "$1,500" },
        ],
      },
    ],
  },
  {
    title: "Graphite Portrait Drawings",
    groups: [
      {
        rows: [
          { size: '9" × 12"', price: "$400" },
          { size: '11" × 14"', price: "$650" },
          { size: '16" × 20"', price: "$900" },
        ],
      },
    ],
  },
  {
    title: "Pet Portraits",
    groups: [
      {
        label: "Oil",
        rows: [
          { size: '8" × 10"', price: "$450" },
          { size: '11" × 14"', price: "$600" },
          { size: '16" × 20"', price: "$900" },
        ],
      },
      {
        label: "Pastel",
        rows: [
          { size: '8" × 10"', price: "$300" },
          { size: '11" × 14"', price: "$550" },
          { size: '16" × 20"', price: "$800" },
        ],
      },
    ],
  },
];

export default function CommissionPricingPage() {
  return (
    <div className="container-narrow pt-10 md:pt-14 pb-20">
      <header className="mb-10 md:mb-14">
        <h1 className="font-display text-4xl md:text-5xl">
          Commission a Portrait
        </h1>
        <p className="mt-6 text-[17px] md:text-[18px] leading-[1.7]">
          Each portrait is developed through a highly individualized process,
          and only a limited number of commissions are accepted each year.
        </p>
      </header>

      <div className="space-y-14 md:space-y-16">
        {pricing.map((medium) => (
          <section key={medium.title}>
            <h2 className="font-display text-2xl md:text-3xl pb-3 border-b border-[color:var(--color-border)]">
              {medium.title}
            </h2>

            <div className="mt-6 space-y-8">
              {medium.groups.map((g, gi) => (
                <div key={gi}>
                  {g.label && (
                    <p className="font-display italic text-lg text-[color:var(--color-text-secondary)] mb-2">
                      {g.label}
                    </p>
                  )}
                  <dl className="divide-y divide-[color:var(--color-border)]">
                    {g.rows.map((r) => (
                      <div
                        key={r.size}
                        className="grid grid-cols-2 gap-4 py-3 items-baseline"
                      >
                        <dt className="text-[17px]">{r.size}</dt>
                        <dd className="text-[17px] text-right tabular-nums">
                          {r.price}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-14 text-[17px] leading-[1.7] text-[color:var(--color-text-secondary)] italic">
        Custom sizes, multiple subjects, and more complex compositions are
        available upon request. Prices may vary depending on complexity,
        background, and framing.
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-3">
        <Link
          href="/contact?subject=Commission%20Inquiry"
          className="btn-solid"
        >
          Inquire about a commission
        </Link>
        <Link href="/commission-process" className="btn-outline">
          Read the process
        </Link>
      </div>
    </div>
  );
}
