import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const testimonials = [
  {
    name: "Murugan K.",
    project: "Sand Supply — 200 Loads",
    text: "Arputham Earth Movers delivered 200 loads of river sand for our apartment project on time. Best quality sand in the region — truly the KING OF SAND! 👑",
  },
  {
    name: "Senthil R.",
    project: "Foundation Excavation",
    text: "Their Volvo excavators made our deep foundation work look effortless. Professional operators, no delays, and excellent communication throughout.",
  },
  {
    name: "Karthikeyan P.",
    project: "Land Leveling — 5 Acres",
    text: "We needed 5 acres leveled for a commercial project. Arputham's team finished ahead of schedule. Their JCBs and trucks work like a well-oiled machine.",
  },
];

export function Testimonials() {
  return (
    <Carousel opts={{ loop: true, align: "start" }} className="mx-auto max-w-5xl">
      <CarouselContent>
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="md:basis-1/2">
            <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Quote className="text-primary" size={28} />
              <p className="mt-4 text-base leading-relaxed text-charcoal/80">"{t.text}"</p>
              <div className="mt-5 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <div className="mt-4">
                <div className="font-display text-base font-semibold text-charcoal">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.project}</div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
