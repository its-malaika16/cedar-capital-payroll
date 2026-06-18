import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* ✅ TOP CONTENT */}
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/assets/logo/cedar-bank.png" alt="logo" />

            <div>
              <h3>CEDAR CAPITAL</h3>
              <span>PAYROLL</span>
            </div>
          </div>

          <p>
            YOUR PEOPLE, PAID RIGHT. Professional payroll
            services for businesses of all sizes.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        {/* CONTACT */}
        <div className="footer-col contact">
          <h4>Contact Us</h4>

          <p>
            <strong>Manchester:</strong> The Point Building, 173-175 Cheetham Hill Rd,
            Manchester M8 8LG
          </p>

          <p>
            <strong>Delaware:</strong> 501 Silverside Rd, Ste 105-1545,
            Wilmington, Delaware 19809, USA
          </p>

          <p>
            <strong>Beirut:</strong> Gauche Rive Tower, Floor 10,
            Achrafieh, Beirut, Lebanon
          </p>

          <p>
            <strong>Dubai:</strong> Blue Bay Tower, Business Bay,
            Dubai, United Arab Emirates
          </p>

          <p className="contact-line">📞 +971 50 429 4194</p>
          <p className="contact-line">✉ support@cedarpayroll.com</p>
        </div>

      </div>

      {/* ✅ ✅ FIXED BOTTOM (NOW PERFECTLY CENTERED) */}
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          © 2026 Cedar Capital Payroll. All rights reserved.
        </div>
      </div>

    </footer>
  );
}
