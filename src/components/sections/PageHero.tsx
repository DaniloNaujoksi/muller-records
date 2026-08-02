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
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: string;
  /** Sink the record into the background. Reserved for the catalogue. */
  vinyl?: boolean;
}) {
  return (
    <section className="scanlines relative overflow-hidden border-b border-rule pb-16 pt-20 md:pb-24 md:pt-28">
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
