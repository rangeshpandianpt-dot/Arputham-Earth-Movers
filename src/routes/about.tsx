import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import aboutImg from "@/assets/about.jpg";
import { CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Arputham Earth Movers | அற்புதம் எர்த் மூவர்ஸ்" },
      { name: "description", content: "Learn about Arputham Earth Movers — a Tamil Nadu-based earth moving company providing sand/gravel supply, excavation, and heavy equipment services." },
      { property: "og:title", content: "About — Arputham Earth Movers" },
      { property: "og:description", content: "Our story, mission, and values." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
        <SectionHeading
          eyebrow="About Us"
          title="A decade of moving earth, building trust."
          subtitle="Arputham Earth Movers (அற்புதம் எர்த் மூவர்ஸ்) was founded with a simple promise — to deliver the best quality sand and earth moving services with honesty, reliability, and round-the-clock dedication."
        />
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <img
            src={aboutImg}
            alt="Arputham Earth Movers team"
            loading="lazy"
            className="rounded-2xl object-cover shadow-elegant"
          />
          <div>
            <h3 className="font-display text-2xl font-semibold text-charcoal">Our story</h3>
            <p className="mt-4 text-charcoal/75 leading-relaxed">
              From a single truck to a fleet of 50+ vehicles, Arputham Earth Movers has grown 
              into one of Tamil Nadu's most trusted earth moving companies. Our work spans 
              sand/gravel supply, earth excavation, land leveling, and heavy equipment services — 
              the same standard of care and commitment that earned us our reputation.
            </p>
            <p className="mt-4 text-charcoal/75 leading-relaxed" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
              ஊர் உறங்கும் வேலையில் நாங்கள் உறங்கவதில்லை — உங்கள் கனவு கட்டிடத்திற்கு நம்பிக்கை நாங்கள் ✨
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "50+ Fleet Vehicles",
                "6 & 10 Wheel Tippers",
                "Competitive Pricing",
                "24/7 Operations",
                "19.5 Ton & 9.5 Ton Capacity",
                "2000+ Happy Clients",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm text-charcoal/80">
                  <CheckCircle2 size={16} className="text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Button asChild className="mt-8 rounded-full bg-primary text-primary-foreground hover:opacity-90">
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-20">
        <div className="container-px mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, t: "Our Mission", d: "Deliver premium-quality sand and earth moving services with reliability, transparency, and 24/7 availability." },
              { icon: Eye, t: "Our Vision", d: "To be Tamil Nadu's most trusted earth moving and sand/gravel supply company." },
              { icon: Heart, t: "Our Values", d: "Hard work, honesty, and customer satisfaction drive every truckload we deliver and every site we work on." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-charcoal">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-20">
        <CtaBand />
      </div>
    </>
  );
}
