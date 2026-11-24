import { Icon } from "./Icons";

// How a booking works. Only confirmed facts: free quote on WhatsApp, a trained,
// background-checked team, and the work is done at the customer's place.
const STEPS = [
  { icon: "whatsapp", t: "Send a photo", d: "WhatsApp us a photo and the rough size of what needs cleaning." },
  { icon: "clipboard", t: "Get a free quote", d: "We reply with a free quote. Same-day slots are often available." },
  { icon: "shield", t: "Our team comes to you", d: "A trained, background-checked team arrives at your home or office." },
  { icon: "sparkle", t: "Cleaned on site", d: "We clean in place with eco-friendly products that are safe for kids and pets." },
];

export default function ProcessSteps({ title = "How it works" }: { title?: string }) {
  return (
    <section className="rh-sec ps">
      <div className="rh-wrap">
        <div className="rh-head" data-reveal>
          <p className="rh-eyebrow">Simple booking</p>
          <h2 className="rh-h2">{title}</h2>
        </div>
        <ol className="ps-list" data-stagger>
          {STEPS.map((s, i) => (
            <li key={s.t} className="ps-step">
              <span className="ps-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ps-ic"><Icon name={s.icon} /></span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
