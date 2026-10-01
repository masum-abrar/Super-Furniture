"use client";
import { motion } from "framer-motion";
import { brand, nav, spaces, waLink } from "@/lib/data";

export default function Footer() {
  const word = "SUPER FURNITURE".split("");
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <img src="/images/logo-full.png" alt="Super Furniture — Unique · Style · Comfort · Quality" className="footer__logo" />
          <div className="footer__cols">
            <div>
              <small>Explore</small>
              {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
            </div>
            <div>
              <small>Spaces</small>
              {spaces.map((s) => <a key={s.id} href="#spaces" onClick={() => window.dispatchEvent(new CustomEvent("sf:space", { detail: s.id }))}>{s.label}</a>)}
            </div>
            <div>
              <small>Visit</small>
              <a href={brand.mapsUrl} target="_blank" rel="noreferrer">{brand.address}</a>
              <a href={`tel:${brand.phoneIntl}`}>{brand.phone}</a>
              <a href={waLink()} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={brand.facebook} target="_blank" rel="noreferrer">Facebook</a>
            </div>
          </div>
        </div>

        <motion.p className="footer__word" aria-hidden="true"
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.03 } } }}>
          {word.map((l, k) => (
            <motion.span key={k} variants={{ hidden: { y: "100%" }, show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } }}>
              {l === " " ? " " : l}
            </motion.span>
          ))}
        </motion.p>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Super Furniture · {brand.tagline}</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
