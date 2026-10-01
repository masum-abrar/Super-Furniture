"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { sectors, waLink } from "@/lib/data";
import Icon from "./Icons";
import { Eyebrow, Heading, Reveal, Arrow } from "./ui";

const icons = ["layers", "ruler", "shield", "user"];

export default function Sectors() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="sectors" ref={ref}>
      <motion.div className="sectors__bg" style={{ y: bgY }}>
        <img src="/images/restaurant-lounge.webp" alt="" />
      </motion.div>
      <div className="container sectors__grid">
        <div className="sectors__copy">
          <Eyebrow light>For business</Eyebrow>
          <Heading className="h2 h2--light" text="Furnishing offices, hospitals and *restaurants*" />
          <Reveal as="p" delay={0.1}>
            Opening a clinic, a new office floor or a restaurant? Send us your floor plan and we'll
            put together the furniture list, quote and delivery plan.
          </Reveal>
          <Reveal delay={0.2}>
            <a href={waLink("Hello Super Furniture! I'd like a quote for a business order.")} target="_blank" rel="noreferrer" className="btn btn--light">
              Request a bulk quote <Arrow />
            </a>
          </Reveal>
        </div>
        <div className="sectors__cards">
          {sectors.map((s, k) => (
            <Reveal key={s.title} className="scard" delay={0.08 * k}>
              <Icon name={icons[k]} size={26} />
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
