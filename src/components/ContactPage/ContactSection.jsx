import "./ContactSection.css";

/* ✅ SIMPLE ICON */
const Icon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 4v16M16 4v16M4 8h16M4 16h16" />
  </svg>
);

export default function ContactSection() {
  return (
    <section className="contact-main">

      <div className="contact-container">

        {/* ✅ LEFT: FORM */}
        <div className="form-card">

          <h2>Send Us a Message</h2>

          {/* ✅ NAME ROW */}
          <div className="form-grid">

            <div className="field">
              <label>First Name</label>
              <input placeholder="John" />
            </div>

            <div className="field">
              <label>Last Name</label>
              <input placeholder="Smith" />
            </div>

          </div>

          <div className="field">
            <label>Email Address</label>
            <input placeholder="john@company.com" />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input placeholder="+44 123 456 7890" />
          </div>

          <div className="field">
            <label>Company Name</label>
            <input placeholder="Your Company Ltd" />
          </div>

          <div className="field">
            <label>Number of Employees</label>
            <input placeholder="e.g. 50" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea placeholder="Tell us about your payroll needs..." />
          </div>

          <button className="submit-btn">Send Message</button>

        </div>

        {/* ✅ RIGHT SIDE */}
        <div className="right-side">

          <h2>Frequently Asked Questions</h2>

          <div className="faq">

            <div className="faq-item">
              <h4>How quickly can I get set up?</h4>
              <p>
                Most businesses are up and running within 24–48 hours. Our onboarding team will guide you.
              </p>
            </div>

            <div className="faq-item">
              <h4>Do you offer training?</h4>
              <p>
                Yes! We provide onboarding training, tutorials, and full support.
              </p>
            </div>

            <div className="faq-item">
              <h4>Is my data secure?</h4>
              <p>
                Absolutely. We use bank-level encryption and GDPR compliance.
              </p>
            </div>

            <div className="faq-item">
              <h4>Can I migrate from another system?</h4>
              <p>
                Yes, we assist with smooth migration and data transfer.
              </p>
            </div>

          </div>

          {/* ✅ DEMO CARD */}
          <div className="demo-card">

            <div className="icon-box">
              <Icon />
            </div>

            <h3>Need a Demo?</h3>

            <p>
              Want to see our platform in action? Book a personalised demo with our team.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}