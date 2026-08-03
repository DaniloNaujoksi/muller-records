import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { apparelProducts, apparelFrom, formatPrice, merchImage } from "@/data/merch";

/**
 * Shirts, one tile per colourway with the cuts and sizes as options underneath.
 *
 * Bandcamp sells every size and cut as a separate product, so rendering the
 * listings one-to-one put six near-identical photographs of the same two shirts
 * on the page. Each option still links to its own listing, which keeps stock
 * per-variant — a sold-out size stays visibly sold out rather than disappearing
 * into a size picker that lies.
 */
export function ApparelGrid() {
  const t = useTranslations("merch");
  const locale = useLocale();

  return (
    <ul className="grid grid-cols-2 gap-px border-t border-rule">
      {apparelProducts.map((product) => {
        const image = merchImage(product.id);
        const from = apparelFrom(product);
        const allGone = product.variants.every((v) => v.soldOut);

        return (
          <li
            key={product.colourway}
            className={clsx("group flex flex-col border-b border-r border-rule", allGone && "opacity-55")}
          >
            <div className="scanlines relative aspect-4/3 overflow-hidden bg-smoke">
              {image && (
                <Image
                  src={image}
                  alt={product.colourway}
                  sizes="50vw"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              )}
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-6">
              <p className="type-label text-blood">{t("apparel.tee")}</p>
              <h3 className="type-heading mt-2 text-lg leading-tight sm:text-2xl">{product.colourway}</h3>
              <p className="type-label mt-3 text-dim">
                {from !== null ? formatPrice(from, locale) : t("soldOut")}
              </p>

              <ul className="mt-6 flex flex-1 flex-wrap items-end gap-2">
                {product.variants.map((variant) => {
                  const label = `${t(`apparel.cut.${variant.cut}`)} ${variant.size}`;

                  return (
                    <li key={variant.id}>
                      {variant.soldOut ? (
                        <span
                          className="type-label flex items-center gap-2 border border-rule px-4 py-2 text-mute line-through decoration-blood"
                          title={t("soldOut")}
                        >
                          {label}
                        </span>
                      ) : (
                        <a
                          href={variant.buyUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="type-label flex items-center gap-2 border border-paper px-4 py-2 transition-colors hover:bg-paper hover:text-ink"
                        >
                          {label}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
