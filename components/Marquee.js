"use client";
import { gallery } from "@/lib/data";

/** Endless, slow-moving strip of interiors. Pauses on hover. */
export default function Marquee() {
  const row = [...gallery, ...gallery];
  return (
    <section className="marquee" aria-label="Interiors furnished in our style">
      <div className="marquee__track">
        {row.map((src, k) => (
          <figure key={k} className={`marquee__item ${k % 3 === 1 ? "is-tall" : ""}`}>
            <img src={src} alt="" loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
}
