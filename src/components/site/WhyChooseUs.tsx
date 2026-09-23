import { Clock, Award, Truck, Wallet, Mountain, Wrench, ShieldCheck, ThumbsUp } from "lucide-react";

const items = [
  { icon: Clock, title: "24/7 Operations", desc: "We work round the clock." },
  { icon: Award, title: "Premium Quality", desc: "Best quality Red-sand, Rock, M-sand, and gravel guaranteed." },
  { icon: Truck, title: "Modern Fleet", desc: "6 wheel (9.5t) and 10 wheel (19.5t) tippers for efficient transport." },
  { icon: Wallet, title: "Competitive Pricing", desc: "Transparent, fair pricing with no hidden charges." },
  { icon: Mountain, title: "On-Time Delivery", desc: "Sand and materials delivered exactly when you need them." },
  { icon: Wrench, title: "Experienced Operators", desc: "Skilled drivers and machine operators with years of expertise." },
  { icon: ShieldCheck, title: "Safety First", desc: "Strict safety protocols for all our equipment and operations." },
  { icon: ThumbsUp, title: "Trusted by 2000+ Clients", desc: "We are your trust." },
];

export function WhyChooseUs() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map(({ icon: Icon, title, desc }) => (
        <div
          key={title}
          className="group flex gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon size={22} />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-charcoal">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
