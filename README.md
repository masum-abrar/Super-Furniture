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

## SEO and link previews

Already set up:

- Page title, description and keywords (`app/layout.js`)
- Link preview image `public/og.jpg`, shown when the site link is shared on Facebook, WhatsApp, Messenger, X or LinkedIn
- Google business info (address, phone, map) as structured data in `app/layout.js`
- `/sitemap.xml`, `/robots.txt`, app icons and a web manifest

**After you go live, do this once:**

1. Set your real website address. In Vercel → Project → Settings → Environment Variables, add
   `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`, then redeploy.
   (On Vercel the project's own `.vercel.app` address is used automatically until you add a domain.)
2. Add the site to Google Search Console (search.google.com/search-console) and submit
   `https://your-domain.com/sitemap.xml`.
3. To refresh the preview on Facebook/Messenger after changes, paste your link into
   developers.facebook.com/tools/debug and click "Scrape Again". WhatsApp updates on its own after a while.

To change the preview picture, replace `public/og.jpg` with another 1200 × 630 image.

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
- Filterable product grid; each product opens a details pop-up (quantity, notes, WhatsApp, call, copy)
- About section with counters, 4-step process, endless image ribbon
- Business band for offices, hospitals and restaurants (bulk quotes)
- Enquiry form that sends to WhatsApp, with no server needed
- Fully responsive; respects "reduce motion"
