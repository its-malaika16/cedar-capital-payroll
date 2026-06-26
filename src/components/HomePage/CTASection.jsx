import { useNavigate } from "react-router-dom";
import "./CTASection.css";

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="cta-section">

      <div className="cta-container">

        {/* ✅ CENTER TEXT */}
        <div className="cta-text">
          <h2>Ready to Streamline Your Payroll?</h2>

          <p>
            Join hundreds of UK businesses who trust Cedar Capital Payroll for their payroll needs.
            Get started today with our 14-day free trial.
          </p>
        </div>

        {/* ✅ BUTTONS BELOW */}
        <div className="cta-buttons">

          <button
            className="btn-primary"
            onClick={() => navigate("/contact")}
          >
            Request a Quote →
          </button>

          <button
            className="btn-secondary"
            onClick={() => navigate("/services")}
          >
            View All Services
          </button>

        </div>

      </div>

    </section>
  );
}
``