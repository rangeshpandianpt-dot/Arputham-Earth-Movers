const steps = [
  { n: "01", title: "Contact & Requirement", desc: "Share your project details — sand quantity, excavation depth, site location, and timeline." },
  { n: "02", title: "Site Survey", desc: "Our team visits your site to assess conditions, access routes, and equipment needs." },
  { n: "03", title: "Quotation & Planning", desc: "Transparent quotation with itemized costs for equipment, materials, and transport." },
  { n: "04", title: "Equipment Deployment", desc: "Our fleet of Volvo excavators, JCBs, and Ashok Leyland trucks arrives on schedule." },
  { n: "05", title: "Execution", desc: "Skilled operators execute the work with precision — excavation, leveling, or sand delivery." },
  { n: "06", title: "Completion & Cleanup", desc: "Work site cleaned and handed over. Your project is ready for the next phase." },
];

export function ProcessTimeline() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((s) => (
        <div
          key={s.n}
          className="relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant"
        >
          <div className="absolute -right-3 -top-4 font-display text-7xl font-bold text-primary/10">
            {s.n}
          </div>
          <div className="relative">
            <div className="font-display text-2xl font-semibold text-primary">{s.n}</div>
            <h3 className="mt-3 font-display text-lg font-semibold text-charcoal">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
