"use client";
import { motion } from "framer-motion";

const paths = {
  home: ["M3 10.5 12 3l9 7.5", "M5 9v11h14V9", "M9.5 20v-6h5v6"],
  office: ["M3 9h18v3H3z", "M5 12v8M19 12v8", "M9 12v4h6v-4", "M8 9V6h8v3"],
  hospital: ["M3 14h18", "M3 10v10M21 14v6", "M6 14v-3h6v3", "M16 6v6M13 9h6"],
  restaurant: ["M7 3v8a2 2 0 0 1-4 0V3", "M5 11v10", "M17 21V3c-2.2 0-4 2.4-4 6v4h4"],
  phone: ["M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"],
  pin: ["M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z", "M12 12.2a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2z"],
  clock: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z", "M12 7v5l3 2"],
  ruler: ["M3 17 17 3l4 4L7 21z", "M7 13l2 2M10 10l2 2M13 7l2 2"],
  layers: ["M12 3 2 8l10 5 10-5z", "M2 13l10 5 10-5"],
  shield: ["M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z", "m8.5 12 2.5 2.5 4.5-5"],
  user: ["M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"],
  bed: ["M3 18V7", "M3 14h18v4", "M21 14v-2a3 3 0 0 0-3-3h-7v5", "M6.5 11.5h.01"],
  dining: ["M4 10h16", "M7 10v10M17 10v10", "M8 10a4 4 0 0 1 8 0"],
  copy: ["M9 9h11v11H9z", "M5 15H4V4h11v1"],
};

/** Line icon; draws itself in when it scrolls into view. */
export default function Icon({ name, size = 28, draw = true, className = "" }) {
  const d = paths[name] || paths.home;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={`icon ${className}`} aria-hidden="true">
      {d.map((p, i) =>
        draw ? (
          <motion.path key={i} d={p}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.15 + i * 0.15, ease: "easeInOut" }} />
        ) : <path key={i} d={p} />
      )}
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6a1.2 1.2 0 0 0-.9.4 3.6 3.6 0 0 0-1.1 2.7 6.3 6.3 0 0 0 1.3 3.3 14.4 14.4 0 0 0 5.5 4.9c2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5s.3-1.4.2-1.5-.3-.3-.7-.5z" />
    </svg>
  );
}
