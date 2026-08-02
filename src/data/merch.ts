/**
 * Merch, pulled from the label's own Bandcamp stores (mullerrecords and
 * beroshima) rather than invented. Titles, prices, stock and artwork all come
 * from there, which means Bandcamp stays the single source of truth: this site
 * shows the goods and every buy button hands off to the shop that already
 * handles VAT, shipping and returns.
 *
 * Regenerating: the scrape lives outside the repo. When stock moves, the honest
 * fix is to re-run it rather than hand-editing prices here, because a wrong
 * price on a label site is worse than no price.
 *
 * Artwork sits in src/assets/merch/<id>.jpg, keyed by Bandcamp's art id, and is
 * resolved through the image map below — a static import per file is what lets
 * Next optimise them.
 */

import type { StaticImageData } from "next/image";
import { merchImages } from "./merch-images";

export type MerchItem = {
  /** Bandcamp art id. Doubles as the React key and the image key. */
  id: string;
  kind: "apparel" | "record";
  artist?: string;
  title: string;
  catalog?: string;
  /** Pressing variant, where the listing names one. */
  variant?: string;
  /** Cents, EUR. Null when sold out — Bandcamp stops printing a price then. */
  priceCents: number | null;
  soldOut: boolean;
  buyUrl: string;
};

/** One buyable size in one cut. Each is a separate Bandcamp listing. */
export type ApparelVariant = {
  id: string;
  cut: "men" | "woman";
  size: string;
  priceCents: number | null;
  soldOut: boolean;
  buyUrl: string;
};

/**
 * One shirt, with its cuts and sizes underneath. Bandcamp sells each size as
 * its own product; showing them that way put six near-identical photographs of
 * the same two shirts on the page.
 */
export type ApparelProduct = {
  /** Art id of the photo this product shows. */
  id: string;
  colourway: string;
  variants: ApparelVariant[];
};

export const merch: MerchItem[] = [
  {
    id: "0033037789",
    kind: "apparel",
    title: "T-Shirt Men S Black / Silver Print",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-men-s-black-silver-print-2",
  },
  {
    id: "0033015861",
    kind: "apparel",
    title: "T-Shirt Woman S Black / Silver Print",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-woman-s-black-silver-print-2",
  },
  {
    id: "0033015837",
    kind: "apparel",
    title: "T-Shirt Men S White / Silver Print",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-men-s-white-silver-print",
  },
  {
    id: "0033015830",
    kind: "apparel",
    title: "T-Shirt Woman S Black / Silver Print",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-woman-s-black-silver-print",
  },
  {
    id: "0033015822",
    kind: "apparel",
    title: "T-Shirt Woman M Black / Silver Print",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-woman-m-black-silver-print",
  },
  {
    id: "0033015666",
    kind: "apparel",
    title: "T-Shirt Men S Black / Silver Print",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-men-s-black-silver-print",
  },
  {
    id: "0033015639",
    kind: "apparel",
    title: "Tshirt Woman M - White / Silver Print",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/tshirt-woman-m-white-silver-print",
  },
  {
    id: "0033015511",
    kind: "apparel",
    title: "Tshirt Woman S - White / Silver Print",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://mullerrecords.bandcamp.com/merch/tshirt-woman-s-white-silver-print",
  },
  {
    id: "0041679770",
    kind: "record",
    artist: "BEROSHIMA",
    title: "DeeBeePhunky",
    catalog: "Muller 2102",
    variant: "Pink vinyl",
    priceCents: 1600,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/album/beroshima-deebeephunky-muller-2102",
  },
  {
    id: "0042019726",
    kind: "record",
    artist: "BEROSHIMA",
    title: "DeeBeePhunky",
    catalog: "Muller 2102",
    variant: "Mixed colour",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://mullerrecords.bandcamp.com/album/beroshima-deebeephunky-muller-2102",
  },
  {
    id: "0042019684",
    kind: "record",
    artist: "BEROSHIMA",
    title: "DeeBeePhunky",
    catalog: "Muller 2102",
    variant: "Test pressing",
    priceCents: 1500,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/album/beroshima-deebeephunky-muller-2102",
  },
  {
    id: "0042694371",
    kind: "record",
    artist: "WESTBAM",
    title: "Endlos",
    catalog: "Muller 2101",
    variant: "Test pressing",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://mullerrecords.bandcamp.com/album/westbam-endlos-muller-2101",
  },
  {
    id: "0040090497",
    kind: "record",
    artist: "WESTBAM",
    title: "Endlos",
    catalog: "Muller 2101",
    priceCents: 1600,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/album/westbam-endlos-muller-2101",
  },
  {
    id: "0039969388",
    kind: "record",
    artist: "BEROSHIMA",
    title: "This could be ...",
    catalog: "Muller 2100",
    priceCents: 1500,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-this-could-be-muller-2100?label=2887883378&tab=merch",
  },
  {
    id: "0040263604",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Tragedy EP",
    catalog: "Muller 2098",
    priceCents: 1500,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-tragedy-ep-muller-2098?label=2887883378&tab=merch",
  },
  {
    id: "0039591628",
    kind: "record",
    artist: "SPALT",
    title: "Acid Orange 017",
    variant: "Picture disc",
    priceCents: 2000,
    soldOut: false,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/spalt-acid-orange-017?label=2887883378&tab=merch",
  },
  {
    id: "0038993596",
    kind: "record",
    artist: "STERIL LATEX",
    title: "essentiel",
    catalog: "Muller 2099",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://mullerrecords.bandcamp.com/album/steril-latex-essentiel-muller-2099",
  },
  {
    id: "0037949740",
    kind: "record",
    artist: "DJ ROK",
    title: "Defender",
    catalog: "Muller Records 2026",
    variant: "CD",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://mullerrecords.bandcamp.com/album/dj-rok-defender-muller-records-2026",
  },
  {
    id: "0036811937",
    kind: "record",
    artist: "BEROSHIMA",
    title: "the lost frea(k)quencies vol.3",
    catalog: "AO022 & Muller 2094",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/beroshima-the-lost-frea-k-quencies-vol-3-ao022-muller-2094?label=2887883378&tab=merch",
  },
  {
    id: "0027463386",
    kind: "record",
    artist: "ЯФВФТИIK",
    title: "STEP",
    catalog: "AO 002",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/ik-step-ao-002?label=2887883378&tab=merch",
  },
  {
    id: "0029347443",
    kind: "record",
    artist: "TOUREAU",
    title: "Telecommande",
    catalog: "Muller 2095",
    variant: "White vinyl",
    priceCents: 1300,
    soldOut: false,
    buyUrl: "https://toureau.bandcamp.com/album/toureau-telecommande-muller-2095?label=2887883378&tab=merch",
  },
  {
    id: "0027532007",
    kind: "record",
    artist: "DJ RATZKI & JAN & CURLEY",
    title: "Genetic Performance",
    catalog: "AO012",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/dj-ratzki-jan-curley-genetic-performance-ao012?label=2887883378&tab=merch",
  },
  {
    id: "0027396973",
    kind: "record",
    artist: "SYLVIE MARKS",
    title: "Row of Houses",
    catalog: "TR 02",
    priceCents: 2500,
    soldOut: false,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/sylvie-marks-row-of-houses-tr-02?label=2887883378&tab=merch",
  },
  {
    id: "0027390346",
    kind: "record",
    artist: "FRANK CASTLE",
    title: "Recorded in Den Haag",
    catalog: "AO008",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/frank-castle-recorded-in-den-haag-ao008?label=2887883378&tab=merch",
  },
  {
    id: "0027390130",
    kind: "record",
    artist: "KOPFTANZ",
    title: "#1",
    catalog: "AO 006",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/kopftanz-1-ao-006?label=2887883378&tab=merch",
  },
  {
    id: "0027378751",
    kind: "record",
    artist: "ARZACH",
    title: "#2",
    catalog: "AO009",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/arzach-2-ao009?label=2887883378&tab=merch",
  },
  {
    id: "0027378547",
    kind: "record",
    artist: "BEROSHIMA",
    title: "The Opression remixes EP",
    catalog: "AO21",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/beroshima-the-opression-remixes-ep-ao21?label=2887883378&tab=merch",
  },
  {
    id: "0039348963",
    kind: "record",
    artist: "C14",
    title: "C14",
    catalog: "AO015",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://acidorangerecordings.bandcamp.com/album/c14-c14-ao015?label=2887883378&tab=merch",
  },
  {
    id: "0037864193",
    kind: "record",
    artist: "AIR LIQUIDE",
    title: "\"Best Of\" (1991-2001)",
    catalog: "Muller 2040",
    variant: "Double vinyl",
    priceCents: 1500,
    soldOut: false,
    buyUrl: "https://mullerrecords.bandcamp.com/album/air-liquide-best-of-1991-2001-muller-2040",
  },
  {
    id: "0025025409",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Moonraker EP",
    catalog: "Muller 2083 (BM03)",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-moonraker-ep-muller-2083-bm03?label=2887883378&tab=merch",
  },
  {
    id: "0020017293",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Electronic Discussion & Remixes",
    catalog: "Muller 2087",
    priceCents: 1300,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-electronic-discussion-remixes-muller-2087?label=2887883378&tab=merch",
  },
  {
    id: "0025027070",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Dance the Machine",
    catalog: "Muller 2080",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-dance-the-machine-muller-2080?label=2887883378&tab=merch",
  },
  {
    id: "0025027449",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Corazon Remixes",
    catalog: "Muller 2062",
    priceCents: 1200,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-corazon-remixes-muller-2062",
  },
  {
    id: "0039989111",
    kind: "record",
    artist: "FRANK MULLER",
    title: "Horizon & Remixes",
    catalog: "Mad Musician 02",
    priceCents: 1100,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/frank-muller-horizon-remixes-mad-musician-02",
  },
  {
    id: "0039398433",
    kind: "record",
    artist: "FRANK MULLER",
    title: "Emphasis EP",
    catalog: "Mad Musician 01",
    priceCents: 1400,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/frank-muller-emphasis-ep-mad-musician-01",
  },
  {
    id: "0037864320",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Polyphonication",
    catalog: "Muller 2073 & 2074",
    priceCents: 1100,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-polyphonication-muller-2073-2074",
  },
  {
    id: "0039430909",
    kind: "record",
    artist: "BEROSHIMA",
    title: "WorldWideWhore EP",
    catalog: "Muller 2025",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-worldwidewhore-ep-muller-2025",
  },
  {
    id: "0037865272",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Moonraker Remixes",
    catalog: "Muller 2065",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-moonraker-remixes-muller-2065",
  },
  {
    id: "0037864232",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Cosmic Flight EP",
    catalog: "Muller 2066",
    priceCents: 1300,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-cosmic-flight-ep-muller-2066",
  },
  {
    id: "0025026948",
    kind: "record",
    artist: "BEROSHIMA",
    title: "A new Day EP",
    catalog: "Muller 2071",
    priceCents: 1400,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-a-new-day-ep-muller-2071",
  },
  {
    id: "0014789279",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Hexaline EP",
    catalog: "Muller 2089",
    variant: "Coloured vinyl",
    priceCents: 1300,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-hexaline-ep-muller-2089",
  },
  {
    id: "0025027174",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Corazon EP",
    catalog: "Muller 2060",
    priceCents: 1300,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-corazon-ep-muller-2060",
  },
  {
    id: "0014520069",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Encounter EP",
    catalog: "Muller 2088",
    variant: "Coloured vinyl",
    priceCents: 1500,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-encounter-ep-muller-2088",
  },
  {
    id: "0037865346",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Prophets Obsession Remixes",
    catalog: "Muller 2058",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-prophets-obsession-remixes-muller-2058",
  },
  {
    id: "0040802403",
    kind: "record",
    artist: "BEROSHIMA",
    title: "DeeBeePhunky",
    catalog: "Muller 2003",
    priceCents: 2000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-deebeephunky-muller-2003",
  },
  {
    id: "0037865439",
    kind: "record",
    artist: "BEROSHIMA",
    title: "The catastrophe Ballet",
    catalog: "Muller 2053",
    priceCents: 1300,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-the-catastrophe-ballet-muller-2053",
  },
  {
    id: "0037864325",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Polyphonication",
    catalog: "Muller 2073 & 2074",
    priceCents: 1100,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-polyphonication-muller-2073-2074",
  },
  {
    id: "0036812706",
    kind: "record",
    artist: "RUMMY SHARMA",
    title: "Delhibelly",
    catalog: "Muller 2086",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/rummy-sharma-delhibelly-muller-2086",
  },
  {
    id: "0036407577",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Sweet Shelter EP",
    catalog: "Muller 2019",
    priceCents: 1400,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-sweet-shelter-ep-muller-2019",
  },
  {
    id: "0022629611",
    kind: "record",
    artist: "BEROSHIMA",
    title: "Real 2 Reel",
    catalog: "Muller 2091",
    variant: "Double vinyl",
    priceCents: 2000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-real-2-reel-muller-2091",
  },
  {
    id: "0039577050",
    kind: "record",
    artist: "BEROSHIMA",
    title: "\"Best of\" Japan edition (2006)",
    catalog: "Muller 2000",
    priceCents: null,
    soldOut: true,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-best-of-japan-edition-2006-muller-2000",
  },
  {
    id: "0037949800",
    kind: "record",
    artist: "BEROSHIMA",
    title: "The catastrophe Ballet",
    catalog: "Muller 2053",
    variant: "CD",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-the-catastrophe-ballet-muller-2053",
  },
  {
    id: "0030903547",
    kind: "record",
    artist: "BEROSHIMA",
    title: "\"Best of\" Japan edition (2006)",
    catalog: "Muller 2000",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-best-of-japan-edition-2006-muller-2000",
  },
  {
    id: "0030902733",
    kind: "record",
    artist: "BEROSHIMA",
    title: "POP Pornography of Performance",
    catalog: "Muller 2029",
    variant: "CD",
    priceCents: 1000,
    soldOut: false,
    buyUrl: "https://beroshima.bandcamp.com/album/beroshima-pop-pornography-of-performance-muller-2029",
  },
];

export const apparelProducts: ApparelProduct[] = [
  {
    id: "0033037789",
    colourway: "Black / Silver Print",
    variants: [
      { id: "0033037789", cut: "men", size: "S", priceCents: 1000, soldOut: false, buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-men-s-black-silver-print-2" },
      { id: "0033015861", cut: "woman", size: "S", priceCents: 1000, soldOut: false, buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-woman-s-black-silver-print-2" },
      { id: "0033015822", cut: "woman", size: "M", priceCents: 1000, soldOut: false, buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-woman-m-black-silver-print" },
    ],
  },
  {
    id: "0033015837",
    colourway: "White / Silver Print",
    variants: [
      { id: "0033015837", cut: "men", size: "S", priceCents: null, soldOut: true, buyUrl: "https://mullerrecords.bandcamp.com/merch/t-shirt-men-s-white-silver-print" },
      { id: "0033015511", cut: "woman", size: "S", priceCents: null, soldOut: true, buyUrl: "https://mullerrecords.bandcamp.com/merch/tshirt-woman-s-white-silver-print" },
      { id: "0033015639", cut: "woman", size: "M", priceCents: null, soldOut: true, buyUrl: "https://mullerrecords.bandcamp.com/merch/tshirt-woman-m-white-silver-print" },
    ],
  },
];

export const records = merch.filter((i) => i.kind === "record");
/** In-stock records only — sold-out pressings belong on the catalogue page. */
export const recordsInStock = records.filter((i) => !i.soldOut);

/** Cheapest in-stock size, for the price shown on the product tile. */
export function apparelFrom(product: ApparelProduct): number | null {
  const prices = product.variants.filter((v) => !v.soldOut && v.priceCents !== null).map((v) => v.priceCents!);
  return prices.length ? Math.min(...prices) : null;
}

export function merchImage(id: string): StaticImageData | undefined {
  return merchImages[id];
}

export function formatPrice(cents: number | null, locale: string): string | null {
  if (cents === null) return null;
  return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR" }).format(cents / 100);
}
