import "./Hero.css";
import DashboardDemo from "./DashboardDemo";

const Tick = () => (
  <svg viewBox="0 0 24 24" className="tick-icon">
    <circle cx="12" cy="12" r="10" />
    <path d="M7 12l3 3 7-7" />
  </svg>
);

export default function PayrollHero() {
  return (
    <section className="hero">

      {/* ✅ BACKGROUND LAYERS */}
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className="hero-container">

        {/* ✅ LEFT */}
        <div className="hero-left">

          <span className="tag">PROFESSIONAL PAYROLL SERVICES</span>

          <h1>
            Your people,<br />
            <span className="gold">paid right.</span>
          </h1>

          <p>
            From managed payroll services to powerful software solutions,
            we ensure your employees are paid accurately and on time, every time.
          </p>

          {/* ✅ CTA */}
          <div className="buttons">
            <button className="btn-primary">Get Started Free →</button>
            <button className="btn-secondary">Explore Features</button>
          </div>

          {/* ✅ FEATURES */}
          <div className="features">
            <div className="feature-item"><Tick /><span>Automated tax calculations</span></div>
            <div className="feature-item"><Tick /><span>Employee self-service portal</span></div>
            <div className="feature-item"><Tick /><span>Real-time reporting</span></div>
            <div className="feature-item"><Tick /><span>Pension auto-enrolment</span></div>
            <div className="feature-item"><Tick /><span>Holiday tracking</span></div>
            <div className="feature-item"><Tick /><span>P45, P60 generation</span></div>
          </div>

        </div>

        {/* ✅ RIGHT */}
        <div className="hero-right">

          <DashboardDemo />
          

        </div>

      </div>
    </section>
  );
}