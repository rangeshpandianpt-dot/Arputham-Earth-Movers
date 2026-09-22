import {
  Mountain, Truck, Construction, Shovel, Warehouse, HardHat
} from "lucide-react";

export const services = [
  {
    icon: Mountain,
    title: "Sand/Gravel Supply",
    desc: "Premium river sand, M-sand, P-sand, and gravel supply for all types of construction projects across Tamil Nadu.",
  },
  {
    icon: Shovel,
    title: "Earth Excavation",
    desc: "Professional land clearing, foundation digging, trenching, and deep excavation.",
  },
  {
    icon: Construction,
    title: "Land Leveling",
    desc: "Precise grading and leveling of construction sites, agricultural land, and commercial plots.",
  },
  {
    icon: HardHat,
    title: "JCB & Excavator Rental",
    desc: "Hire our fleet of heavy machinery and tipper trucks with experienced operators.",
  },
  {
    icon: Truck,
    title: "Truck Transport",
    desc: "6 wheel (9.5 ton) and 10 wheel (19.5 ton) tipper trucks for sand, gravel, earth, and construction material transport — available 24/7.",
  },
  {
    icon: Warehouse,
    title: "Site Development",
    desc: "Complete site preparation including clearing, excavation, leveling, and ground improvement for construction.",
  },
] as const;
