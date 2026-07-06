import "./PayrollSoftware.css";
import { Link } from "react-router-dom";

/* ✅ GOLD TICK */
const Tick = () => (
  <svg viewBox="0 0 24 24" className="tick-icon">
    <circle cx="12" cy="12" r="10" />
    <path d="M7 12l3 3 7-7" />
  </svg>
);

/* ✅ HEADER ICON */
const HeaderIcon = () => (
  <svg viewBox="0 0 24 24" className="icon-svg">
    <rect x="4" y="5" width="16" height="12" rx="2" />
    <path d="M8 17v2M16 17v2" />
  </svg>
);

export default function PayrollSoftware() {
  return (
    <section className="software-section">

      {/* ✅ TOP HEADER */}
      <div className="software-header">

        <div className="icon-box">
          <HeaderIcon />
        </div>

        <div>
          <h2>Payroll Software</h2>
          <p>Powerful tools for in-house payroll</p>
        </div>

      </div>

      {/* ✅ CONTENT */}
      <div className="software-content">

        {/* LEFT SIDE */}
        <div className="left">

          <h3>Run Your Own Payroll with Confidence</h3>

          <p>
            Our cloud-based payroll software gives you complete control over your payroll process.
            With intuitive features and built-in HMRC compliance, processing payroll has never been easier.
          </p>

          {/* ✅ BULLETS */}
          <div className="bullets">

            <ul>
              <li><Tick /><span>Cloud-based access from anywhere</span></li>
              <li><Tick /><span>Employee self-service portal</span></li>
              <li><Tick /><span>Holiday and absence tracking</span></li>
              <li><Tick /><span>Multi-company support</span></li>
            </ul>

            <ul>
              <li><Tick /><span>Real-time reporting and analytics</span></li>
              <li><Tick /><span>Automated tax calculations</span></li>
              <li><Tick /><span>P45, P60, and P11D generation</span></li>
              <li><Tick /><span>API integrations available</span></li>
            </ul>

          </div>

        </div>

        {/* ✅ RIGHT CARD */}
        <div className="right">

          <div className="cta-card">

            <h4>Start Your Free Trial</h4>

            <p>
              Experience our payroll software with a 30-day free trial.
              No credit card required.
            </p>

            <Link to="/contact">
              <button className="demo-btn">
                Request Demo
              </button>
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}