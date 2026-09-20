import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Arputham Earth Movers" },
      { name: "description", content: "Get a free quotation. Call +91 98765 43210 or send us a project inquiry for sand supply, excavation, and transport." },
      { property: "og:title", content: "Contact — Arputham Earth Movers" },
      { property: "og:description", content: "Reach our team for quotes and consultations." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <SectionHeading
        eyebrow="Contact Us"
        title="Let's discuss your project."
        subtitle="Share a few details and our team will get back within 24 hours with a free quotation."
      />

      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold text-charcoal">Reach us</h3>
            <ul className="mt-4 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-charcoal/80">
                  Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <a href="tel:+919876543210" className="text-charcoal/80 hover:text-primary">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:arputham.earthmovers@gmail.com" className="text-charcoal/80 hover:text-primary">
                  arputham.earthmovers@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="text-primary" />
                <a href="https://www.instagram.com/arputham_earth_movers/" target="_blank" rel="noreferrer" className="text-charcoal/80 hover:text-primary">
                  @arputham_earth_movers
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-primary" />
                <span className="text-charcoal/80">24/7 — We never sleep on the job 💪</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-lg font-semibold text-charcoal">Follow us on Instagram</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              See our latest projects, fleet, and behind-the-scenes action on Instagram.
            </p>
            <a
              href="https://www.instagram.com/arputham_earth_movers/"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              <Instagram size={16} /> @arputham_earth_movers
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
