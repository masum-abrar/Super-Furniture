"use client";
import { motion } from "framer-motion";
import { brand } from "@/lib/data";
import Icon from "./Icons";
import { Arrow } from "./ui";

const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(brand.mapQuery)}&z=16&output=embed`;

// The claude.ai preview can't show embedded Google Maps, so the preview build
// draws a stylised map instead. The real website always shows the live map.
const IS_PREVIEW = process.env.NEXT_PUBLIC_PREVIEW === "1";

function DrawnMap() {
  return (
    <svg className="map__drawn" viewBox="0 0 800 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="800" height="420" fill="#ece4d8" />
      <path d="M0 300 C 160 270, 260 330, 420 290 S 680 250, 800 280 L 800 420 L 0 420 Z" fill="#dfe7e1" />
      <g fill="#e3d9ca">
        <rect x="40" y="40" width="150" height="90" rx="6" /><rect x="220" y="30" width="120" height="110" rx="6" />
        <rect x="470" y="50" width="140" height="80" rx="6" /><rect x="640" y="30" width="130" height="120" rx="6" />
        <rect x="60" y="170" width="120" height="80" rx="6" /><rect x="480" y="170" width="110" height="70" rx="6" />
        <rect x="630" y="185" width="140" height="60" rx="6" />
      </g>
      <g fill="none" stroke="#fbf8f3" strokeLinecap="round">
        <path d="M-20 150 L 820 160" strokeWidth="18" />
        <path d="M380 -20 C 400 120, 360 260, 410 440" strokeWidth="22" />
        <path d="M200 -20 L 210 440" strokeWidth="10" />
        <path d="M-20 260 C 200 250, 300 230, 820 250" strokeWidth="10" />
        <path d="M620 -20 L 600 440" strokeWidth="10" />
      </g>
      <text x="398" y="60" transform="rotate(84 398 60)" fill="#a39380" fontSize="13" fontFamily="sans-serif" letterSpacing="2">SS KHALED ROAD</text>
    </svg>
  );
}

export default function MapSection() {
  return (
    <section className="map-wrap" aria-label="Showroom location">
      <div className="container">
        <motion.div
          className="map"
          initial={{ clipPath: "inset(12% 6% 12% 6% round 28px)", opacity: 0.4 }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)", opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
          {IS_PREVIEW ? (
            <DrawnMap />
          ) : (
            <iframe
              className="map__frame"
              src={embedSrc}
              title={`Map: ${brand.address}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          )}

          {IS_PREVIEW && (
            <span className="map__pin" aria-hidden="true">
              <span className="map__pulse" />
              <img src="/images/logo-mark.png" alt="" />
            </span>
          )}

          <motion.div
            className="map__card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <small>Our showroom</small>
            <h3>Super Furniture</h3>
            <p className="map__addr"><Icon name="pin" size={18} draw={false} /> {brand.address}, {brand.city}</p>
            <p className="map__addr"><Icon name="phone" size={18} draw={false} /> <a href={`tel:${brand.phoneIntl}`}>{brand.phone}</a></p>
            <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="btn btn--dark">
              Get directions <Arrow />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
