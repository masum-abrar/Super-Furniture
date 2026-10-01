"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand, waLink } from "@/lib/data";
import Icon, { WhatsAppIcon } from "./Icons";
import { Eyebrow, Heading, Reveal, Arrow } from "./ui";

const needs = ["Home", "Bedroom", "Dining", "Office", "Hospital", "Restaurant"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", note: "" });
  const [picked, setPicked] = useState(["Home"]);
  const [copied, setCopied] = useState(false);
  const [link, setLink] = useState("");

  const toggle = (t) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const message = () =>
    `Hello Super Furniture!\nName: ${form.name}\nPhone: ${form.phone}\nLooking for: ${picked.join(", ") || "-"}` +
    (form.note ? `\nDetails: ${form.note}` : "");

  // No server needed: the enquiry opens in WhatsApp, pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const url = waLink(message());
    setLink(url);
    const w = window.open(url, "_blank", "noopener");
    if (!w) window.location.href = url;
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(brand.phone); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { /* clipboard blocked — number stays selectable */ }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__copy">
          <Eyebrow>Let's work together</Eyebrow>
          <Heading text="Ready to furnish your *space*?" />
          <Reveal as="p" className="muted" delay={0.1}>
            Visit the showroom to see and feel the furniture, or send us your requirements and we'll
            reply on WhatsApp with designs and a quote.
          </Reveal>

          <Reveal className="info" delay={0.15}>
            <a href={brand.mapsUrl} target="_blank" rel="noreferrer" className="info__row">
              <span className="info__icon"><Icon name="pin" size={20} draw={false} /></span>
              <span><small>Showroom</small><b>{brand.address}, {brand.city}</b></span>
            </a>
            <div className="info__row">
              <span className="info__icon"><Icon name="phone" size={20} draw={false} /></span>
              <span><small>Phone</small><a href={`tel:${brand.phoneIntl}`}><b>{brand.phone}</b></a></span>
              <button type="button" className="info__copy" onClick={copy} aria-label="Copy phone number">
                {copied ? "Copied" : <Icon name="copy" size={16} draw={false} />}
              </button>
            </div>
            <a href={waLink()} target="_blank" rel="noreferrer" className="info__row">
              <span className="info__icon"><WhatsAppIcon size={20} /></span>
              <span><small>WhatsApp</small><b>Chat with us</b></span>
            </a>
          </Reveal>
        </div>

        <motion.form className="eform" onSubmit={submit}
          initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
          <h3>Send an enquiry</h3>
          <div className="eform__row">
            <label className="field" htmlFor="f-name">
              <input id="f-name" required placeholder=" " value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <span>Your name</span>
            </label>
            <label className="field" htmlFor="f-phone">
              <input id="f-phone" required placeholder=" " inputMode="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              <span>Phone number</span>
            </label>
          </div>
          <fieldset className="needs">
            <legend>I need furniture for</legend>
            <div>
              {needs.map((t) => (
                <button type="button" key={t} className={`need ${picked.includes(t) ? "is-on" : ""}`} onClick={() => toggle(t)} aria-pressed={picked.includes(t)}>
                  {t}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="field" htmlFor="f-note">
            <textarea id="f-note" rows={3} placeholder=" " value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })} />
            <span>Sizes, quantity, colours…</span>
          </label>
          <button className="btn btn--dark btn--full" type="submit">Send on WhatsApp <Arrow /></button>
          <AnimatePresence>
            {link && (
              <motion.p className="eform__note" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>
                WhatsApp didn't open? <a href={link} target="_blank" rel="noreferrer">Open the message here</a> or call {brand.phone}.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
