import "./ContactHero.css";

export default function ContactHero() {
  return (
    <section className="services-hero">

      {/* ✅ TOP TAG */}
      <div className="hero-tag">
        <span>● Get in Touch</span>
      </div>

      {/* ✅ MAIN CARD */}
      <div className="hero-card">

        <h1>
          Get in <br />
          <span>Touch</span>
        </h1>

        {/* divider */}
        <div className="divider">
          <span></span>
          <span className="diamond"></span>
          <span></span>
        </div>

        <p>
          Have questions about Cedar Capital Payroll? Our UK-based team is here to help. Reach out and we'll get back to you 
          <strong>within 24 hours.</strong>
        </p>

      </div>

      {/* ✅ BREADCRUMB */}
      <div className="breadcrumb">
        HOME <span>›</span> <span className="active">CONTACT</span>
      </div>

    </section>
  );
}