import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectsGrid } from "@/components/site/ProjectsGrid";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Fleet & Projects — Arputham Earth Movers" },
      { name: "description", content: "Sand delivery, excavation, land leveling, and transport projects delivered across Tamil Nadu by Arputham Earth Movers." },
      { property: "og:title", content: "Fleet & Projects — Arputham Earth Movers" },
      { property: "og:description", content: "Browse our portfolio of earth moving projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="Fleet & Projects"
          title="Our fleet in action, delivering results"
          subtitle="A selection of our recent sand/gravel supply, excavation, transport, and site development projects across Tamil Nadu."
        />
        <ProjectsGrid showFilter />
      </section>
      <div className="mt-12">
        <CtaBand />
      </div>
    </>
  );
}
