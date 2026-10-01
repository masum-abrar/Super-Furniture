"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, waLink, products } from "@/lib/data";
import Icon, { WhatsAppIcon } from "./Icons";

const ease = [0.22, 1, 0.36, 1];

/**
 * Product details pop-up.
 * Opens from a product card; the visitor reads the details, picks a quantity,
 * and then chooses how to get in touch (WhatsApp, call, or copy the details).
 */
export default function ProductModal({ list, index, onClose, onIndex }) {
  const open = index !== null && index !== undefined;
  const p = open ? list[index] : null;
  const [qty, setQty] = useState(1);
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);
  const [dir, setDir] = useState(0);

  // reset the form whenever a different product is shown
  useEffect(() => { setQty(1); setNote(""); setCopied(false); }, [p?.name]);

  // lock page scroll + keyboard controls while open
  useEffect(() => {
    if (!open) return;
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
      window.__lenis?.start();
    };
  });

  const go = (d) => {
    if (!open) return;
    setDir(d);
    onIndex((index + d + list.length) % list.length);
  };

  const message = p
    ? `Hello Super Furniture! I'm interested in the *${p.name}* (${p.cat}).\nQuantity: ${qty}` +
      (note ? `\nDetails: ${note}` : "") +
      `\n\nCould you share the price and available sizes/finishes?`
    : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`${p.name} — Quantity: ${qty}${note ? ` — ${note}` : ""}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch { /* clipboard not allowed: nothing else to do */ }
  };

  const similar = p ? products.filter((x) => x.cat === p.cat && x.name !== p.name).slice(0, 3) : [];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="pm"
          role="dialog"
          aria-modal="true"
          aria-label={p.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <div className="pm__backdrop" onClick={onClose} />

          <motion.div
            className="pm__panel"
            data-lenis-prevent
            initial={{ y: 60, opacity: 0, scale: 0.97 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.55, ease }}
          >
            <button className="pm__close" onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
            </button>

            {/* image side */}
            <div className={`pm__media ${p.studio ? "is-studio" : ""}`}>
              <AnimatePresence mode="popLayout" custom={dir} initial={false}>
                <motion.img
                  key={p.img}
                  src={p.img}
                  alt={p.name}
                  custom={dir}
                  variants={{
                    enter: (d) => ({ opacity: 0, x: d * 60, scale: 1.04 }),
                    center: { opacity: 1, x: 0, scale: 1 },
                    exit: (d) => ({ opacity: 0, x: d * -60 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.25}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -70) go(1);
                    else if (info.offset.x > 70) go(-1);
                  }}
                />
              </AnimatePresence>
              <div className="pm__nav">
                <button onClick={() => go(-1)} aria-label="Previous product">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 6l-6 6 6 6" /></svg>
                </button>
                <span>{index + 1} / {list.length}</span>
                <button onClick={() => go(1)} aria-label="Next product">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </button>
              </div>
            </div>

            {/* details side */}
            <motion.div
              key={p.name}
              className="pm__body"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease }}
            >
              <span className="pm__cat">{p.cat} furniture</span>
              <h3 className="pm__title">{p.name}</h3>
              <p className="pm__desc">{p.desc}</p>

              {p.details?.length > 0 && (
                <ul className="pm__details">
                  {p.details.map((d) => (
                    <li key={d}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 4.5 4.5L19 7" /></svg>
                      {d}
                    </li>
                  ))}
                </ul>
              )}

              <p className="pm__price">Price on request · made to your size and finish</p>

              <div className="pm__form">
                <div className="pm__qty">
                  <label htmlFor="pm-qty">Quantity</label>
                  <div className="stepper">
                    <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Less">−</button>
                    <input id="pm-qty" inputMode="numeric" value={qty}
                      onChange={(e) => setQty(Math.max(1, parseInt(e.target.value.replace(/\D/g, "") || "1", 10)))} />
                    <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="More">+</button>
                  </div>
                </div>
                <label className="pm__note" htmlFor="pm-note">
                  <span>Size, colour or anything else (optional)</span>
                  <input id="pm-note" value={note} onChange={(e) => setNote(e.target.value)} placeholder="e.g. 6 ft, walnut finish" />
                </label>
              </div>

              <div className="pm__actions">
                <a className="btn btn--wa" href={waLink(message)} target="_blank" rel="noreferrer">
                  <WhatsAppIcon size={18} /> Order on WhatsApp
                </a>
                <a className="btn btn--outline" href={`tel:${brand.phoneIntl}`}>
                  <Icon name="phone" size={16} draw={false} /> Call {brand.phone}
                </a>
              </div>
              <button type="button" className="pm__copy" onClick={copy}>
                {copied ? "Copied — paste it in Messenger or SMS" : "Copy product details"}
              </button>

              {similar.length > 0 && (
                <div className="pm__similar">
                  <small>More {p.cat.toLowerCase()} furniture</small>
                  <div>
                    {similar.map((s) => (
                      <button key={s.name} onClick={() => { setDir(1); onIndex(list.findIndex((x) => x.name === s.name)); }}
                        className={s.studio ? "is-studio" : ""} title={s.name}>
                        <img src={s.img} alt={s.name} loading="lazy" />
                        <span>{s.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
