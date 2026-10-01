import "./globals.css";
import { brand, SITE_URL } from "@/lib/data";

const title = "Super Furniture — Home, Office, Hospital & Restaurant Furniture in Chattogram";
const description =
  "Super Furniture designs, builds and delivers furniture for homes, offices, hospitals and restaurants — sofas, beds, dining sets, dressing tables, office desks and chairs, made to your size. Showroom at 12, SS Khaled Road. Call 01819822833.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: "%s | Super Furniture" },
  description,
  applicationName: "Super Furniture",
  keywords: [
    "Super Furniture",
    "furniture shop Chattogram",
    "furniture Chittagong",
    "SS Khaled Road furniture",
    "office furniture Bangladesh",
    "hospital furniture",
    "restaurant furniture",
    "sofa",
    "bed",
    "dining table",
    "dressing table",
    "office chair",
    "custom furniture",
  ],
  authors: [{ name: "Super Furniture" }],
  creator: "Super Furniture",
  publisher: "Super Furniture",
  category: "Furniture",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Super Furniture",
    title: "Super Furniture — Furniture for every space you live and work in",
    description:
      "Home, office, hospital and restaurant furniture made to your size. Showroom at 12, SS Khaled Road · 01819822833",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Super Furniture — curved lounge sofa in a warm, modern living room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Furniture — Furniture for every space you live and work in",
    description: "Home, office, hospital and restaurant furniture made to your size. Call 01819822833.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    apple: "/apple-touch-icon.png",
  },
  formatDetection: { telephone: true, address: true },
  other: { "geo.region": "BD-B", "geo.placename": brand.city },
};

export const viewport = {
  themeColor: "#F6F1EA",
  width: "device-width",
  initialScale: 1,
};

// Business details for Google (shows address, phone and map in search results)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${SITE_URL}/#store`,
  name: "Super Furniture",
  slogan: brand.tagline,
  description,
  url: SITE_URL,
  logo: `${SITE_URL}/icon-512.png`,
  image: [`${SITE_URL}/og.jpg`],
  telephone: brand.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: brand.address,
    addressLocality: brand.city,
    addressCountry: "BD",
  },
  hasMap: brand.mapsUrl,
  areaServed: "Bangladesh",
  knowsAbout: ["Home furniture", "Office furniture", "Hospital furniture", "Restaurant furniture", "Custom furniture"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/images/hero.webp" fetchPriority="high" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
