
# Night Media — Dark Enterprise Redesign

Brand stays **Night Media India**. Aesthetic shifts from cinematic-dark + GSAP-heavy to **calm dark enterprise** in the Linear / Vercel / Anthropic register, using a blue-teal identity adapted for dark surfaces.

## 1. Design tokens (drives the whole site in one edit)

`src/index.css` + `tailwind.config.ts`:

- **Surfaces (dark enterprise):**
  - `--background` → `#071A2B` (deep navy, not pure black)
  - `--card` / elevated surface → `#0C2236`
  - `--muted` → `#102A40`
  - `--border` → `rgba(229,237,244,0.08)` (whisper border, replaces glow borders)
- **Brand:**
  - `--primary` → `#0F62FE` (IBM-style enterprise blue)
  - `--accent` → `#19C6D1` (teal)
  - `--secondary` → `#00A6C7`
- **Text:**
  - `--foreground` → `#F8FBFD`
  - `--muted-foreground` → `#9AB0C4` (calm slate, replaces #888)
- **Radii:** unify on `--radius: 16px` per brief (8px base spacing)
- **Shadows:** retire glow shadows; add `--shadow-elevation-1/2/3` as soft dark-mode lifts (`0 1px 2px rgba(0,0,0,.4)`, `0 8px 24px rgba(0,0,0,.35)`)
- **Retire** `.glass-card`, `.glow-border`, `.gradient-text-primary` heavy variants → replace with `.surface-card` (border + subtle shadow, no blur) and `.text-gradient-brand` (blue→teal, only used 1–2x per page)
- **Noise overlay opacity** dropped from 0.03 to 0.015; large gradient orbs reduced from blur(100px)/opacity 0.3 → blur(140px)/opacity 0.12, and removed entirely from anything below the fold

## 2. Typography

- Keep Inter (body) + Space Grotesk (headings) — already loaded
- New scale (Tailwind utility classes via `@layer`):
  - Hero H1: `text-[64px] md:text-[72px]` tracking-tight leading-[1.05]
  - Section H2: `text-[40px] md:text-[48px]`
  - Body lg: `text-[18px] md:text-[20px]` leading-[1.6]
  - Max paragraph width `max-w-[62ch]`

## 3. Rebuild (full rewrites)

- `Navigation.tsx` — transparent at top, solid `#071A2B/95 backdrop-blur` after scroll, pill CTA `bg-primary`, no magnetic micro-animation
- `Hero.tsx` — left-aligned 72px headline, 20px supporting copy (max-w-[58ch]), Primary CTA (Start project) + Secondary (See work). Right side: **new AI illustration** — SVG component `HeroAILattice.tsx` with flowing nodes/edges, subtle motion via CSS keyframes (no GSAP)
- `TrustSection.tsx` — re-cast as enterprise solution grid, remove gradient backgrounds per card, thin borders only, lift on hover
- `ProcessSection.tsx` — convert to **horizontal timeline** w/ icons + animated progress line (Intersection Observer + CSS scaleX, no GSAP)
- `ServicesPreview.tsx` — enterprise solution cards (icon / title / desc / outcome / Learn more)
- `FeaturedProjects.tsx` — light cleanup, new card chrome
- `CallToAction.tsx` — large pre-footer CTA band on `#0C2236`
- `Footer.tsx` — dark enterprise footer w/ newsletter, columns, socials
- New: `src/components/Visuals/HeroAILattice.tsx` (animated SVG, ~3KB, respects `prefers-reduced-motion`)

## 4. Token-inherit passes (light touch)

These pages get token inheritance automatically; I'll do a targeted pass to remove hardcoded `bg-gradient-to-*`, `text-green-*`, and `glow-border` so they read correctly in the new system:

- `Services.tsx` + Services/* components
- `Projects.tsx`, `ProjectDetail.tsx`, `Rebranding3DEraCaseStudy.tsx`
- `About.tsx`
- `Contact.tsx`, `AIAudit.tsx`
- `Blog.tsx`, `BlogPost.tsx`, `BlogAdmin.tsx`
- All blog article pages under `src/pages/*.tsx`

## 5. Animation budget

- Remove ScrollTrigger pinning and parallax orbs from Trust/Process/Hero
- Keep only: fade-in-up on section enter (existing Tailwind keyframes), hover-lift on cards, button hover transitions, smooth-scroll
- All section animations use Intersection Observer; GSAP retained only where already stable and subtle

## 6. Out of scope (this pass)

- No content/copy rewrites
- No URL or route changes (SEO preserved)
- No new business logic, no DB changes
- Blog admin / functionality untouched
- Custom cursor stays but lower contrast

## Technical notes

- Color tokens in `index.css` use HSL per project convention; brand hexes converted to HSL on write
- `tailwind.config.ts` gains a `boxShadow` extension (`elevation-1/2/3`) and updated `borderRadius` baseline
- Existing `gradient-orb`, `glass`, `glow-border` CSS classes stay defined but neutered (lower opacity / no blur) so legacy components don't break visually mid-migration
- One commit's worth of work, but ~25 files touched; I'll batch parallel writes

## Risks

- High file count → I'll work in waves (tokens → core surfaces → inherit passes) and verify the build between waves
- GSAP refs in untouched sections may animate against the new palette in odd ways; if any look off after wave 2, I'll neuter the offending ScrollTrigger
