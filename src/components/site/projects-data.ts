import sandDelivery from "@/assets/project-livingroom.jpg";
import excavation from "@/assets/project-bedroom.jpg";
import landLeveling from "@/assets/project-office.jpg";
import truckFleet from "@/assets/project-restaurant.jpg";

export const projects = [
  { name: "River Sand Bulk Delivery", location: "Chennai", category: "Sand Supply", year: 2024, image: sandDelivery },
  { name: "Foundation Excavation — 50ft Deep", location: "Madurai", category: "Excavation", year: 2024, image: excavation },
  { name: "10-Acre Land Leveling", location: "Coimbatore", category: "Site Development", year: 2024, image: landLeveling },
  { name: "Ashok Leyland Fleet Transport", location: "Theni", category: "Transport", year: 2023, image: truckFleet },
  { name: "M-Sand Supply for Apartment Complex", location: "Trichy", category: "Sand Supply", year: 2023, image: sandDelivery },
  { name: "Highway Road Excavation", location: "Salem", category: "Excavation", year: 2022, image: excavation },
] as const;

export const categories = ["All", "Sand Supply", "Excavation", "Transport", "Site Development"] as const;
