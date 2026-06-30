import "./Payrollinfo.css";

const Tick = () => (
  <svg
    viewBox="0 0 24 24"
    className="tick-icon"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M7 12l3 3 7-7" />
  </svg>
);

const featuresBottom = [
  {
    title: "For UK Businesses",
    desc: "Tailored for SMEs & enterprises",
    icon: "doc"
  },
  {
    title: "HMRC Aligned",
    desc: "Compliant payroll processing",
    icon: "shield"
  },
  {
    title: "Secure Sign-In",
    desc: "Encrypted cloud access",
    icon: "lock"
  },
  {
    title: "Reliable Support",
    desc: "Help when you need it",
    icon: "headphones"
  }
];

export default function PayrollInfo() {
  return (
    <section className="payroll-section">

      <div className="payroll-card">

        {/* ✅ TOP CONTENT */}
        <div className="top-content">

          <div className="left">
            <h2>
              Efficient & Reliable <span>Payroll</span>
            </h2>

            <p>
              Cedar Capital Payroll streamlines your business with secure,
              cloud-based payroll processing. Sign in from anywhere to run pay,
              manage employees, and keep every payslip accurate — your people,
              paid right.
            </p>


            <div className="bullets">

              <ul> {/* LEFT */}
                <li className="bullet-item"><Tick /><span>Secure cloud sign-in portal</span></li>
                <li className="bullet-item"><Tick /><span>Accurate PAYE & NIC calculations</span></li>
                <li className="bullet-item"><Tick /><span>Privacy & GDPR compliant</span></li>
              </ul>

              <ul> {/* RIGHT */}
                <li className="bullet-item"><Tick /><span>Streamlined payroll processing</span></li>
                <li className="bullet-item"><Tick /><span>Employee self-service access</span></li>
                <li className="bullet-item"><Tick /><span>Acceptable Use & Cookie policies</span></li>
              </ul>

            </div>


            <button className="cta-btn">
              Learn More About Us →
            </button>
          </div>

        </div>

        {/* ✅ BOTTOM GRID */}
        <div className="bottom-grid">
          {featuresBottom.map((item, i) => (
            <div className="feature-box" key={i}>

              <div className="icon">
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

/* ✅ SVG ICON FUNCTION */
function getIcon(type) {
  switch (type) {
    case "doc":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 2h9l5 5v15H6z" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6z" />
        </svg>
      );
    case "lock":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M6 10v10h12V10M9 10V7a3 3 0 016 0v3" />
        </svg>
      );
    case "headphones":
      return (
        <svg viewBox="0 0 24 24">
          <path d="M4 12a8 8 0 1116 0v5M4 17h4v3H4zM16 17h4v3h-4z" />
        </svg>
      );
    default:
      return null;
  }
}