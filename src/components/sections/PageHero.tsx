import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

/**
 * Shared opener for the sub-pages, so every one of them starts on the same
 * grid. Once a full-height display headline with a photograph behind it; cut
 * down to a single label strip on the label's call — the page title lives on
 * in a visually hidden h1 for readers and crawlers, and the content starts
 * directly under the menu.
 */
export function PageHero({
  index,
  label,
  title,
}: {
  index: string;
  label: string;
  title: React.ReactNode;
}) {
  return (
    <section className="border-b border-rule">
      <Container wide className="py-6">
        <SectionLabel index={index}>{label}</SectionLabel>
        <h1 className="sr-only">{title}</h1>
      </Container>
    </section>
  );
}
