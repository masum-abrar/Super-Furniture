"use client";
import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { products, productFilters } from "@/lib/data";
import { Eyebrow, Heading, Reveal } from "./ui";
import ProductModal from "./ProductModal";

export default function Products() {
  const [filter, setFilter] = useState("All");
  const [openIndex, setOpenIndex] = useState(null);
  const list = filter === "All" ? products : products.filter((p) => p.cat === filter);
  const counts = Object.fromEntries(productFilters.map((f) => [f, f === "All" ? products.length : products.filter((p) => p.cat === f).length]));

  return (
    <section id="products" className="section products">
      <div className="container">
        <div className="head head--split">
          <div>
            <Eyebrow>Featured products</Eyebrow>
            <Heading text="Pieces our customers *keep* coming back for" />
          </div>
          <Reveal as="p" className="muted head__aside" delay={0.15}>
            Every design can be made in your size and finish. Tap any piece to see the details
            and send us an enquiry.
          </Reveal>
        </div>

        <Reveal className="filters" y={14}>
          <LayoutGroup>
            {productFilters.map((f) => (
              <button key={f} className={`filter ${filter === f ? "is-active" : ""}`} onClick={() => setFilter(f)}>
                {filter === f && <motion.span layoutId="filter-bg" className="filter__bg" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
                <span className="filter__label">{f} <sup>{counts[f]}</sup></span>
              </button>
            ))}
          </LayoutGroup>
        </Reveal>

        <motion.div layout className="pgrid">
          <AnimatePresence mode="popLayout">
            {list.map((p, k) => (
              <motion.article
                layout
                key={p.name}
                className="pcard"
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.25 } }}
                transition={{ duration: 0.6, delay: Math.min(k, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <button type="button" className="pcard__link" onClick={() => setOpenIndex(k)} aria-haspopup="dialog" aria-label={`View details: ${p.name}`}>
                  <div className={`pcard__img ${p.studio ? "is-studio" : ""}`}>
                    <img src={p.img} alt={p.name} loading="lazy" />
                  </div>
                  <div className="pcard__meta">
                    <h3>{p.name}</h3>
                    <span>{p.cat}</span>
                  </div>
                  <span className="pcard__btn" aria-hidden="true">
                    <span>View Details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <ProductModal list={list} index={openIndex} onIndex={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  );
}
