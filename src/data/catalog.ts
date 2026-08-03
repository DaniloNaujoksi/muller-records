/**
 * The Müller Records catalogue.
 *
 * Compiled from public sources (Bandcamp, Wikipedia, laut.de, Resident Advisor,
 * press). Discogs blocks automated reads, so the pre-2000 catalogue is thinner
 * here than it is in reality — Frank has the master list and every entry below
 * is meant to be corrected against it. Nothing here is invented: a release only
 * appears if a public source names it.
 *
 * `verified: false` marks entries where the year is an estimate from context
 * rather than a printed date. Render them without a year rather than a wrong one.
 */

export type Release = {
  /** Printed catalogue number, e.g. "Muller 2093". Doubles as the React key. */
  catalog: string;
  title: string;
  /** Lead artist as printed on the sleeve. */
  artist: string;
  /** Remixers and featured artists, in sleeve order. */
  featuring?: string[];
  year?: number;
  verified: boolean;
  /** Label imprint the record came out on. */
  imprint: Imprint;
  format?: "12\"" | "LP" | "CD" | "Digital";
  bandcampUrl?: string;
};

export type Imprint = "muller" | "acid-orange" | "beroshima-music" | "mad-musician";

export const imprints: Record<Imprint, { name: string; founded: number; note: string }> = {
  "acid-orange": {
    name: "Acid Orange",
    founded: 1993,
    note: "The first imprint. Twenty records, and Toktok's debut single among them.",
  },
  muller: {
    name: "Muller Records",
    founded: 1996,
    note: "The main line. Berlin techno with acid DNA, open to Detroit and Tokyo alike.",
  },
  "beroshima-music": {
    name: "Beroshima Music",
    founded: 2000,
    note: "Frank's own artist imprint, opened with the album POP · Pornography Of Performance.",
  },
  "mad-musician": {
    name: "Mad Musician",
    founded: 2020,
    note: "The series that reopened the vault — new work and remixes, numbered from one again.",
  },
};

export const releases: Release[] = [
  // --- Mad Musician series (2020– ) ---
  {
    catalog: "Mad Musician 05",
    title: "The Moment",
    artist: "Frank Müller (Beroshima)",
    featuring: ["Donna Summer"],
    verified: false,
    imprint: "mad-musician",
    format: "Digital",
  },
  {
    catalog: "Mad Musician 03",
    title: "TGV",
    artist: "Frank Müller (Beroshima)",
    featuring: ["Ken Ishii"],
    verified: false,
    imprint: "mad-musician",
    format: "Digital",
  },
  {
    catalog: "Mad Musician 02",
    title: "Horizon & Remixes",
    artist: "Frank Müller (Beroshima)",
    featuring: ["Tigerskin", "Ulrich Schnauss", "Funk D'Void"],
    verified: false,
    imprint: "mad-musician",
    format: "Digital",
  },
  {
    catalog: "Mad Musician 01",
    title: "Emphasis EP",
    artist: "Frank Müller (Beroshima)",
    featuring: ["Kirk Degiorgio"],
    year: 2020,
    verified: false,
    imprint: "mad-musician",
    format: "Digital",
  },

  // --- Müller Records main line ---
  {
    catalog: "Muller 2102",
    title: "DeeBeePhunky",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2101",
    title: "Endlos",
    artist: "Westbam",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2100",
    title: "This Could Be …",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2099",
    title: "essentiel",
    artist: "Steril",
    featuring: ["Latex"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2098",
    title: "Tragedy EP",
    artist: "Beroshima / Frank Müller",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2097",
    title: "Tou Hoku Shin EP",
    artist: "R-04",
    featuring: ["Kei How", "Explain"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2096",
    title: "Lovetrain EP",
    artist: "Beroshima",
    featuring: ["Takkyu Ishino"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2095",
    title: "Telecommande",
    artist: "Indy Toureau",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2094",
    title: "The Lost Frea(k)quencies Vol. 3",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2093",
    title: "Horizon & Remixes",
    artist: "Frank Müller (Beroshima)",
    featuring: ["Tigerskin", "Ulrich Schnauss", "Funk D'Void", "Pig & Dan"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2092",
    title: "Mad Musician",
    artist: "Beroshima / Frank Müller",
    featuring: ["Ken Ishii", "Kirk Degiorgio", "Donna Summer"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2091",
    title: "Real 2 Reel",
    artist: "Frank Müller (Beroshima)",
    featuring: ["Ulrich Schnauss"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2090",
    title: "Good Morning Berlin",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2089",
    title: "Hexaline EP",
    artist: "Frank Müller (Beroshima)",
    featuring: ["Ulrich Schnauss"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2088",
    title: "Encounter EP",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2087",
    title: "Electronic Discussion & Remixes",
    artist: "Beroshima",
    featuring: ["Claude Young", "The Hacker"],
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2083",
    title: "Moonraker EP",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2082",
    title: "Prophets & Whores",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2081",
    title: "Crucial! EP",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2080",
    title: "Dance the Machine",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
  {
    catalog: "Muller 2079",
    title: "Fuck Your Body",
    artist: "Frank Müller (Beroshima)",
    verified: false,
    imprint: "muller",
  },
];

/** Albums that anchor the story, listed apart from the 12" catalogue. */
export const albums = [
  { title: "POP · Pornography Of Performance", artist: "Beroshima", year: 2000 },
  { title: "The Catastrophe Ballet", artist: "Beroshima", year: 2004 },
  { title: "Polyphonication", artist: "Beroshima", year: 2011 },
  { title: "Mad Musician Series 1", artist: "Frank Müller (Beroshima)", year: 2020 },
] as const;
