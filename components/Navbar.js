"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, brand } from "@/lib/data";
import Icon from "./Icons";

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 60);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (open) window.__lenis?.stop(); else window.__lenis?.start();
  }, [open]);

  return (
    <>
      <motion.header
        className={`nav ${solid ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="nav__inner">
          <a href="#top" className="brand" aria-label="Super Furniture — home">
            <img src="/images/logo-mark.png" alt="" className="brand__mark" />
            <span className="brand__word">
              <b>Super</b>
              <small>Furniture</small>
            </span>
          </a>

          <nav className="nav__links" aria-label="Main">
            {nav.map((l) => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </nav>

          <a href={`tel:${brand.phoneIntl}`} className="btn btn--pill nav__call">
            <Icon name="phone" size={16} draw={false} /> {brand.phone}
          </a>

          <button className={`burger ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>
            <span /><span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {nav.map((l, i) => (
              <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)}
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + i * 0.06 }}>
                {l.label}
              </motion.a>
            ))}
            <motion.a href={`tel:${brand.phoneIntl}`} className="drawer__call"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              Call {brand.phone}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
