import { useTranslations } from "next-intl";
import { clsx } from "clsx";
import { timeline } from "@/data/timeline";

/**
 * Label history as a vertical rule with the year hanging off it. Major entries
 * get display-size years; the rest stay small, so the eye lands on 1993, 1996,
 * 2000, 2007, 2020 — the beats that actually changed what the label was.
 */
export function Timeline() {
  const t = useTranslations("history.entries");

  return (
    <ol className="relative border-l border-rule">
      {timeline.map((entry) => (
        <li key={entry.id} className="relative pb-14 pl-8 last:pb-0 md:pl-14">
          <span
            aria-hidden
            className={clsx(
              "absolute -left-[4.5px] top-2 h-2 w-2 rounded-full",
              entry.major ? "bg-blood" : "bg-rule",
            )}
          />
          <p
            className={clsx(
              "type-display",
              entry.major ? "text-[clamp(2.5rem,6vw,4.5rem)]" : "text-2xl text-mute",
            )}
          >
            {entry.year}
          </p>
          <h3 className="type-heading mt-3 text-xl md:text-2xl">{t(`${entry.id}.title`)}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-dim md:text-base">
            {t(`${entry.id}.body`)}
          </p>
        </li>
      ))}
    </ol>
  );
}
