import "./WhyChoose.css";

const features = [
  {
    title: "HMRC Compliant",
    desc: "Stay fully compliant with all HMRC regulations and avoid costly penalties.",
    icon: "shield"
  },
  {
    title: "Expert Support",
    desc: "Dedicated payroll specialists available to handle your complex requirements.",
    icon: "users"
  },
  {
    title: "Save Time",
    desc: "Automate your payroll processes and focus on growing your business.",
    icon: "clock"
  }
];

export default function WhyChoose() {
  return (
    <section className="why-section">

      <div className="why-card">

        {/* ✅ HEADING */}
        <h2>Why Choose Cedar Capital?</h2>

        <p className="subtitle">
          We combine cutting-edge technology with expert knowledge to deliver
          payroll services that your business can rely on.
        </p>

        {/* ✅ CARDS */}
        <div className="why-grid">
          {features.map((item, i) => (
            <div className="why-box" key={i}>

              <div className="icon-circle">
                {getIcon(item.icon)}
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

/* ✅ SVG Icons */
function getIcon(type) {
  switch (type) {
    case "shield":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 2l8 4v6c0 5-3 9-8 10-5-1-8-5-8-10V6z"/>
        </svg>
      );
    case "users":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M16 11c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2zM8 11c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2zM8 13c-2 0-6 1-6 3v2h8v-2c0-1 2-2 4-2h4v-1c0-2-4-3-6-3z"/>
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 8v4l3 2M12 2a10 10 0 100 20 10 10 0 000-20z"/>
        </svg>
      );
    default:
      return null;
  }
}
