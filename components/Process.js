"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { steps } from "@/lib/data";
import { Eyebrow, Heading, Reveal } from "./ui";

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section process" ref={ref}>
      <div className="container">
        <div className="head head--split">
          <div>
            <Eyebrow>How it works</Eyebrow>
            <Heading text="Your space, furnished in *four* steps" />
          </div>
          <Reveal as="p" className="muted head__aside" delay={0.1}>
            Simple from start to finish — you choose, we handle the making, delivery and setup.
          </Reveal>
        </div>

        <div className="steps">
          <div className="steps__track"><motion.span style={{ scaleX: line }} /></div>
          {steps.map((s, k) => (
            <Reveal key={s.title} className="step" delay={k * 0.12}>
              <span className="step__n">{String(k + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
