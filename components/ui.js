"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

/** Fade + rise into view once. */
export function Reveal({ children, delay = 0, y = 28, className = "", as = "div", ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </M>
  );
}

/** Small uppercase label above headings. */
export function Eyebrow({ children, light = false, center = false }) {
  return (
    <Reveal y={12} className={`eyebrow ${light ? "eyebrow--light" : ""} ${center ? "eyebrow--center" : ""}`}>
      <i />{children}
    </Reveal>
  );
}

/**
 * Heading whose words rise from a mask, staggered.
 * Wrap words in *asterisks* to set them in gold italic.
 */
export function Heading({ text, as = "h2", className = "h2", delay = 0 }) {
  const M = motion[as];
  const words = text.split(" ");
  return (
    <M
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      variants={{ show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
    >
      {words.map((w, i) => {
        const accent = w.startsWith("*");
        const clean = w.replace(/\*/g, "");
        return (
          <span className="wm" key={i}>
            <motion.span
              className={accent ? "accent" : ""}
              variants={{ hidden: { y: "105%" }, show: { y: "0%", transition: { duration: 0.95, ease } } }}
            >
              {clean}
            </motion.span>
          </span>
        );
      })}
    </M>
  );
}

export function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="arrow" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** Number that counts up when it scrolls into view. */
export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

/** Image that unveils with a clip-path wipe and slight zoom-out. */
export function RevealImage({ src, alt = "", className = "", delay = 0, from = "bottom" }) {
  const start = from === "left" ? "inset(0 100% 0 0)" : "inset(100% 0 0 0)";
  return (
    <motion.div
      className={`rimg ${className}`}
      initial={{ clipPath: start }}
      whileInView={{ clipPath: "inset(0 0% 0% 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.3, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.8, delay, ease }}
      />
    </motion.div>
  );
}
