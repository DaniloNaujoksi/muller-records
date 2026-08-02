import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VinylBackdrop } from "@/components/ui/VinylBackdrop";

/** Shared opener for the sub-pages, so every one of them starts on the same grid. */
export function PageHero({
  index,
  label,
  title,
  lede,
  vinyl = false,
  photo,
  photoAlt = "",
  photoPosition = "object-[70%_center]",
  photoOpacity = "opacity-40",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: string;
  /** Sink the record into the background. Reserved for the catalogue. */
  vinyl?: boolean;
  /**
   * Photograph behind the title. Same treatment as the homepage hero —
   * grayscale, 25%, gradient over the top — so a press shot adds depth without
   * ever competing with the headline for the eye.
   */
  photo?: StaticImageData;
  /** Empty by default: a background photograph is decoration to a screen reader. */
  photoAlt?: string;
  /**
   * Object-position class. Note these heroes are far wider than they are tall,
   * and every source photo here is square: `object-cover` scales to the width,
   * so only the *vertical* half of the position does anything. Setting an X
   * offset looks like it works and changes nothing.
   */
  photoPosition?: string;
  /**
   * The sources range from a bright studio sleeve to near-black club shots, so
   * one opacity cannot serve them all: 40% reads as a photograph on the bright
   * ones and as nothing at all on the dark ones.
   */
  photoOpacity?: string;
}) {
  return (
    <section className="scanlines relative overflow-hidden border-b border-rule pb-16 pt-20 md:pb-24 md:pt-28">
      {photo && (
        <div aria-hidden={photoAlt ? undefined : true} className="pointer-events-none absolute inset-0">
          <Image
            src={photo}
            alt={photoAlt}
            fill
            priority
            sizes="100vw"
            className={`object-cover ${photoPosition} ${photoOpacity} grayscale contrast-125`}
          />
          {/* Solid black under the headline, opening up to the right so the
              photograph is actually visible there. At the first pass this ran
              25% under a heavier gradient and the image read as noise. */}
          <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/30" />
          <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/40" />
        </div>
      )}
      {vinyl && <VinylBackdrop />}
      <div aria-hidden className="grid-rules pointer-events-none absolute inset-0 opacity-30" />
      <Container wide className="relative">
        <SectionLabel index={index}>{label}</SectionLabel>
        <h1 className="type-display mt-8 text-[clamp(3rem,10vw,9rem)]">{title}</h1>
        {lede && <p className="mt-8 max-w-2xl text-base leading-relaxed text-dim md:text-lg">{lede}</p>}
      </Container>
    </section>
  );
}
