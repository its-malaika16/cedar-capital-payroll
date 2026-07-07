import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ccb-footer">

      <div className="ccb-footer-container">

        {/* ✅ COLUMN 1 */}
        <div className="ccb-footer-col">

          <div className="ccb-logo">
            <div className="ccb-logo-box">
              <img src="/assets/logo/cedar-bank.png" alt="Logo" />
            </div>

            <div className="ccb-logo-text">
              <span className="top-line">CEDAR CAPITAL</span>
              <span className="bottom-line">PAYROLL</span>
            </div>
          </div>

          <p className="ccb-footer-desc">
            YOUR PEOPLE, PAID RIGHT. Professional payroll services for businesses of all sizes.
          </p>

        </div>

        {/* ✅ COLUMN 2 */}
        <div className="ccb-footer-col">
          <h4>Quick Links</h4>


          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* ✅ COLUMN 3 */}
        <div className="ccb-footer-col">
          <h4>Legal</h4>

          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookie">Cookie Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>

        </div>

        {/* ✅ COLUMN 4 */}
        <div className="ccb-footer-col">
          <h4>Contact Us</h4>

          <div className="ccb-contact-row">
            <span className="ccb-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
            </span>
            <p><span className="ccb-city">Manchester:</span> The Point Building, 173-175 Cheetham Hill Rd, Manchester M8 8LG</p>
          </div>

          <div className="ccb-contact-row">
            <span className="ccb-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
            </span>
            <p><span className="ccb-city">Delaware:</span> 501 Silverside Rd, Ste 105-1545, Wilmington, Delaware 19809, USA</p>
          </div>

          <div className="ccb-contact-row">
            <span className="ccb-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
            </span>
            <p><span className="ccb-city">Beirut:</span> Gauche Rive Tower, Floor 10, Achrafieh, Beirut, Lebanon</p>
          </div>

          <div className="ccb-contact-row">
            <span className="ccb-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 21s7-4 7-10a7 7 0 1 0-14 0c0 6 7 10 7 10z" />
                <circle cx="12" cy="11" r="2" />
              </svg>
            </span>
            <p><span className="ccb-city">Dubai:</span> Blue Bay Tower, Business Bay, Dubai, United Arab Emirates</p>
          </div>

          <div className="ccb-contact-row">
            <span className="ccb-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M6 2h4l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v4c0 1-1 2-2 2a17 17 0 0 1-17-17c0-1 1-2 2-2z" />
              </svg>
            </span>
            <p>+971 50 429 4194</p>
          </div>

          <div className="ccb-contact-row">
            <span className="ccb-contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M3 6h18v12H3z" />
                <path d="M3 6l9 7 9-7" />
              </svg>
            </span>
            <p>Support@cedarpayroll.com</p>
          </div>

        </div>

      </div>

      {/* ✅ BOTTOM */}
      <div className="ccb-footer-bottom">
        © 2026 Cedar Capital Bank.
      </div>
    </footer>
  );
}
