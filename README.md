# Super Furniture — Landing Page (Next.js)

Light, premium landing page for **Super Furniture** — home, office, hospital and restaurant furniture.
Showroom: 12, SS Khaled Road · Phone / WhatsApp: 01819822833

## Run it

```bash
npm install
npm run dev      # open http://localhost:3000
```

Go live: `npm run build && npm start`, or upload the folder to Vercel (free) and it deploys automatically.

## Change the content

Everything on the page is in **`lib/data.js`**:

| What | Where in `lib/data.js` |
|---|---|
| Phone, WhatsApp, address, Facebook link | `brand` |
| Hero slideshow photos | `heroSlides` |
| The six "Shop by space" tabs | `spaces` |
| Product cards and filters | `products` |
| How-it-works steps | `steps` |
| Business band cards | `sectors` |
| Image ribbon | `gallery` |

## Photos

All photos are in `public/images/`. To use your own photo, save it over a file with the same name
(for example `public/images/dressing.webp`), or add a new file and change the path in `lib/data.js`.
Any format works (`.jpg`, `.png`, `.webp`) as long as the path matches.

Product photos marked `studio: true` are plain-background shots; they blend into the card colour.
Your own product photos on a white background will look the same.

The furniture photos come from Odoo's open-source website themes and product demo data
(github.com/odoo/design-themes and github.com/odoo/odoo, LGPL-3.0). Replacing them with photos of
your own products over time is recommended.

## What's inside

- Logo intro, then a framed hero with an auto-playing slideshow (Living, Bedroom, Office, Restaurant)
- Smooth scrolling (Lenis) and scroll-triggered reveals (Framer Motion)
- Services strip with self-drawing icons
- "Shop by space" tabs: Home, Bedroom, Dining, Office, Hospital, Restaurant
- Filterable product grid; every product opens WhatsApp with its name pre-filled
- About section with counters, 4-step process, endless image ribbon
- Business band for offices, hospitals and restaurants (bulk quotes)
- Enquiry form that sends to WhatsApp, with no server needed
- Fully responsive; respects "reduce motion"
