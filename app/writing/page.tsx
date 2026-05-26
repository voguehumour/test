export const metadata = { title: "Writing" };

export default function Writing() {
  return (
    <div className="px-[var(--gutter)] pt-32 pb-32">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-7 md:col-start-3">
          <h1 className="font-serif text-step-4 tracking-tight mb-10">
            Writing
          </h1>
          <p className="text-fg-dim max-w-[52ch]">
            {/* TODO: voice */}
            Short pieces on AI, design, and the unglamorous work of shipping.
            Coming soon — the case studies say most of it for now.
          </p>
        </div>
      </div>
    </div>
  );
}
