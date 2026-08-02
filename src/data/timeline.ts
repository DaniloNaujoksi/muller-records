/**
 * Label history. Years are the anchor of the whole "history and impact" page,
 * so every entry here traces to a public source. Copy for each entry lives in
 * messages/{en,de}.json under `history.entries.<id>` — this file only holds the
 * facts that must not drift between languages.
 */

export type TimelineEntry = {
  id: string;
  year: number;
  /** Rendered oversized when true — the beats of the story, not the footnotes. */
  major?: boolean;
};

export const timeline: TimelineEntry[] = [
  { id: "dj", year: 1985 },
  { id: "berlin", year: 1992, major: true },
  { id: "acidOrange", year: 1993, major: true },
  { id: "toktok", year: 1994 },
  { id: "muller", year: 1996, major: true },
  { id: "matadors", year: 1999 },
  { id: "beroshimaMusic", year: 2000, major: true },
  { id: "ballet", year: 2004 },
  { id: "cocoon", year: 2007, major: true },
  { id: "polyphonication", year: 2011 },
  { id: "madMusician", year: 2020, major: true },
];

/** Numbers for the stat band. Deliberately conservative — undercount beats overclaim. */
export const stats = {
  yearsRunning: new Date().getFullYear() - 1996,
  releasesDocumented: 100,
  artists: 20,
  imprints: 4,
} as const;
