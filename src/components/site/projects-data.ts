import sandDelivery from "@/assets/project-sand.jpg";
import excavation from "@/assets/project-excavation.jpg";
import landLeveling from "@/assets/project-leveling.jpg";
import truckFleet from "@/assets/project-fleet.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import heroImg from "@/assets/hero.jpg";
import aboutImg from "@/assets/about.jpg";

export const projects = [
  { name: "Sand/Gravel Bulk Delivery", location: "Chennai", category: "Sand/Gravel Supply", year: 2026, image: sandDelivery },
  { name: "Foundation Excavation — 50ft Deep", location: "Madurai", category: "Excavation", year: 2025, image: excavation },
  { name: "2-Acre Land Leveling", location: "Coimbatore", category: "Site Development", year: 2024, image: landLeveling },
  { name: "10 Wheel Tipper Transport", location: "Theni", category: "Transport", year: 2023, image: truckFleet },
  { name: "Mining Process", location: "Salem", category: "Excavation", year: 2022, image: gallery2 },
  { name: "Commercial Site Preparation", location: "Tirunelveli", category: "Site Development", year: 2023, image: gallery3 },
  { name: "Excavation Process", location: "Erode", category: "Excavation", year: 2024, image: gallery4 },
  { name: "Agricultural Land Leveling", location: "Dindigul", category: "Site Development", year: 2023, image: gallery5 },
  { name: "Gravel Supply for Road Work", location: "Kanyakumari", category: "Sand/Gravel Supply", year: 2022, image: gallery6 },
  { name: "Deep Trench Excavation", location: "Nagercoil", category: "Excavation", year: 2024, image: gallery7 },
  { name: "Red Sand Transport", location: "Thoothukudi", category: "Transport", year: 2023, image: gallery8 },
  { name: "Industrial Plot Clearing", location: "Hosur", category: "Site Development", year: 2022, image: gallery9 },
  { name: "Heavy Machinery Operations", location: "Karur", category: "Transport", year: 2024, image: heroImg },
  { name: "Earth Moving for Residential Area", location: "Vellore", category: "Site Development", year: 2023, image: aboutImg },
] as const;

export const categories = ["All", "Sand/Gravel Supply", "Excavation", "Transport", "Site Development"] as const;
