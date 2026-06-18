import "./CTASection.css";

export default function CTASection() {
  return (
    <section className="cta-section">

      <div className="cta-card">

        <h2>Ready to Streamline Your Payroll?</h2>

        <p>
          Join hundreds of UK businesses who trust Cedar Capital Payroll for
          their payroll needs. Get started today with our 14-day free trial.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">
            Request a Quote
          </button> 

          <button className="btn-secondary">
            View All Services
          </button>
        </div>

      </div>

    </section>
  );
}