import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { stats } from "@/data/timeline";

/**
 * The four numbers Frank actually wants a visitor to walk away with. They are
 * deliberately conservative (see data/timeline.ts) — a label that undercounts
 * reads as confident, one that rounds up reads as a press release.
 */
export function StatBand() {
  const t = useTranslations("home.stats");

  const items = [
    { value: `${stats.yearsRunning}`, label: t("years") },
    { value: `${stats.releasesDocumented}+`, label: t("releases") },
    { value: `${stats.artists}+`, label: t("artists") },
    { value: `${stats.imprints}`, label: t("imprints") },
  ];

  return (
    <section className="border-b border-rule">
      <Container wide className="grid grid-cols-2 gap-px lg:grid-cols-4">
        {items.map(({ value, label }) => (
          <div key={label} className="border-b border-rule py-10 lg:border-b-0 lg:border-r lg:pr-8 lg:last:border-r-0">
            <p className="type-display text-[clamp(3rem,7vw,5.5rem)]">{value}</p>
            <p className="type-label mt-3 text-mute">{label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
