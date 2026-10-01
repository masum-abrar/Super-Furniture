"use client";
import { services } from "@/lib/data";
import Icon from "./Icons";
import { Eyebrow, Heading, Reveal, Arrow } from "./ui";

const tabFor = { home: "home", office: "office", hospital: "hospital", restaurant: "restaurant" };

export default function Services() {
  const pick = (id) => window.dispatchEvent(new CustomEvent("sf:space", { detail: tabFor[id] }));
  return (
    <section className="services">
      <div className="container services__grid">
        <div className="services__intro">
          <Eyebrow>What we make</Eyebrow>
          <Heading className="h3" text="Furniture for *four* kinds of space" />
          <Reveal as="p" className="muted" delay={0.1}>
            One workshop, one standard of finish — whether it is a family living room
            or a full restaurant floor.
          </Reveal>
        </div>
        {services.map((s, k) => (
          <Reveal key={s.title} className="service" delay={0.08 * k}>
            <span className="service__icon"><Icon name={s.icon} size={30} /></span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <a href="#spaces" className="link" onClick={() => pick(s.icon)}>View range <Arrow size={14} /></a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
