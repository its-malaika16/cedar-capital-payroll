import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* ✅ LEFT: LOGO */}
        <div className="nav-logo">
          <img src="/assets/logo/cedar-bank.png" alt="logo" />

          <div className="logo-text">
            <h3>CEDAR CAPITAL</h3>
            <span>PAYROLL</span>
          </div>
        </div>

        {/* ✅ RIGHT: LINKS + BUTTON */}
        <div className="nav-right">

          <div className="nav-links">
            <NavLink to="/" className="nav-link">Home</NavLink>
            <NavLink to="/services" className="nav-link">Services</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
          </div>

          <button className="nav-btn">
            Get Started
          </button>

        </div>

      </div>

    </nav>
  );
}
