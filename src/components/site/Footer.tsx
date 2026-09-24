import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary text-primary-foreground font-display text-lg font-bold">
                A
              </div>
              <div className="leading-tight">
                <div className="font-display text-lg font-semibold">Arputham</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Earth Movers
                </div>
              </div>
            </div>
            <p className="mt-2 text-sm text-primary/80 font-medium" style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}>
              அற்புதம் எர்த் மூவர்ஸ்
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Premium sand/gravel supply, earth excavation, land leveling, and heavy equipment services across Tamil Nadu. We work 24/7.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://www.instagram.com/arputham_earth_movers/"
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-charcoal/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="tel:+919443168713"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-charcoal/70 transition-colors hover:bg-primary hover:text-primary-foreground"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                { to: "/about", label: "About Us" },
                { to: "/projects", label: "Fleet & Projects" },
                { to: "/gallery", label: "Gallery" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Sand/Gravel Supply</li>
              <li>Earth Excavation</li>
              <li>Land Leveling</li>
              <li>JCB & Excavator Rental</li>
              <li>Truck Transport</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold">Get in Touch</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>Kavalkinaru, Tirunelveli District, Tamil Nadu – 627105, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary" />
                <a href="tel:+919443168713" className="hover:text-primary">
                  +91 94431 68713
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary" />
                <a href="mailto:arputhamearthmovers713@gmail.com" className="hover:text-primary">
                  arputhamearthmovers713@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={16} className="text-primary" />
                <a href="https://www.instagram.com/arputham_earth_movers/" target="_blank" rel="noreferrer" className="hover:text-primary">
                  @arputham_earth_movers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© 2026 Arputham Earth Movers (அற்புதம் எர்த் மூவர்ஸ்). All Rights Reserved.</p>
          <p>Arputham Earth Movers — Sand/Gravel Supply & Earth Moving Experts.</p>
        </div>
      </div>
    </footer>
  );
}
