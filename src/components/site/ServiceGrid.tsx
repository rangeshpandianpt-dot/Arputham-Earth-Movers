import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { services } from "./services-data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map(({ icon: Icon, title, desc }, idx) => (
        <ScrollReveal key={title} delay={idx * 0.1}>
          <div
            className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon size={22} />
            </div>
            <h3 className="font-display text-lg font-semibold text-charcoal">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            <Link
              to="/services"
              className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary"
            >
              Learn more <ArrowRight size={14} />
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
