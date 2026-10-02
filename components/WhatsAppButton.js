"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, waLink, waMessages } from "@/lib/data";
import Icon, { WhatsAppIcon } from "./Icons";

/**
 * Floating WhatsApp button. Tapping it opens a small chat card with a
 * greeting and quick topics; each topic opens WhatsApp with a ready-made message.
 */
export default function WhatsAppButton() {
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const box = useRef(null);

  // appear once the visitor scrolls past the hero
  useEffect(() => {
    const f = () => setOn(window.scrollY > window.innerHeight * 0.7);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  // small "Need help?" bubble a few seconds after the button first appears
  useEffect(() => {
    if (!on) return;
    const t1 = setTimeout(() => setHint(true), 2500);
    const t2 = setTimeout(() => setHint(false), 9500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [on]);

  // close on Escape or outside click
  useEffect(() => {
    if (!open) return;
    const key = (e) => e.key === "Escape" && setOpen(false);
    const click = (e) => box.current && !box.current.contains(e.target) && setOpen(false);
    window.addEventListener("keydown", key);
    window.addEventListener("pointerdown", click);
    return () => { window.removeEventListener("keydown", key); window.removeEventListener("pointerdown", click); };
  }, [open]);

  const time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  return (
    <div ref={box} className={`wa ${on || open ? "is-on" : ""}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            className="wa__card"
            role="dialog"
            aria-label="Chat with Super Furniture on WhatsApp"
            data-lenis-prevent
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "bottom right" }}
          >
            <div className="wa__head">
              <span className="wa__avatar">
                <img src="/images/logo-mark.png" alt="" />
              </span>
              <span className="wa__who">
                <b>Super Furniture</b>
                <small>We reply on WhatsApp</small>
              </span>
              <button className="wa__x" onClick={() => setOpen(false)} aria-label="Close chat">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
              </button>
            </div>

            <div className="wa__body">
              <motion.div className="wa__bubble"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
                <b>Assalamu Alaikum! 👋</b>
                <p>Welcome to Super Furniture. What are you looking for today? Pick a topic and we'll reply on WhatsApp.</p>
                <span>{time}</span>
              </motion.div>

              <div className="wa__topics">
                {waMessages.topics.map((t, k) => (
                  <motion.a
                    key={t.label}
                    href={waLink(t.text)}
                    target="_blank"
                    rel="noreferrer"
                    className="wa__topic"
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + k * 0.05 }}
                  >
                    <Icon name={t.icon} size={18} draw={false} />
                    {t.label}
                    <svg className="wa__go" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </motion.a>
                ))}
              </div>
            </div>

            <a className="wa__start" href={waLink(waMessages.default)} target="_blank" rel="noreferrer">
              <WhatsAppIcon size={18} /> Start chat
            </a>
            <a className="wa__call" href={`tel:${brand.phoneIntl}`}>or call {brand.phone}</a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hint && !open && on && (
          <motion.button className="wa__hint" onClick={() => { setOpen(true); setHint(false); }}
            initial={{ opacity: 0, x: 10, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 10 }}>
            Need help choosing? Chat with us
          </motion.button>
        )}
      </AnimatePresence>

      <button
        className={`wa-fab ${open ? "is-open" : ""}`}
        onClick={() => { setOpen((v) => !v); setHint(false); }}
        aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
        aria-expanded={open}
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.svg key="x" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
              initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <path d="M6 6l12 12M18 6 6 18" />
            </motion.svg>
          ) : (
            <motion.span key="wa" initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.6, opacity: 0 }}>
              <WhatsAppIcon size={26} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
