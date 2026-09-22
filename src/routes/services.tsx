import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ServiceGrid } from "@/components/site/ServiceGrid";
import { CtaBand } from "@/components/site/CtaBand";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Arputham Earth Movers" },
      { name: "description", content: "Sand/Gravel supply, earth excavation, land leveling, JCB & excavator rental, truck transport, and site development services." },
      { property: "og:title", content: "Services — Arputham Earth Movers" },
      { property: "og:description", content: "Comprehensive earth moving & sand/gravel supply services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything you need, one fleet away."
          subtitle="From sand delivery to site development — our modern fleet and experienced team handle each stage so your project stays on track."
        />
        <ServiceGrid />
      </section>

      <section className="bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How We Work"
            title="A proven, six-step process"
          />
          <ProcessTimeline />
        </div>
      </section>

      <div className="mt-20">
        <CtaBand />
      </div>
    </>
  );
}
