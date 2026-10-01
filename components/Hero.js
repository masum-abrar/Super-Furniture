"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { heroSlides, brand } from "@/lib/data";
import { Arrow, ease } from "./ui";

const D = 1.75; // starts as the intro curtain lifts
const SLIDE_MS = 6000;

const lines = [["Furniture", "for", "every"], ["space", "you", "*live*"], ["and", "*work*", "in."]];

export default function Hero() {
  const [i, setI] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useEffect(() => {
    const t = setTimeout(() => setI((v) => (v + 1) % heroSlides.length), SLIDE_MS + (i === 0 ? 1500 : 0));
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div
        className="hero__frame"
        initial={{ clipPath: "inset(8% 6% 8% 6% round 40px)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
        transition={{ delay: 1.35, duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.div className="hero__media" style={{ y }}>
          <AnimatePresence initial={false}>
            <motion.img
              key={i}
              src={heroSlides[i].img}
              alt={heroSlides[i].title}
              className="hero__img"
              initial={{ opacity: 0, scale: 1.12 }}
              animate={{ opacity: 1, scale: 1.02 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: { duration: 1.2 }, scale: { duration: 7, ease: "linear" } }}
            />
          </AnimatePresence>
        </motion.div>
        <div className="hero__shade" />

        <motion.div className="hero__content container" style={{ opacity: fade }}>
          <motion.p className="hero__eyebrow"
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: D, duration: 0.8 }}>
            <i /> Welcome to Super Furniture
          </motion.p>

          <h1 className="hero__title">
            {lines.map((ln, li) => (
              <span className="line" key={li}>
                {ln.map((w, wi) => {
                  const accent = w.startsWith("*");
                  return (
                    <span className="wm" key={wi}>
                      <motion.span
                        className={accent ? "accent" : ""}
                        initial={{ y: "108%" }}
                        animate={{ y: "0%" }}
                        transition={{ delay: D + 0.1 + li * 0.12 + wi * 0.06, duration: 1.05, ease }}
                      >
                        {w.replace(/\*/g, "")}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
            ))}
          </h1>

          <motion.p className="hero__lead"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: D + 0.6, duration: 0.9, ease }}>
            Homes, offices, hospitals and restaurants — we design, build and deliver
            furniture that looks good and lasts.
          </motion.p>

          <motion.div className="hero__actions"
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: D + 0.75, duration: 0.9, ease }}>
            <a href="#products" className="btn btn--light">Explore Products <Arrow /></a>
            <a href="#contact" className="btn btn--glass">Visit Showroom</a>
          </motion.div>
        </motion.div>

        <motion.div className="hero__slides"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: D + 0.9, duration: 0.9, ease }}>
          {heroSlides.map((s, k) => (
            <button key={s.label} className={`slide-tab ${k === i ? "is-active" : ""}`} onClick={() => setI(k)} aria-label={`Show ${s.label}`}>
              <img src={s.img} alt="" />
              <span className="slide-tab__text">
                <small>{String(k + 1).padStart(2, "0")}</small>
                {s.label}
              </span>
              <span className="slide-tab__bar">
                {k === i && (
                  <motion.span
                    key={`bar-${i}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: (SLIDE_MS + (i === 0 ? 1500 : 0)) / 1000, ease: "linear" }}
                  />
                )}
              </span>
            </button>
          ))}
        </motion.div>

        <motion.a href={`tel:${brand.phoneIntl}`} className="hero__phone"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: D + 1.1 }}>
          <span>Call the showroom</span>
          <b>{brand.phone}</b>
        </motion.a>
      </motion.div>
    </section>
  );
}
