# Night Media Homepage — Architectural Cinematic Rebuild

## Goal
Rebuild only the homepage as a premium digital growth and technology experience: restrained, cinematic, highly legible, and globally credible. Preserve all URLs, SEO markup, backend behavior, forms, analytics, and integrations.

## Experience direction
- Use the requested architectural palette: midnight navy, pearl, soft white, metallic silver, sparing electric blue and teal.
- Establish a deliberate sequence of dark and light “rooms,” joined by soft tonal transitions and occasional visual bridges.
- Keep Geist as the display face and Inter as the supporting face; use mono only for labels, system status, and metrics.
- Build on an 8-point spacing rhythm with oversized editorial typography, strong negative space, fine rules, and minimal card chrome.
- Motion will be slow and physical: reveal, light sweep, restrained parallax, cursor tilt, and tactile button movement. Reduced-motion users receive stable compositions.

## Homepage structure
1. **Homepage navigation variant** — transparent over the opening scene, then a compact blurred midnight bar; Services, Work, AI Lab, About, Insights, and Let’s Talk. Other pages retain their current navigation.
2. **Hero** — left-aligned “Growth systems, engineered for what’s next.” messaging and two clear actions. The right side becomes a real-time 3D metallic N object with machined depth, controlled reflections, subtle cursor response, and a sparse signal field.
3. **Trust strip** — restrained proof using only names and evidence already present in the project; no invented logos, awards, or claims.
4. **What we do** — a quiet pearl introduction with six numbered capabilities presented as an editorial index rather than cards.
5. **Three capability launches** — dedicated product-style scenes for Growth Systems, Website Engineering, and AI + Automation, each with custom architectural visuals, concise copy, and a route-aware action.
6. **Featured work** — two large cinematic case-study compositions using existing local project imagery and existing descriptions. Unverified performance metrics will not be introduced.
7. **AI Lab** — preserve the existing interactive Growth Snapshot behavior, visually rebuild it as a credible technical instrument, and add selectable AI capability modes plus subtle N Signal feedback.
8. **Night Media Method** — five-stage Diagnose / Architect / Build / Deploy / Optimize system with a scroll-progress rail and weighted reveals.
9. **Proof** — restrained testimonial/proof presentation. Existing unverified metrics will be omitted; testimonial content already in the project can remain clearly presented.
10. **Final CTA** — deep-midnight closing statement with the N Signal and two actions.
11. **Homepage footer variant** — visually aligned with the rebuild while preserving newsletter and links; other pages retain the existing footer treatment.

## Signature systems
### Metallic N hero
- Add React Three Fiber 8, Drei 9, Three.js, and Three types for the React 18 app.
- Preserve the exact N path geometry by extruding the existing vector path rather than inventing a new mark.
- Use physical materials, local lightformers, a controlled camera, capped DPR, and no remote HDR or heavy post-processing.
- Lazy-load the 3D scene and provide an immediate CSS/SVG metallic N fallback so the opening view remains fast and never blank.
- On small screens, reduce geometry detail and signal count while keeping the N as a first-viewport brand signal.

### N Signal
- Create one reusable tiny-glyph treatment for selected section markers, button motion, AI states, and the method rail.
- Keep usage sparse and disable decorative motion for reduced-motion users.

### Capability visuals
- Use lightweight CSS/SVG/Canvas constructions for the supporting objects: interconnected growth chassis, layered browser architecture, AI automation relay, content lens, signal sculpture, and brand material stack.
- No generic spheres, brains, blobs, neon fields, or third-party hotlinked assets.

## Homepage-only implementation boundary
- Replace the homepage assembly and create focused homepage components under a dedicated section group.
- Add homepage-scoped style tokens and motion utilities without changing the global theme inherited by About, Blog, Contact, or other routes.
- Switch shared Navigation and Footer into homepage-specific visual variants based on the current route; preserve their existing versions everywhere else.
- Do not edit Helmet metadata, canonical tags, structured data, sitemap, robots, database code, forms, analytics, or integrations.

## Accessibility and performance
- Maintain semantic landmarks, heading order, visible focus states, AA contrast, descriptive labels, and keyboard-operable AI controls.
- Respect `prefers-reduced-motion`, avoid trapping pointer events, and ensure the 3D scene is decorative to assistive technology.
- Lazy-load below-fold media and 3D code, cap canvas pixel ratio, pause/de-emphasize motion outside view, and avoid video.
- Design mobile independently: stacked hero, compressed navigation, touch-safe controls, horizontal capability index where useful, and stable aspect ratios.

## Verification
- Run the project’s existing checks through the platform harness.
- Inspect the homepage at desktop and mobile widths with Playwright.
- Verify the metallic N renders, animates, and responds without blocking links or scrolling.
- Exercise navigation, AI Lab input/actions, project links, newsletter/footer continuity, and reduced-motion mode.
- Confirm all non-home routes retain their previous presentation and no SEO/backend files changed.
