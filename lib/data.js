// ─────────────────────────────────────────────────────────────
//  Everything the site shows lives in this one file.
//  Photos are in /public/images — replace any file with your own
//  photo of the same name, or point an entry at a new file.
// ─────────────────────────────────────────────────────────────

const img = (name) => `/images/${name}.webp`;

// Your live website address (used for SEO, sitemap and link previews).
// Leave NEXT_PUBLIC_SITE_URL empty and the site uses whatever address it is
// opened on; set it in Vercel once you have your own domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

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

// Ready-made WhatsApp messages (what the customer sees typed in their chat box)
export const waMessages = {
  default:
    "Hello Super Furniture! 👋\n\nI visited your website and I'm interested in your furniture.\n\nI'm looking for: \nQuantity: \nMy area: \n\nPlease share designs and prices. Thank you!",
  topics: [
    { label: "Home furniture", icon: "home", text: "Hello Super Furniture! 👋\n\nI'm looking for home furniture (sofa, bed, dining table or dressing table).\n\nPlease share your designs and prices. Thank you!" },
    { label: "Office furniture", icon: "office", text: "Hello Super Furniture! 👋\n\nI need office furniture (desks, office chairs, conference table or storage).\n\nNumber of people / workstations: \n\nPlease share designs and a quote. Thank you!" },
    { label: "Hospital furniture", icon: "hospital", text: "Hello Super Furniture! 👋\n\nI need hospital / clinic furniture (patient beds, waiting chairs or exam couches).\n\nQuantity: \n\nPlease share details and a quote. Thank you!" },
    { label: "Restaurant furniture", icon: "restaurant", text: "Hello Super Furniture! 👋\n\nI'm furnishing a restaurant / café (tables, chairs or bar stools).\n\nNumber of seats: \n\nPlease share designs and a quote. Thank you!" },
    { label: "Visit the showroom", icon: "pin", text: "Hello Super Furniture! 👋\n\nI'd like to visit your showroom at 12, SS Khaled Road. When can I come, and can you share the location? Thank you!" },
  ],
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
// desc + details appear in the product pop-up. Edit freely.
export const products = [
  { name: "Executive Office Chair", cat: "Office", img: img("p-office-chair"), studio: true,
    desc: "High-back ergonomic chair with headrest and adjustable arms, made for long working days.",
    details: ["Breathable mesh back", "Height and tilt adjustment", "Smooth-rolling castors"] },
  { name: "Boucle Lounge Armchair", cat: "Home", img: img("armchair-boucle"),
    desc: "A deep, rounded armchair in soft boucle on a solid wood base — the reading corner piece.",
    details: ["Solid wood frame", "Soft boucle upholstery", "Fabric colour of your choice"] },
  { name: "Low Platform Bed", cat: "Bedroom", img: img("bedroom"),
    desc: "A low, wide platform bed with a calm, grounded look and a sturdy slatted base.",
    details: ["Single, double, queen or king", "Solid wood or laminate finish", "Optional storage drawers"] },
  { name: "Round Dining Set (4 seats)", cat: "Dining", img: img("p-dining-set"), studio: true,
    desc: "Round table with four woven-back chairs; easy to fit in smaller dining areas and cafés.",
    details: ["Seats four comfortably", "Stone-look tabletop", "Matching chairs included"] },
  { name: "Mirror Dressing Console", cat: "Bedroom", img: img("dressing"),
    desc: "Wooden dressing console with a round wall mirror and storage for everyday essentials.",
    details: ["Round mirror included", "Drawer or cabinet storage", "Size made to your wall"] },
  { name: "Work Desk & Chair Set", cat: "Office", img: img("p-office-combo"), studio: true,
    desc: "A clean work desk paired with an ergonomic chair, ready for an office or home study.",
    details: ["Wood-finish desktop", "Steel frame", "Chair included"] },
  { name: "Bentwood Café Chair", cat: "Restaurant", img: img("restaurant-chairs"),
    desc: "Classic bentwood café chair with a woven seat — light, strong and easy to stack.",
    details: ["Bent solid-wood frame", "Woven or padded seat", "Bulk orders for restaurants"] },
  { name: "Patient Bed with Rails", cat: "Hospital", img: img("hospital-ward"),
    desc: "Hospital patient bed with side rails and wheels for wards, clinics and care rooms.",
    details: ["Fold-down side rails", "Lockable castor wheels", "Easy-clean surfaces"] },
  { name: "Tufted Two-Seater Sofa", cat: "Home", img: img("p-sofa"), studio: true,
    desc: "A compact tufted sofa on slim metal legs that suits living rooms and office lounges.",
    details: ["Leather or fabric", "Brass-finish legs", "Two- or three-seater"] },
  { name: "Conference Table (12 seats)", cat: "Office", img: img("p-conference"), studio: true,
    desc: "Long boardroom table for twelve, with matching chairs for meetings and presentations.",
    details: ["Seats up to twelve", "Cable openings on request", "Length made to your room"] },
  { name: "Waiting Room Armchairs", cat: "Hospital", img: img("hospital-waiting"),
    desc: "Comfortable, hard-wearing armchairs for hospital, clinic and office waiting areas.",
    details: ["Easy-clean upholstery", "Strong wooden arms", "Matching side tables"] },
  { name: "Rattan Arm Chair", cat: "Home", img: img("armchair-rattan"),
    desc: "Wooden armchair with rattan side panels and a deep padded cushion.",
    details: ["Solid wood frame", "Natural rattan panels", "Removable cushion"] },
  { name: "Shell Dining Chair", cat: "Dining", img: img("p-dining-chair"), studio: true,
    desc: "Modern shell chair with a padded seat on slim metal legs, for dining rooms and cafés.",
    details: ["Moulded shell seat", "Padded cushion", "Several colours"] },
  { name: "Examination Couch", cat: "Hospital", img: img("hospital-exam"),
    desc: "Padded examination couch for doctor's chambers, clinics and diagnostic rooms.",
    details: ["Adjustable backrest", "Wipe-clean padding", "Storage underneath"] },
  { name: "Communal Dining Table", cat: "Restaurant", img: img("restaurant-cafe"),
    desc: "Long communal table with stools or benches for busy restaurants, cafés and canteens.",
    details: ["Seats eight to sixteen", "Heavy-duty steel base", "Length to your floor plan"] },
  { name: "L-Shaped Office Desk", cat: "Office", img: img("p-ldesk"), studio: true,
    desc: "Corner desk with a side return and storage unit, giving plenty of work surface.",
    details: ["Left or right return", "Built-in storage", "Wood or white finish"] },
  { name: "Solid Wood Coffee Table", cat: "Home", img: img("coffee-table"),
    desc: "Low, chunky coffee table in dark solid wood with softly rounded corners.",
    details: ["Solid wood", "Rounded edges", "Size made to your sofa"] },
  { name: "Oak Storage Cabinet", cat: "Bedroom", img: img("p-cabinet"), studio: true,
    desc: "Two-door cabinet with a herringbone front, for bedrooms, living rooms and offices.",
    details: ["Herringbone wood doors", "Adjustable shelves", "Lockable on request"] },
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
