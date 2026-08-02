import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { merch, formatPrice } from "@/data/merch";
import { LogoMark } from "@/components/ui/Logo";

/**
 * Merch showcase. No cart, no checkout — `buyUrl` hands off to an external shop,
 * and an item without one renders as a teaser rather than a broken button. That
 * is a deliberate scope decision, not an unfinished feature: see data/merch.ts.
 *
 * The product image slot currently holds the logo mark on black. It reads as
 * intentional on a label site and it is the right shape to swap real photos into.
 */
export function MerchGrid() {
  const t = useTranslations("merch");
  const locale = useLocale();

  return (
    <ul className="grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
      {merch.map((item) => {
        const price = formatPrice(item.priceCents, locale);

        return (
          <li key={item.id} className="group border-b border-rule sm:border-r">
            <div className="scanlines relative flex aspect-square items-center justify-center overflow-hidden bg-smoke">
              <div aria-hidden className="grid-rules pointer-events-none absolute inset-0 opacity-30" />
              <LogoMark className="relative h-28 text-rule transition-colors duration-500 group-hover:text-blood" />
            </div>

            <div className="flex items-start justify-between gap-4 p-6">
              <div>
                <h3 className="type-heading text-xl">{t(`items.${item.id}.name`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{t(`items.${item.id}.blurb`)}</p>
              </div>
              <p className="type-label shrink-0 text-dim">{price ?? t("tbd")}</p>
            </div>

            <div className="px-6 pb-6">
              {item.available && item.buyUrl ? (
                <a
                  href={item.buyUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="type-label flex w-fit items-center gap-2 border border-paper px-5 py-3 transition-colors hover:bg-paper hover:text-ink"
                >
                  {t("buy")}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <p className="type-label border border-rule px-5 py-3 text-center text-mute">
                  {t("soon")}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
