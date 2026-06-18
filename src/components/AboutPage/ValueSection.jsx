import "./ValueSection.css";

/* ✅ SVG ICONS */
const icons = {
  excellence: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2l3 7 7 .5-5 4.5 1.5 7-6.5-4-6.5 4 1.5-7-5-4.5 7-.5z" />
    </svg>
  ),
  partnership: (
    <svg viewBox="0 0 24 24">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="10" r="3" />
      <path d="M3 20c1-4 10-4 12 0" />
    </svg>
  ),
  integrity: (
    <svg viewBox="0 0 24 24">
      <path d="M12 21s-7-4.5-7-10a4 4 0 018-1 4 4 0 018 1c0 5.5-7 10-7 10z" />
    </svg>
  ),
  innovation: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2a7 7 0 00-4 12c.5.5 1 1.5 1 2.5h6c0-1 .5-2 1-2.5A7 7 0 0012 2z" />
      <path d="M9 20h6" />
    </svg>
  )
};

const values = [
  {
    title: "Excellence",
    desc: "We strive for the highest standards in everything we do.",
    icon: icons.excellence
  },
  {
    title: "Partnership",
    desc: "We work alongside our clients as true partners in their success.",
    icon: icons.partnership
  },
  {
    title: "Integrity",
    desc: "Honesty and transparency are at the core of our business.",
    icon: icons.integrity
  },
  {
    title: "Innovation",
    desc: "We continuously improve our solutions to meet evolving needs.",
    icon: icons.innovation
  }
];

export default function ValuesSection() {
  return (
    <section className="values-section">

      <h2>Our Values</h2>

      <p className="subtitle">
        These core values guide everything we do and shape how we serve our clients.
      </p>

      <div className="values-grid">

        {values.map((item, i) => (
          <div key={i} className="value-card">

            <div className="icon-circle">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}
