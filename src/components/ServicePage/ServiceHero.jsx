import "./ServiceHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">

      {/* ✅ TOP TAG */}
      <div className="hero-tag">
        <span>● CEDAR SOLUTIONS</span>
      </div>

      {/* ✅ MAIN CARD */}
      <div className="hero-card">

        <h1>
          Our Payroll <br />
          <span>Services</span>
        </h1>

        {/* divider */}
        <div className="divider">
          <span></span>
          <span className="diamond"></span>
          <span></span>
        </div>

        <p>
          Whether you need fully managed payroll or prefer to run your own with
          <strong> powerful software</strong>, Cedar Capital has the solution
          for your business.
        </p>

      </div>

      {/* ✅ BREADCRUMB */}
      <div className="breadcrumb">
        HOME <span>›</span> <span className="active">SERVICES</span>
      </div>

    </section>
  );
}