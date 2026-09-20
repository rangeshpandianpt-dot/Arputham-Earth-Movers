import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of sand do you supply?",
    a: "We supply premium River Sand, M-Sand (Manufactured Sand), P-Sand (Plastering Sand), and Gravel/Jalli for all types of construction — residential, commercial, and industrial.",
  },
  {
    q: "Do you operate 24/7?",
    a: "Yes! As our tagline says — ஊர் உறங்கும் வேலையில் நாங்கள் உறங்கவதில்லை. We operate round the clock including nights, weekends, and holidays to meet your project deadlines.",
  },
  {
    q: "Which areas do you serve?",
    a: "We primarily serve across Tamil Nadu including Chennai, Madurai, Coimbatore, Theni, Trichy, Salem, and surrounding districts. For large-scale projects, we can extend our service area.",
  },
  {
    q: "What equipment do you have?",
    a: "Our fleet includes Volvo excavators, JCB backhoe loaders, Ashok Leyland tipper trucks, wheel loaders, and compactors. All equipment is well-maintained and operated by experienced professionals.",
  },
  {
    q: "How is pricing calculated?",
    a: "Pricing depends on the type of service (sand supply, excavation, transport), quantity, distance, and site conditions. We provide transparent, itemized quotations with no hidden charges. Contact us for a free estimate.",
  },
];

export function FaqSection() {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left font-display text-base font-semibold text-charcoal hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
