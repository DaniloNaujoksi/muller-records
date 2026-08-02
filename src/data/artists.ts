/**
 * The full roster, as supplied by the label.
 *
 * Frank's brief was "how many great artists have released here" — so this list
 * is the point of the site, not decoration. The order is his and is preserved
 * deliberately; it runs roughly chronologically through the label's history and
 * re-sorting it alphabetically would throw that away.
 *
 * Earlier versions of this file split the roster into full releases and remix
 * credits. The supplied list does not make that distinction, and guessing which
 * of a hundred names remixed rather than released would have been invention, so
 * the split is gone. If Frank has that breakdown, it can come back as a `role`
 * field.
 *
 * `note` and `origin` are only filled where a public source backs them. A blank
 * is honest; a plausible-sounding invention on a label's own site is not.
 */

export type Artist = {
  name: string;
  /** City or country. Only where it is documented. */
  origin?: string;
  /** One factual line on why the name matters. Never hype, never guessed. */
  note?: string;
  /** Shown on the homepage: names a first-time visitor should recognise. */
  headline?: boolean;
};

export const artists: Artist[] = [
  {
    name: "Beroshima",
    origin: "Berlin",
    note: "Frank Müller's own project, and the reason the label exists.",
  },
  { name: "Robotnik" },
  { name: "Frank Muller", origin: "Berlin" },
  {
    name: "TokTok",
    origin: "Berlin",
    note: "Debut single released on Acid Orange in 1994.",
  },
  { name: "R-Zac (Arzach)" },
  { name: "Kopftanz" },
  { name: "Christina Weers" },
  { name: "I-F (Frank Castle)", origin: "The Hague" },
  { name: "Frank Martinique" },
  { name: "DJ Ratzki" },
  { name: "Unit Moebius", origin: "The Hague" },
  { name: "Curley (R.I.P.)" },
  { name: "SP 23 (Spiral Tribe)" },
  { name: "C-14" },
  { name: "Dr. Walker", origin: "Cologne" },
  {
    name: "Air Liquide",
    origin: "Cologne / Frankfurt",
    note: "Ingmar Koch and Cem Oral. The acid end of German electronics.",
    headline: true,
  },
  { name: "Frank Heiss (R.I.P.)" },
  { name: "Sylvie Marks", origin: "Berlin" },
  { name: "Psycho Plasma" },
  { name: "DJ Bastian" },
  { name: "Tom Clark (X-Men)" },
  {
    name: "Ulrich Schnauss",
    origin: "Berlin",
    note: "Shoegaze in synth form. Recurring collaborator across the catalogue.",
    headline: true,
  },
  { name: "Autotune", origin: "Berlin" },
  { name: "Andre Michelle" },
  { name: "Korsakov" },
  { name: "Dave DK", origin: "Berlin" },
  { name: "Jana Clemen" },
  { name: "Denard Henry" },
  { name: "Paul Davis" },
  { name: "DJ Disko" },
  { name: "DJ Rok", origin: "Berlin" },
  { name: "DJ Jonzon" },
  { name: "Tina 303" },
  {
    name: "Electric Indigo",
    origin: "Vienna",
    note: "Founded female:pressure in 1998.",
    headline: true,
  },
  { name: "Cassy", origin: "Vienna / Berlin" },
  { name: "Daniel Lodig" },
  {
    name: "Takkyu Ishino",
    origin: "Tokyo",
    note: "Denki Groove. Shared the Matadors Of Techno record with Beroshima.",
    headline: true,
  },
  { name: "Takashi Watanabe", origin: "Japan" },
  {
    name: "Claude Young",
    origin: "Detroit",
    note: "Detroit second wave, one of the fastest hands to ever touch three decks.",
    headline: true,
  },
  { name: "Hiroaki Iizuka", origin: "Japan" },
  { name: "Ray Kajioka", origin: "Japan / Berlin" },
  { name: "DJ Treplec" },
  {
    name: "John Selway",
    origin: "New York",
    note: "New York techno, Disturbance and Sync Research.",
    headline: true,
  },
  {
    name: "The Hacker",
    origin: "Grenoble",
    note: "The electro-body axis of French techno.",
    headline: true,
  },
  {
    name: "Miss Kittin",
    origin: "Grenoble",
    note: "The voice on a decade of electroclash records.",
    headline: true,
  },
  { name: "David Hausdorf" },
  { name: "Latex", origin: "Berlin" },
  { name: "Steril", origin: "Germany" },
  { name: "DJ LA.DI.DA" },
  { name: "Sierra Sam (CYRK)" },
  { name: "David Dummy" },
  { name: "Jammin Unit", origin: "Cologne" },
  { name: "Kerosene" },
  { name: "Pink Freud aka Renato Garga (R.I.P.)" },
  { name: "Case Woo" },
  { name: "Divider" },
  { name: "Atsushi Nishikami", origin: "Japan" },
  { name: "Khan / Captain Comatose", origin: "Cologne / New York" },
  { name: "Gwem" },
  { name: "Der Tante Renate", origin: "Berlin" },
  { name: "Kram" },
  { name: "Tobiah" },
  { name: "Lab Insect" },
  { name: "L.A. Williams", origin: "Detroit" },
  { name: "Romina Cohn", origin: "Rome / Berlin" },
  { name: "DJ Schild" },
  { name: "Mauricio Lopes" },
  { name: "DJ Mau Mau" },
  { name: "Kagami", origin: "Tokyo" },
  { name: "Yuri Suzuki", origin: "Japan" },
  { name: "DJ B.Cult" },
  { name: "Alex Bau", origin: "Germany" },
  { name: "Hawkinson" },
  { name: "Akiko Kiyama", origin: "Tokyo" },
  { name: "Mutron" },
  { name: "2 Raum Wohnung", origin: "Berlin" },
  { name: "DJ Tasaka", origin: "Tokyo" },
  { name: "DJ Siasia" },
  { name: "Funk D'Void", origin: "Glasgow", note: "Soma Records." },
  { name: "Bill Youngman" },
  { name: "Christian Steinmüller" },
  {
    name: "Kirk Degiorgio",
    origin: "London",
    note: "As One, Applied Rhythmic Technology. Detroit's British correspondent.",
  },
  { name: "Tigerskin", origin: "Dresden", note: "Deep house with a techno spine." },
  {
    name: "Ken Ishii",
    origin: "Tokyo",
    note: "The producer who put Japanese techno on the world map.",
    headline: true,
  },
  { name: "3 Tone Dorsal Fin" },
  { name: "Hiroyuki Arakawa", origin: "Japan" },
  { name: "Darbinyan" },
  { name: "Hideki Kato", origin: "Japan" },
  { name: "Pascal Hetzel" },
  { name: "Rummy Sharma" },
  { name: "Namito", origin: "Berlin" },
  { name: "Alexander Kowalski", origin: "Berlin" },
  { name: "Darko Esser", origin: "Netherlands" },
  { name: "Analog People" },
  { name: "A.Mochi", origin: "Japan" },
  { name: "Hiroshi Watanabe (Kaito)", origin: "Tokyo" },
  { name: "Mijk van Dijk", origin: "Berlin" },
  { name: "Sugiurumn", origin: "Tokyo" },
  { name: "Pig & Dan", origin: "Mallorca" },
  { name: "Toureau" },
  { name: "Felix Bernhardt" },
  { name: "Vicky Montefusco" },
  {
    name: "Rødhåd",
    origin: "Berlin",
    note: "Dystopian.",
    headline: true,
  },
  {
    name: "Marcel Dettmann",
    origin: "Berlin",
    note: "Berghain resident, Ostgut Ton.",
    headline: true,
  },
  { name: "R-04", origin: "Japan" },
  { name: "Kei How", origin: "Japan" },
  {
    name: "Westbam",
    origin: "Berlin",
    note: "Low Spirit, Mayday, and half of what German techno means in public.",
    headline: true,
  },
  { name: "Henning Baer", origin: "Berlin" },
  { name: "Somewhen", origin: "Berlin" },
  { name: "Tijana T", origin: "Belgrade" },
];

export const headlineArtists = artists.filter((a) => a.headline);

export const artistCount = artists.length;
