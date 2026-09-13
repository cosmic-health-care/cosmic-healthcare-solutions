import { Reveal } from "@/components/shared/reveal";
import { ServicesGrid } from "@/components/sections/services-grid";

export function ServicesOverview() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          What we do
        </span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
          Full-lifecycle support for your equipment
        </h2>
        <p className="mt-4 text-muted-foreground">
          From first purchase to daily upkeep, we cover every stage of your
          hospital equipment&apos;s life — sourced through our vetted partner
          network and backed by biomedical engineering expertise.
        </p>
      </Reveal>

      <ServicesGrid />
    </section>
  );
}
