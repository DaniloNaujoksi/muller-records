import { clsx } from "clsx";
import { artists, type Artist } from "@/data/artists";

/**
 * The roster wall. Headline names get the full cell with their note; the rest
 * run as a dense list, which is closer to how a label prints its own history on
 * a sleeve back than a grid of identical cards would be.
 */
export function ArtistGrid({
  items = artists,
  remixLabel,
}: {
  items?: Artist[];
  remixLabel: string;
}) {
  return (
    <ul className="grid gap-px border-t border-rule md:grid-cols-2 lg:grid-cols-3">
      {items.map((artist) => (
        <li
          key={artist.name}
          className="group relative flex min-h-44 flex-col justify-between border-b border-rule p-6 transition-colors hover:bg-smoke md:border-r"
        >
          <div className="flex items-start justify-between gap-4">
            <h3
              className={clsx(
                "type-heading transition-colors group-hover:text-blood",
                artist.headline ? "text-3xl md:text-4xl" : "text-2xl",
              )}
            >
              {artist.name}
            </h3>
            {artist.role === "remix" && (
              <span className="type-label shrink-0 border border-rule px-2 py-1 text-[0.5625rem] text-mute">
                {remixLabel}
              </span>
            )}
          </div>

          <div className="mt-6">
            {artist.note && <p className="text-sm leading-relaxed text-dim">{artist.note}</p>}
            {artist.origin && <p className="type-label mt-3 text-mute">{artist.origin}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
