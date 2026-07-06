import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ✅ LOGO */}
        <div className="nav-logo">
          <img src="/assets/logo/cedar-bank.png" alt="logo" />

          <div className="logo-text">
            <h3>CEDAR CAPITAL</h3>
            <span>PAYROLL</span>
          </div>
        </div>

        {/* ✅ HAMBURGER */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* ✅ LINKS + BUTTON */}
        <div className={`nav-right ${menuOpen ? "active" : ""}`}>

          <div className="nav-links">

            <NavLink
              to="/"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/services"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

          </div>

          <Link to="/contact">
            <button className="nav-btn">
              Get Started
            </button>
          </Link>

        </div>

      </div>
    </nav>
  );
}
