import CountUp from "@/components/CountUp";

// Custom components available inside case-study MDX. The writing should read
// like a Stripe Press essay — long-form, occasional image, generous whitespace.

export function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-serif text-step-2 leading-[1.3] text-fg mb-12 max-w-[40ch]">
      {children}
    </p>
  );
}

export function Stack({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col gap-8 my-8">{children}</div>;
}

export function Metrics({ children }: { children: React.ReactNode }) {
  return (
    <dl className="flex flex-wrap gap-x-12 gap-y-6 my-12 border-y border-hairline py-8">
      {children}
    </dl>
  );
}

export function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-mono text-step-2 text-fg">
        <CountUp value={value} />
      </dt>
      <dd className="font-mono text-step--1 text-fg-dim mt-1 max-w-[18ch]">
        {label}
      </dd>
    </div>
  );
}

export function Frame({
  src,
  caption,
}: {
  src: string;
  caption?: string;
}) {
  return (
    <figure className="my-12">
      <img
        src={src}
        alt={caption ?? ""}
        className="w-full object-cover"
        style={{ filter: "saturate(0.85)" }}
      />
      {caption && (
        <figcaption className="font-mono text-step--1 text-fg-dim mt-3">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-12 pl-6 border-l border-accent">
      <p className="font-serif text-step-2 leading-[1.2] tracking-tight text-fg max-w-[28ch]">
        {children}
      </p>
    </blockquote>
  );
}

export function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="my-10 border-l border-hairline pl-5 text-fg-dim text-step--1">
      {children}
    </aside>
  );
}

export const mdxComponents = {
  Lede,
  Stack,
  Metrics,
  Metric,
  Frame,
  Pull,
  Aside,
  h2: (p: React.ComponentProps<"h2">) => (
    <h2
      className="font-serif text-step-2 tracking-tight mt-16 mb-4 leading-tight"
      {...p}
    />
  ),
  p: (p: React.ComponentProps<"p">) => (
    <p className="text-fg-dim leading-[1.7] mb-6" {...p} />
  ),
  a: (p: React.ComponentProps<"a">) => (
    <a
      className="text-fg underline decoration-accent underline-offset-4 hover:text-accent transition-colors"
      {...p}
    />
  ),
};
