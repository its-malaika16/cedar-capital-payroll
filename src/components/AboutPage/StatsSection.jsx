import "./StatsSection.css";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "50K+", label: "Employees Paid" },
  { value: "99.9%", label: "Accuracy Rate" },
  { value: "15+", label: "Years Experience" }
];

export default function StatsSection() {
  return (
    <section className="stats-section">

      <div className="stats-container">
        {stats.map((item, i) => (
          <div className="stat-box" key={i}>

            <h2>{item.value}</h2>
            <p>{item.label}</p>

          </div>
        ))}
      </div>

    </section>
  );
}