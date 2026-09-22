import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/project-fleet.jpg";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Arputham Earth Movers — excavators and trucks at work"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      <div className="container-px mx-auto max-w-7xl py-20 md:py-28 lg:py-36">
        <ScrollReveal delay={0.1} className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-black/50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            PREMIUM SAND & EXCAVATION
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] text-white md:text-5xl lg:text-6xl">
            Arputham Earth Movers{" "}
            <span className="text-gradie  nt-gold">Sand & Excavation Experts</span>
          </h1>

          <p className="mt-3 text-lg font-medium text-primary/90" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
            அற்புதம் எர்த் மூவர்ஸ்
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            We never sleep while on the job. Premium sand/gravel supply, earth excavation, land leveling, and heavy equipment services across Tamil Nadu.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground shadow-gold hover:opacity-90">
              <Link to="/contact">
                Get Free Quote
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white hover:text-black">
              <a href="tel:+919876543210">
                <Phone size={14} className="mr-1" /> Call Now
              </a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
