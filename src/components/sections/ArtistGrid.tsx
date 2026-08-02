import { clsx } from "clsx";
import { artists, type Artist } from "@/data/artists";

/**
 * Headline names as cards, with the one line that says why they matter.
 *
 * Only a dozen names get this treatment. Running all hundred-odd as cards would
 * be a page of near-empty boxes, since most of the roster has no documented
 * note — see `ArtistList` for the rest.
 */
export function ArtistGrid({ items }: { items: Artist[] }) {
  return (
    <ul className="grid gap-px border-t border-rule md:grid-cols-2 lg:grid-cols-3">
      {items.map((artist) => (
        <li
          key={artist.name}
          className="group flex min-h-44 flex-col justify-between border-b border-rule p-6 transition-colors hover:bg-smoke md:border-r"
        >
          <h3 className="type-heading text-3xl transition-colors group-hover:text-blood md:text-4xl">
            {artist.name}
          </h3>

          <div className="mt-6">
            {artist.note && <p className="text-sm leading-relaxed text-dim">{artist.note}</p>}
            {artist.origin && <p className="type-label mt-3 text-mute">{artist.origin}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

/**
 * The whole roster, dense. This is the argument the site is making — a hundred
 * names in one block reads as weight in a way a paginated grid never would — so
 * it is set as a tight list rather than cards, and it keeps the label's own
 * ordering, which runs roughly through the catalogue's history.
 */
export function ArtistList({ items = artists }: { items?: Artist[] }) {
  return (
    <ul className="grid border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
      {items.map((artist) => (
        <li
          key={artist.name}
          className={clsx(
            "group flex items-baseline justify-between gap-4 border-b border-rule px-1 py-3 transition-colors hover:bg-smoke sm:border-r",
          )}
        >
          <span
            className={clsx(
              "type-heading text-lg leading-tight transition-colors group-hover:text-blood",
              artist.headline && "text-blood",
            )}
          >
            {artist.name}
          </span>
          {artist.origin && (
            <span className="type-label shrink-0 text-mute">{artist.origin}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
