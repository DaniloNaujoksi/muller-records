# Müller Records

Website for Müller Records — the Berlin techno label founded by Frank Müller (Beroshima) in 1996.

Next.js 16 (App Router, Turbopack) · Tailwind CSS 4 · next-intl · TypeScript.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Design rules

Black, white, one red. The red (`--color-blood`, `#e5001a`) marks the single most
important thing on a screen — a catalogue number, the active nav item, a headline
artist. If a screen has red in three places, two of them are wrong.

There is no light mode, and that is deliberate.

Display type is Archivo 800 with negative tracking; everything else is JetBrains
Mono, which is what makes the pages read as pressing sheets rather than landing
pages. Section labels are numbered (`01 / ROSTER`).

## Languages

English is the default and lives at `/`; German lives at `/de` with localised
paths (`/de/katalog`, `/de/geschichte`). Copy lives in `messages/en.json` and
`messages/de.json` — both are full translations, neither is a fallback.

## Content

Everything factual sits in `src/data/`:

| File | Holds |
| --- | --- |
| `catalog.ts` | Releases, catalogue numbers, the four imprints, albums |
| `artists.ts` | Roster, split into full releases and remix credits |
| `timeline.ts` | Label history years, plus the stat-band numbers |
| `merch.ts` | Merch items, prices, external shop links |

Prose for the timeline and merch lives in `messages/*.json` under matching keys,
so both languages stay in step.

## Open items

- **Logo.** `src/components/ui/Logo.tsx` renders a placeholder mark. Drop Frank's
  artwork in `public/logo.svg` and change that one component — everything else
  sizes the logo through `className`.
- **Catalogue completeness.** The listing is compiled from Bandcamp, Wikipedia,
  laut.de and RA. Discogs blocks automated reads, so the pre-2000 records are
  thin and most years are unverified (`verified: false` renders as `—` rather
  than a guess). Frank's master list overrides all of it.
- **Merch.** Showcase only, by design: `buyUrl` hands off to an external shop and
  items without one render as "coming soon". No cart, no payment, no VAT logic in
  this codebase until the label actually wants a shop here.
- **Photography.** Product shots and any hero imagery are still missing; the
  placeholders are logo-on-black and read as intentional in the meantime.
- **Legal.** Impressum and Datenschutz pages are required before this goes live
  in Germany. Not written yet — they need real address and contact data.
