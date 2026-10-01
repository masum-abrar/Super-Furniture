"use client";
import { useEffect, useState } from "react";
import { waLink } from "@/lib/data";
import { WhatsAppIcon } from "./Icons";

/** Floating WhatsApp button; appears once the visitor scrolls past the hero. */
export default function WhatsAppButton() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const f = () => setOn(window.scrollY > window.innerHeight * 0.7);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <a className={`wa-fab ${on ? "is-on" : ""}`} href={waLink()} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <WhatsAppIcon size={26} />
    </a>
  );
}
