import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { formatPrice, merchImage, type MerchItem } from "@/data/merch";
import { LogoMark } from "@/components/ui/Logo";

/**
 * Merch tiles, fed straight from the Bandcamp listings. There is no cart here
 * by design: every buy button leaves for the shop that already handles VAT,
 * shipping and returns, so this site never holds an order or a card number.
 *
 * Sold-out items still render — a label's back catalogue selling out is worth
 * showing — but muted and without a button, so nothing on the page looks
 * clickable when it is not.
 *
 * Product photography stays in colour, unlike the press shots: these are sleeve
 * scans and garment photos where the actual colour is the thing being sold.
 */
export function MerchGrid({ items }: { items: MerchItem[] }) {
  const t = useTranslations("merch");
  const locale = useLocale();

  return (
    <ul className="grid gap-px border-t border-rule sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const price = formatPrice(item.priceCents, locale);
        const image = merchImage(item.id);

        return (
          <li
            key={item.id}
            className={clsx(
              "group flex flex-col border-b border-rule sm:border-r",
              item.soldOut && "opacity-55",
            )}
          >
            <div className="scanlines relative aspect-square overflow-hidden bg-smoke">
              {image ? (
                <Image
                  src={image}
                  alt={item.title}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <LogoMark className="h-24 text-rule" />
                </div>
              )}
              {item.variant && (
                <span className="type-label absolute left-0 top-0 bg-ink/85 px-3 py-2 text-dim backdrop-blur-sm">
                  {item.variant}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              {item.catalog && <p className="type-label text-blood">{item.catalog}</p>}
              <h3 className="type-heading mt-2 text-xl leading-tight">{item.title}</h3>
              {item.artist && <p className="mt-2 text-sm text-mute">{item.artist}</p>}

              <div className="mt-6 flex flex-1 items-end justify-between gap-4">
                <p className="type-label text-dim">{price ?? "—"}</p>
                {item.soldOut ? (
                  <span className="type-label border border-rule px-4 py-2 text-mute">
                    {t("soldOut")}
                  </span>
                ) : (
                  <a
                    href={item.buyUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="type-label flex items-center gap-2 border border-paper px-4 py-2 transition-colors hover:bg-paper hover:text-ink"
                  >
                    {t("buy")}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
