# IFA Connect — Website

Next.js (App Router) marketing site for IFA Connect, built to the SIKA house
standard: Lenis smooth scroll + Motion reveals + GSAP for set-pieces, Tailwind v4
design tokens, brand fonts via `next/font`.

## Brand system — "Charcoal & Warm Stone" (Brand Guidelines v1)
- **Charcoal** `#17171a` · **Charcoal Deep** `#101012` · **Charcoal Card** `#2a2a2e`
- **Stone / Champagne** `#c3ad8e` (accent + primary CTA) · **Stone Dark** `#8a7355` · **Champagne Deep** `#b0966f` (hover)
- **Bone** `#f3efe7` (canvas) · **Ink** `#26262b` · **Line** `#e6ded1`
- Type: **Plus Jakarta Sans** (display) + **Inter** (body)
- Tokens live in `src/app/globals.css` (`@theme`) → use as `bg-charcoal`, `text-stone`, etc.

## Animation stack
- `SmoothScroll` — Lenis (`lerp 0.12`), resets scroll on route change
- `Reveal` — Motion fade+rise, signature ease `cubic-bezier(0.22,1,0.36,1)`
- `Counter` — count-up on scroll into view
- GSAP available for timeline set-pieces (e.g. mobile menu)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
```
Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## Structure
```
src/
  app/            layout.tsx (fonts + shell), page.tsx (home), globals.css (tokens)
  components/
    site/         SmoothScroll, Reveal, Counter, Header, Footer, SectionHeading
    ui/           Button (cva variants)
  lib/            site.ts (config/nav), utils.ts (cn)
public/           logo-white.png, page imagery (hero/pillar/guide/proof)
```

## Notes
- Staging is `noindex` (`layout.tsx` robots) until launch **and** s21 sign-off by an
  FCA-authorised firm (see compliance brief). Remove before go-live.
- All copy follows the non-FCA **introducer** line: we never give advice; advice is
  always the adviser's.
- Logo change (capsule colour) needs Sam's approval — left as supplied.
