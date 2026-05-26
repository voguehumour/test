import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import { getWorkSlugs, getWorkSource } from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx";
import MagneticLink from "@/components/MagneticLink";

type Frontmatter = {
  title: string;
  client: string;
  year: string;
  image: string;
};

export function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getWorkSource(slug);
  if (!source) return {};
  const { frontmatter } = await compileMDX<Frontmatter>({
    source,
    options: { parseFrontmatter: true },
  });
  return { title: frontmatter.title };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = getWorkSource(slug);
  if (!source) notFound();

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source,
    components: mdxComponents,
    options: { parseFrontmatter: true },
  });

  return (
    <article className="pt-24">
      {/* Full-bleed hero — the shared-element image from the home page. */}
      <div className="relative h-[72svh] overflow-hidden">
        <img
          src={frontmatter.image}
          alt=""
          aria-hidden
          className="h-full w-full object-cover"
          style={{
            viewTransitionName: `work-${slug}`,
            filter: "saturate(0.85) brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 flex items-end px-[var(--gutter)] pb-12">
          <div>
            <p className="font-mono text-step--1 text-fg-dim">
              {frontmatter.client} · {frontmatter.year}
            </p>
            <h1 className="mt-3 font-serif text-step-4 leading-[0.98] tracking-tight max-w-[20ch]">
              {frontmatter.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Reading column: 7 of 12, offset right by 2. Never centered. */}
      <div className="grid grid-cols-12 px-[var(--gutter)] py-20">
        <div className="col-span-12 md:col-span-7 md:col-start-3">
          {content}
          <div className="mt-20 border-t border-hairline pt-8">
            <MagneticLink href="/work" label="back" className="font-mono text-step--1 text-fg-dim hover:text-accent">
              ← all work
            </MagneticLink>
          </div>
        </div>
      </div>
    </article>
  );
}
