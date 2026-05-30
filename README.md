# Animesh Jaiswal — AI consultant portfolio

This is a quiet, editorial document with one living object in it. The whole site
exists to land a single sentence in a CTO's head in ten seconds — *this person can
think about my AI problem and then actually build something useful by Friday* — and
then to reward the reader who stays. Everything is type, image, and pacing, except
for one piece of WebGL: a small **AI network** of 7–12 nodes that drifts on a
curl-noise field, bends its connections into organic beziers, fires a pulse along a
link every few seconds like a model thinking, and leans toward the cursor with a
magnetic falloff. As you scroll past the hero it compresses into a 96px corner module
and persists across routes — the site's heartbeat. Its pulse rhythm and color
temperature shift per section (warmer and faster in the work, cooler and slower in the
about), so the reader feels the change without noticing it. That restraint — being
brave enough to be slow, and letting one object carry the whole signature — is the
lift from lusion.co; the maximalist full-screen WebGL spectacle is deliberately not.

## Stack

Next.js (App Router) + TypeScript strict · Tailwind v4 with a token-only theme ·
react-three-fiber + drei + a custom GLSL network (no particle libraries) · Motion for
sequence animation · GSAP + ScrollTrigger for the one pinned positioning sequence ·
Lenis for weighted smooth scroll · next-mdx-remote for case studies · View Transitions
API for shared-element route morphs where supported.

## A deliberate type decision

The spec's non-negotiable was *one variable display face and one variable mono face —
no third family*. So this ships exactly two: **Fraunces** (editorial serif, used for
display **and** long-form body — the "document" read) and **JetBrains Mono** (system
labels, metrics, the positioning line). The "neutral grotesk for body" from the visual
notes was folded into the serif rather than added as a third family, which keeps the
page feeling like a printed essay. Swap faces in one place: `app/layout.tsx`.

## Where to edit

- **Design tokens** — `styles/tokens.css`. Every color, type step, spacing value, and
  motion constant. Nothing else hardcodes a hex or a duration. Light theme at parity in
  the same file.
- **Animesh's voice** — every placeholder is marked `{/* TODO: voice */}`. The
  availability line and email live in `components/home/Hero.tsx` and
  `components/home/ContactBlock.tsx`.
- **Case studies** — `content/work/*.mdx`, with custom components (`<Lede>`, `<Metrics>`,
  `<Frame>`, `<Pull>`, `<Stack>`, `<Aside>`) defined in `components/mdx/`.
- **The AI network** — `components/network/`, shaders in `components/network/shaders/`
  as `.glsl` files (loaded raw via the Turbopack/webpack rules in `next.config.mjs`).

## Accessibility & motion

WCAG AA contrast in both themes including hover/focus. Designed focus rings (never the
browser default). Full keyboard navigation. The canvas carries a meaningful
`aria-label` describing the network, not "decorative". Every motion path has a
`prefers-reduced-motion` route: reveals collapse to 240ms opacity, the network freezes
to a static composition with one slowly-breathing node, and the custom cursor reverts
to the system cursor. Review it at **`/reduced-motion-preview`**, which forces the
reduced baseline regardless of OS setting.

## Performance notes

The WebGL stack is a dynamic import mounted after first paint, so the home LCP is text.
DPR is capped, the node count drops on mobile, and the frame loop reads pointer/scroll
from a mutable store rather than React state to avoid re-renders on the hot path.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```
