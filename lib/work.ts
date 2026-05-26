export type Metric = { value: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  context: string;
  metrics: Metric[];
  image: string; // treated still in /public/work
};

// Two well-told stories beat three padded ones. The third slot is a TODO.
export const WORK: CaseStudy[] = [
  {
    slug: "ledger-copilot",
    title: "A copilot that books itself",
    client: "Fintech, Series B",
    year: "2025",
    context:
      "A finance team drowning in reconciliation. We scoped where an LLM actually helps versus where it quietly invents numbers, then shipped a copilot that drafts journal entries a human approves in one click.",
    metrics: [
      { value: "71", label: "% reconciliation time cut" },
      { value: "3", label: "weeks to first ship" },
      { value: "0", label: "hallucinated entries in prod" },
    ],
    image: "/work/ledger.svg",
  },
  {
    slug: "atlas-search",
    title: "Search that understands the question",
    client: "Healthcare platform",
    year: "2024",
    context:
      "Clinicians couldn't find anything in a decade of notes. We built retrieval that reasons over structure, not just embeddings — and a UI that shows its sources so a doctor can trust it in ten seconds.",
    metrics: [
      { value: "4.2", label: "× faster to answer" },
      { value: "92", label: "% answers cited correctly" },
      { value: "8", label: "pilot teams, week one" },
    ],
    image: "/work/atlas.svg",
  },
];
