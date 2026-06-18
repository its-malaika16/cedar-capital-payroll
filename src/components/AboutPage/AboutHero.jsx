import "./AboutHero.css";

export default function AboutHero() {
  return (
    <section className="services-hero">

      {/* ✅ TOP TAG */}
      <div className="hero-tag">
        <span>● OUR STORY</span>
      </div>

      {/* ✅ MAIN CARD */}
      <div className="hero-card">

        <h1>
          About <br />
          <span>Cedar Capital</span>
        </h1>

        {/* divider */}
        <div className="divider">
          <span></span>
          <span className="diamond"></span>
          <span></span>
        </div>

        <p>
          We're more than just a payroll provider. We're your trusted partner in ensuring your most valuable asset – your people – are 
          <strong> paid accurately and on time.</strong>
        </p>

      </div>

      {/* ✅ BREADCRUMB */}
      <div className="breadcrumb">
        HOME <span>›</span> <span className="active">ABOUT</span>
      </div>

    </section>
  );
}