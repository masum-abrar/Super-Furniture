"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { products, spaces } from "@/lib/data";
import { Eyebrow, Heading, Reveal, RevealImage, Counter, Arrow } from "./ui";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const floatY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const spin = useTransform(scrollYProgress, [0, 1], [-40, 80]);

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container about__grid">
        <div className="about__media">
          <RevealImage src="/images/study-desk.webp" alt="Solid wood desk and chair in a warm study" className="about__big" />
          <motion.div className="about__float" style={{ y: floatY }}>
            <RevealImage src="/images/armchair-rattan.webp" alt="Rattan armchair" delay={0.3} from="left" />
          </motion.div>
          <motion.img src="/images/logo-mark.png" alt="" className="about__seal" style={{ rotate: spin }} />
        </div>

        <div className="about__copy">
          <Eyebrow>About Super Furniture</Eyebrow>
          <Heading text="More than furniture — we furnish *whole* spaces" />
          <Reveal as="p" className="lead" delay={0.1}>
            Super Furniture makes furniture for the places people spend their days: the living room,
            the bedroom, the office, the hospital ward and the restaurant floor.
          </Reveal>
          <Reveal as="p" className="muted" delay={0.15}>
            Choose from our designs or bring your own idea. We build it to your size, finish it by hand
            and deliver it ready to use — from our showroom on SS Khaled Road.
          </Reveal>

          <Reveal className="stats" delay={0.2}>
            <div><b><Counter to={4} /></b><span>Sectors we furnish</span></div>
            <div><b><Counter to={spaces.length} /></b><span>Room collections</span></div>
            <div><b><Counter to={products.length} suffix="+" /></b><span>Featured designs</span></div>
          </Reveal>

          <Reveal delay={0.25}>
            <a href="#contact" className="btn btn--outline">Plan your space with us <Arrow /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
