// ─────────────────────────────────────────────────────────────
//  Everything the site shows lives in this one file.
//  Photos are in /public/images — replace any file with your own
//  photo of the same name, or point an entry at a new file.
// ─────────────────────────────────────────────────────────────

const img = (name) => `/images/${name}.webp`;

export const brand = {
  name: "Super Furniture",
  tagline: "Unique · Style · Comfort · Quality",
  phone: "01819822833",
  phoneIntl: "+8801819822833",
  whatsapp: "8801819822833", // digits only, used for WhatsApp links
  address: "12, SS Khaled Road",
  city: "Chattogram",
  // "Get directions" button: your Google Maps share link
  mapsUrl: "https://share.google/3UfLEwIURcnftPrKR",
  // Embedded map: what Google Maps should search for (change if the pin is off)
  mapQuery: "12 SS Khaled Road, Chattogram, Bangladesh",
  facebook: "https://facebook.com/",
};

export const waLink = (text) =>
  `https://wa.me/${brand.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Spaces", href: "#spaces" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroSlides = [
  { img: img("hero"), label: "Living", title: "Curved lounge sofa" },
  { img: img("hero-alt"), label: "Bedroom", title: "Low platform bed" },
  { img: img("office-boardroom"), label: "Office", title: "Boardroom table" },
  { img: img("restaurant"), label: "Restaurant", title: "Dining hall seating" },
];

export const services = [
  { icon: "home", title: "Home Furniture", text: "Sofas, beds, dining sets and dressing tables for every room." },
  { icon: "office", title: "Office Furniture", text: "Desks, ergonomic chairs, conference tables and storage." },
  { icon: "hospital", title: "Hospital Furniture", text: "Patient beds, waiting-room seating and exam furniture." },
  { icon: "restaurant", title: "Restaurant Furniture", text: "Café chairs, dining tables and long banquet seating." },
];

// Tabs in the "Shop by space" section
export const spaces = [
  {
    id: "home",
    label: "Home",
    heading: "Warm, lived-in comfort for every room",
    text: "Deep sofas, soft armchairs and solid-wood tables in natural tones that settle into any home.",
    main: img("living"),
    side: [img("sofa-leather"), img("armchair-boucle")],
    tags: ["Sofas", "Armchairs", "Coffee tables", "TV units"],
  },
  {
    id: "bedroom",
    label: "Bedroom",
    heading: "Quiet bedrooms built for rest",
    text: "Platform beds, side tables and dressing tables with clean lines and plenty of storage.",
    main: img("bedroom2"),
    side: [img("bedroom"), img("dressing")],
    tags: ["Beds", "Dressing tables", "Wardrobes", "Side tables"],
  },
  {
    id: "dining",
    label: "Dining",
    heading: "Tables made for long dinners",
    text: "Round and rectangular dining tables with chairs to match, from four seats to twelve.",
    main: img("dining-room"),
    side: [img("dining-chair-table"), img("p-dining-set")],
    tags: ["Dining tables", "Dining chairs", "Sideboards"],
  },
  {
    id: "office",
    label: "Office",
    heading: "Workspaces that keep teams comfortable",
    text: "Executive desks, ergonomic chairs and boardroom tables for offices of any size.",
    main: img("office-boardroom"),
    side: [img("office-lounge"), img("study-desk")],
    tags: ["Desks", "Office chairs", "Conference tables", "File cabinets"],
  },
  {
    id: "hospital",
    label: "Hospital",
    heading: "Durable, easy-clean furniture for care",
    text: "Patient beds, examination couches and waiting-room seating made for daily heavy use.",
    main: img("hospital-lobby"),
    side: [img("hospital-ward"), img("hospital-waiting")],
    tags: ["Patient beds", "Waiting chairs", "Exam couches", "Reception desks"],
  },
  {
    id: "restaurant",
    label: "Restaurant",
    heading: "Seating that fills a room with life",
    text: "Bentwood café chairs, dining tables and long communal benches for restaurants and cafés.",
    main: img("restaurant"),
    side: [img("restaurant-chairs"), img("restaurant-cafe")],
    tags: ["Café chairs", "Dining tables", "Bar stools", "Banquettes"],
  },
];

// studio: true → product shot on a plain background (blends into the card)
export const products = [
  { name: "Executive Office Chair", cat: "Office", img: img("p-office-chair"), studio: true },
  { name: "Boucle Lounge Armchair", cat: "Home", img: img("armchair-boucle") },
  { name: "Low Platform Bed", cat: "Bedroom", img: img("bedroom") },
  { name: "Round Dining Set (4 seats)", cat: "Dining", img: img("p-dining-set"), studio: true },
  { name: "Mirror Dressing Console", cat: "Bedroom", img: img("dressing") },
  { name: "Work Desk & Chair Set", cat: "Office", img: img("p-office-combo"), studio: true },
  { name: "Bentwood Café Chair", cat: "Restaurant", img: img("restaurant-chairs") },
  { name: "Patient Bed with Rails", cat: "Hospital", img: img("hospital-ward") },
  { name: "Tufted Two-Seater Sofa", cat: "Home", img: img("p-sofa"), studio: true },
  { name: "Conference Table (12 seats)", cat: "Office", img: img("p-conference"), studio: true },
  { name: "Waiting Room Armchairs", cat: "Hospital", img: img("hospital-waiting") },
  { name: "Rattan Arm Chair", cat: "Home", img: img("armchair-rattan") },
  { name: "Shell Dining Chair", cat: "Dining", img: img("p-dining-chair"), studio: true },
  { name: "Examination Couch", cat: "Hospital", img: img("hospital-exam") },
  { name: "Communal Dining Table", cat: "Restaurant", img: img("restaurant-cafe") },
  { name: "L-Shaped Office Desk", cat: "Office", img: img("p-ldesk"), studio: true },
  { name: "Solid Wood Coffee Table", cat: "Home", img: img("coffee-table") },
  { name: "Oak Storage Cabinet", cat: "Bedroom", img: img("p-cabinet"), studio: true },
];

export const productFilters = ["All", "Home", "Bedroom", "Dining", "Office", "Hospital", "Restaurant"];

export const steps = [
  { title: "Visit or call", text: "Come to the showroom on SS Khaled Road or call us with the space you want to furnish." },
  { title: "Choose design & size", text: "Pick a design and finish. We adjust sizes to fit your room, office or hall." },
  { title: "We build it", text: "Each piece is made and checked in our workshop before it leaves." },
  { title: "Delivery & setup", text: "We deliver, assemble and place everything where it belongs." },
];

export const sectors = [
  { title: "Bulk orders", text: "Furnish a whole office floor, hospital ward or restaurant in one order." },
  { title: "Made to measure", text: "Desks, tables and beds sized to your floor plan, not a catalogue." },
  { title: "Built for heavy use", text: "Commercial frames and easy-clean upholstery for busy spaces." },
  { title: "One point of contact", text: "From the first visit to installation, one team handles your order." },
];

export const gallery = [
  img("interior-wide"), img("sofa-curved"), img("study-desk"), img("restaurant-lounge"),
  img("dining-chair-table"), img("hospital-lobby"), img("living"), img("office-desk-room"),
];
