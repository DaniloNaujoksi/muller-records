/**
 * Artists who have released or remixed on a Müller imprint.
 *
 * Frank's brief was "how many great artists have released here" — so this list
 * is the point of the site, not decoration. Every name below is attested by a
 * public source (Wikipedia, laut.de, Resident Advisor, Bandcamp credits).
 * `role` separates a full release from a remix credit, because conflating the
 * two is exactly the kind of thing a label gets called out for.
 *
 * `origin` is a city or country, used for the "from where" line under the name.
 */

export type Artist = {
  name: string;
  origin?: string;
  role: "release" | "remix";
  /** Short line of why the name matters. Keep it factual, not hype. */
  note?: string;
  /** Set for names a first-time visitor should recognise instantly. */
  headline?: boolean;
};

export const artists: Artist[] = [
  {
    name: "Claude Young",
    origin: "Detroit",
    role: "release",
    note: "Detroit second wave, one of the fastest hands to ever touch three decks.",
    headline: true,
  },
  {
    name: "The Hacker",
    origin: "Grenoble",
    role: "release",
    note: "The electro-body axis of French techno.",
    headline: true,
  },
  {
    name: "John Selway",
    origin: "New York",
    role: "release",
    note: "New York techno, Disturbance and Sync Research.",
    headline: true,
  },
  {
    name: "Ken Ishii",
    origin: "Tokyo",
    role: "release",
    note: "The producer who put Japanese techno on the world map.",
    headline: true,
  },
  {
    name: "Takkyu Ishino",
    origin: "Tokyo",
    role: "release",
    note: "Denki Groove. Shared the Matadors Of Techno record with Beroshima.",
    headline: true,
  },
  {
    name: "Westbam",
    origin: "Berlin",
    role: "release",
    note: "Low Spirit, Mayday, and half of what German techno means in public.",
    headline: true,
  },
  {
    name: "Air Liquide",
    origin: "Cologne / Frankfurt",
    role: "release",
    note: "Ingmar Koch and Cem Oral. The acid end of German electronics.",
    headline: true,
  },
  {
    name: "Ulrich Schnauss",
    origin: "Berlin",
    role: "release",
    note: "Shoegaze in synth form. Recurring collaborator across the catalogue.",
    headline: true,
  },
  {
    name: "Kirk Degiorgio",
    origin: "London",
    role: "release",
    note: "As One, Applied Rhythmic Technology. Detroit's British correspondent.",
  },
  { name: "Rok", origin: "Berlin", role: "release" },
  { name: "Autotune", origin: "Berlin", role: "release" },
  { name: "Latex", origin: "Berlin", role: "release" },
  { name: "Steril", origin: "Germany", role: "release" },
  { name: "Indy Toureau", role: "release" },
  { name: "R-04", origin: "Japan", role: "release" },
  { name: "Kei How", origin: "Japan", role: "release" },
  { name: "Explain", origin: "Japan", role: "release" },
  {
    name: "Tigerskin",
    origin: "Dresden",
    role: "remix",
    note: "Deep house with a techno spine.",
  },
  { name: "Funk D'Void", origin: "Glasgow", role: "remix", note: "Soma Records." },
  { name: "Pig & Dan", origin: "Mallorca", role: "remix" },
  {
    name: "Donna Summer",
    role: "remix",
    note: "Jason Forrest's breakcore alias — not the disco singer.",
  },
  { name: "Golden Boy", origin: "Berlin", role: "remix" },
  {
    name: "Toktok",
    origin: "Berlin",
    role: "release",
    note: "Debut single released on Acid Orange in 1994.",
  },
];

export const headlineArtists = artists.filter((a) => a.headline);

export const artistCount = artists.length;
