import { useFormatter } from "next-intl";
import { clsx } from "clsx";
import { releases, imprints, type Release } from "@/data/catalog";

/**
 * The catalogue as a pressing sheet: catalogue number left, title, artist,
 * credits, year right. A real <table> — this is tabular data, and screen
 * readers should be told so.
 *
 * Unverified years render as an em dash rather than a guess. See data/catalog.ts.
 */
export function CatalogTable({
  items = releases,
  labels,
  showImprint = true,
}: {
  items?: Release[];
  labels: { catalog: string; title: string; artist: string; credits: string; year: string; imprint: string };
  /** Off when the table is already grouped under an imprint heading. */
  showImprint?: boolean;
}) {
  const format = useFormatter();

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[52rem] border-collapse text-left">
        <caption className="sr-only">{labels.catalog}</caption>
        <thead>
          <tr className="type-label border-b border-rule text-mute">
            <th scope="col" className="w-40 py-4 pr-6 font-medium">{labels.catalog}</th>
            <th scope="col" className="py-4 pr-6 font-medium">{labels.title}</th>
            <th scope="col" className="py-4 pr-6 font-medium">{labels.artist}</th>
            <th scope="col" className="py-4 pr-6 font-medium">{labels.credits}</th>
            <th scope="col" className="w-24 py-4 text-right font-medium">{labels.year}</th>
          </tr>
        </thead>
        <tbody>
          {items.map((release) => (
            <tr
              key={release.catalog}
              className="group border-b border-rule align-top transition-colors hover:bg-smoke"
            >
              <td className="py-5 pr-6">
                <span className="text-sm text-blood">{release.catalog}</span>
                {showImprint && (
                  <span className="mt-1 block text-[0.6875rem] uppercase tracking-widest text-mute">
                    {imprints[release.imprint].name}
                  </span>
                )}
              </td>
              <td className="py-5 pr-6">
                <span className="type-heading text-xl transition-colors group-hover:text-blood md:text-2xl">
                  {release.title}
                </span>
              </td>
              <td className="py-5 pr-6 text-sm text-dim">{release.artist}</td>
              <td className="py-5 pr-6 text-sm text-mute">
                {release.featuring?.join(", ") ?? "—"}
              </td>
              <td className={clsx("py-5 text-right text-sm", release.year ? "text-dim" : "text-mute")}>
                {release.year ? format.number(release.year, { useGrouping: false }) : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
