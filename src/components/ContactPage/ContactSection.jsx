import { useState } from "react";
import "./ContactSection.css";

/* ✅ SIMPLE ICON */
const Icon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M8 4v16M16 4v16M4 8h16M4 16h16" />
  </svg>
);

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    company: "",
    employees: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "https://cedarpayroll.co.uk/api/contact.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");

        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          company: "",
          employees: "",
          description: "",
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section className="contact-main">
      <div className="contact-container">

        <div className="form-card">

          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>

            <div className="form-grid">

              <div className="field">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="John"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="field">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Smith"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="field">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+44 123 456 7890"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Your Company Ltd"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label>Number of Employees</label>
              <input
                type="text"
                name="employees"
                placeholder="e.g. 50"
                value={formData.employees}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Message</label>
              <textarea
                name="description"
                placeholder="Tell us about your payroll needs..."
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </div>

        {/* RIGHT SIDE (unchanged) */}
        <div className="right-side">
          {/* Your FAQ and Demo Card remain exactly as they are */}
        </div>

      </div>
    </section>
  );
}