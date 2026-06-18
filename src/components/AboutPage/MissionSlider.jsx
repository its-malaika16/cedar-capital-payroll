import { useState, useEffect } from "react";
import "./MissionSlider.css";

/* ✅ SVG ICONS (MATCH YOUR DESIGN) */
const Icon = ({ type }) => {
  switch (type) {

    case "mission":
      return (
        <div className="slider-icon">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
      );

    case "vision":
      return (
        <div className="slider-icon">
          <svg viewBox="0 0 24 24">
            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
      );

    case "promise":
      return (
        <div className="slider-icon">
          <svg viewBox="0 0 24 24">
            <path d="M7 13c4-8 10-6 10-6-1 10-8 10-8 10" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};

/* ✅ DATA */
const slides = [
  {
    title: "Our Mission",
    text: "To empower UK businesses with payroll software that's so intuitive and reliable, they can focus on what truly matters – growing their business and supporting their people.",
    icon: "mission"
  },
  {
    title: "Our Vision",
    text: "To be the most trusted payroll partner for UK businesses, known for exceptional service, innovative technology, and an unwavering commitment to accuracy and compliance.",
    icon: "vision"
  },
  {
    title: "Our Promise",
    text: "Your people, paid right. Every payslip, every submission, every time – delivered with care, precision, and the human touch you deserve.",
    icon: "promise"
  }
];

export default function MissionSlider() {
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="slider-section">

      {/* ✅ LEFT BUTTON */}
      <button className="nav left" onClick={prevSlide}>
        ‹
      </button>

      {/* ✅ CONTENT */}
      <div className="slider-content">

        <Icon type={slides[index].icon} />

        <h2>{slides[index].title}</h2>

        <p>"{slides[index].text}"</p>

        {/* ✅ DOTS */}
        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>

      {/* ✅ RIGHT BUTTON */}
      <button className="nav right" onClick={nextSlide}>
        ›
      </button>

    </section>
  );
}