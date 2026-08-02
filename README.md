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
| `merch.ts` | Merch items, prices, stock, Bandcamp links (scraped, see below) |
| `merch-images.ts` | Static imports of the Bandcamp artwork, keyed by art id |

Prose for the timeline and merch lives in `messages/*.json` under matching keys,
so both languages stay in step.

## Logo and photography

The label's mark and wordmark were vector-traced from the original artwork into
`src/assets/logo-mark.svg` and `logo-wordmark.svg`, both carrying
`fill="currentColor"` so a single asset renders white in the header, grey in the
merch tiles and red on hover. `src/app/icon.svg` (the favicon) is generated from
the same mark. Copies sit in `public/` for anything that needs a plain URL.

SVGs import as React components through `@svgr/webpack`, wired up in
`next.config.ts`. `LogoMark` and `LogoWordmark` deliberately set no height —
callers own the size, because a default `h-auto` in the component wins over a
caller's `h-9` (same stylesheet, source order decides) and silently blew the
header logo up to full width.

Press photographs live in `src/assets/photos/` and always render through
`Photo` (or the hero's own layer), which forces grayscale and extra contrast.
Full-colour photography would compete with the one-red rule, and desaturating
also hides how differently the source shots were graded.

`VinylBackdrop` is the exception: Müller 2037 cut out of its sleeve shot and
sunk into the page at 25%, slowly rotating. It is the only red on the site that
isn't a marker, so it stays on two sections — the merch teaser and the
catalogue opener. More than that and the one flourish becomes wallpaper.

## Open items

- **Catalogue completeness.** The listing is compiled from Bandcamp, Wikipedia,
  laut.de and RA. Discogs blocks automated reads, so the pre-2000 records are
  thin and most years are unverified (`verified: false` renders as `—` rather
  than a guess). Frank's master list overrides all of it.
- **Merch is a mirror, not a shop.** Items, prices, stock and artwork are pulled
  from the label's Bandcamp stores (`mullerrecords`, `beroshima`) and every buy
  button leaves for Bandcamp, which already handles VAT, shipping and returns.
  Nothing here holds an order or a card number. The scrape lives outside the
  repo, so **prices and stock go stale**: when they move, re-run the scrape
  rather than hand-editing `merch.ts` — a wrong price on a label site is worse
  than no price. Artwork is downloaded to `src/assets/merch/` rather than
  hotlinked, because the Bandcamp CDN is not ours to depend on.
- **Photography.** The four press photos are low resolution (400–1024px wide),
  fine at current sizes but not enough for a full-bleed treatment.
- **Legal.** Impressum and Datenschutz pages are required before this goes live
  in Germany. Not written yet — they need real address and contact data.
