/**
 * Merch showcase. There is no checkout on this site by design — every buy
 * button hands off to Bandcamp or whichever shop Frank picks. That keeps VAT,
 * shipping and returns out of this codebase until the label actually wants them.
 *
 * Product copy (name, blurb) lives in messages/{en,de}.json under
 * `merch.items.<id>` so both languages stay in step. Prices and links live here.
 *
 * TODO(Frank): real photography, real prices, real shop URL. Everything below
 * is placeholder scaffolding — `available: false` renders as "coming soon"
 * rather than a dead buy button.
 */

export type MerchItem = {
  id: string;
  /** Cents, EUR. Null while the price is undecided. */
  priceCents: number | null;
  /** External shop URL. Null renders the item as a teaser. */
  buyUrl: string | null;
  available: boolean;
  /** Path under /public. Placeholder art until photos exist. */
  image?: string;
};

export const merch: MerchItem[] = [
  { id: "logoTee", priceCents: 3500, buyUrl: null, available: false },
  { id: "logoHoodie", priceCents: 7500, buyUrl: null, available: false },
  { id: "toteBag", priceCents: 2000, buyUrl: null, available: false },
  { id: "slipmats", priceCents: 2500, buyUrl: null, available: false },
  { id: "vinylBundle", priceCents: null, buyUrl: null, available: false },
  { id: "cap", priceCents: 3000, buyUrl: null, available: false },
];

export function formatPrice(cents: number | null, locale: string): string | null {
  if (cents === null) return null;
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(cents / 100);
}
