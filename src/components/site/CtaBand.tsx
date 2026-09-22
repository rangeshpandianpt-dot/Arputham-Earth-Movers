import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export function CtaBand() {
  return (
    <section className="container-px mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-orange-700 p-10 text-white md:p-14">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-black/20 blur-3xl" />
        <div className="relative grid items-center gap-8 md:grid-cols-[1.5fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              Ready to Start Your Project? 🏗️
            </h2>
            <p className="mt-2 text-lg font-medium" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
              உங்கள் கட்டிட திட்டத்தை தொடங்குங்கள்
            </p>
            <p className="mt-4 max-w-xl text-white/80">
              Whether you need sand/gravel supply, earth excavation, land leveling, or heavy equipment — Arputham Earth Movers is ready 24/7. Contact us today for a free quotation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Button asChild size="lg" className="rounded-full bg-white text-primary font-semibold hover:bg-white/90">
              <Link to="/contact">
                Get Free Quote
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-primary">
              <a href="tel:+919876543210">
                <Phone size={14} className="mr-1" /> Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white hover:text-primary">
              <a href="https://www.instagram.com/arputham_earth_movers/" target="_blank" rel="noreferrer">
                <ArrowRight size={14} className="mr-1" /> Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
