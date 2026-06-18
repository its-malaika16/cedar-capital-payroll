import "./SubscribeSection.css";

export default function SubscribeSection() {
  return (
    <section className="subscribe-section">

      <h2>Stay Updated</h2>

      <p>
        Subscribe to receive emails, news, and updates straight from Cedar Capital —
        payroll insights and announcements delivered to your inbox.
      </p>

      <div className="subscribe-box">

        {/* ✅ INPUT */}
        <div className="input-wrapper">

          {/* Email Icon */}
          <span className="input-icon">
            ✉
          </span>

          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* ✅ BUTTON */}
        <button className="subscribe-btn">
          Subscribe
          <span className="send-icon">➤</span>
        </button>

      </div>

    </section>
  );
}