"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { spaces, waLink } from "@/lib/data";
import Icon from "./Icons";
import { Eyebrow, Heading, Reveal, Arrow, ease } from "./ui";

const iconFor = { home: "home", bedroom: "bed", dining: "dining", office: "office", hospital: "hospital", restaurant: "restaurant" };

export default function Spaces() {
  const [active, setActive] = useState("home");
  const s = spaces.find((x) => x.id === active);

  useEffect(() => {
    const on = (e) => e.detail && setActive(e.detail);
    window.addEventListener("sf:space", on);
    return () => window.removeEventListener("sf:space", on);
  }, []);

  return (
    <section id="spaces" className="section spaces">
      <div className="container">
        <div className="head head--center">
          <Eyebrow center>Shop by space</Eyebrow>
          <Heading text="Designed for the way *you* use a room" />
        </div>

        <Reveal className="tabs" y={16}>
          <LayoutGroup>
            {spaces.map((t) => (
              <button key={t.id} className={`tab ${active === t.id ? "is-active" : ""}`} onClick={() => setActive(t.id)}>
                {active === t.id && <motion.span layoutId="tab-bg" className="tab__bg" transition={{ type: "spring", stiffness: 380, damping: 32 }} />}
                <span className="tab__label"><Icon name={iconFor[t.id]} size={16} draw={false} /> {t.label}</span>
              </button>
            ))}
          </LayoutGroup>
        </Reveal>

        <div className="bento">
          <AnimatePresence mode="wait">
            <motion.div key={s.id} className="bento__grid"
              initial="hidden" animate="show" exit="exit"
              variants={{ show: { transition: { staggerChildren: 0.08 } }, exit: { opacity: 0, transition: { duration: 0.25 } } }}>
              <motion.figure className="bento__main"
                variants={{ hidden: { clipPath: "inset(0 0 100% 0 round 24px)" }, show: { clipPath: "inset(0 0 0% 0 round 24px)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } } }}>
                <motion.img src={s.main} alt={s.label}
                  variants={{ hidden: { scale: 1.15 }, show: { scale: 1, transition: { duration: 1.4, ease } } }} />
                <figcaption>
                  <span className="pill">{s.label}</span>
                </figcaption>
              </motion.figure>

              {s.side.map((src, k) => (
                <motion.figure key={src} className={`bento__side bento__side--${k}`}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}>
                  <img src={src} alt="" />
                </motion.figure>
              ))}

              <motion.div className="bento__info"
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}>
                <h3>{s.heading}</h3>
                <p>{s.text}</p>
                <ul className="chips">
                  {s.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="bento__actions">
                  <a href="#products" className="btn btn--dark">See products <Arrow /></a>
                  <a href={waLink(`Hello Super Furniture! I'm looking for ${s.label.toLowerCase()} furniture.`)} target="_blank" rel="noreferrer" className="link">Ask on WhatsApp <Arrow size={14} /></a>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
