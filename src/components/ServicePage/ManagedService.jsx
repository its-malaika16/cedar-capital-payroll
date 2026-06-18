import "./ManagedService.css";

/* ✅ SVG ICONS (GOLD STYLE) */
const Icon = ({ type }) => {
  switch (type) {
    case "time":
      return (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );

    case "shield":
      return (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10C7.5 21.5 4 17 4 12V6z" />
        </svg>
      );

    case "user":
      return (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 16-4 16 0" />
        </svg>
      );

    case "building":
      return (
        <svg viewBox="0 0 24 24" className="icon-svg">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h2M8 12h2M8 16h2M14 8h2M14 12h2M14 16h2" />
        </svg>
      );

    default:
      return null;
  }
};

export default function ManagedService() {
  return (
    <section className="managed-section">

      {/* ✅ HEADER */}
      <div className="managed-header">

        <div className="header-icon">
          <Icon type="building" />
        </div>

        <div>
          <h2>Managed Payroll Services</h2>
          <p>Let our experts handle everything</p>
        </div>

      </div>

      {/* ✅ CARD */}
      <div className="managed-card">

        {/* LEFT */}
        <div className="left">

          <h3>Perfect for Growing Businesses</h3>

          <p>
            Our managed payroll service takes the burden off your shoulders.
            From calculating pay to ensuring HMRC compliance, our team of experts
            handles it all so you can focus on what matters most – running your business.
          </p>

          {/* ✅ LIST */}
          <div className="list">

            <div className="list-item">
              <Icon type="time" />
              <span>Save up to 40 hours per month</span>
            </div>

            <div className="list-item">
              <Icon type="shield" />
              <span>100% HMRC compliant</span>
            </div>

            <div className="list-item">
              <Icon type="user" />
              <span>Dedicated account manager</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="right">
          <button className="quote-btn">Get a Quote</button>
        </div>

      </div>

    </section>
  );
}
