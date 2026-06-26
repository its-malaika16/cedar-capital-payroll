import "./HowItWorks.css";

/* ✅ SVG ICONS */

const icons = {
  company: (
    <svg viewBox="0 0 24 24">
      <rect x="6" y="5" width="12" height="14" rx="2" />
      <path d="M9 9h2M9 13h2M13 9h2M13 13h2" />
    </svg>
  ),

  employees: (
    <svg viewBox="0 0 24 24">
      <circle cx="8" cy="9" r="3" />
      <path d="M2 20c2-4 12-4 12 0" />
      <circle cx="17" cy="7" r="2" />
    </svg>
  ),

  data: (
    <svg viewBox="0 0 24 24">
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  ),

  payroll: (
    <svg viewBox="0 0 24 24">
      <path d="M6 6h12M6 10h12M6 14h6" />
      <path d="M16 18h3M17.5 16.5v3" />
    </svg>
  ),

  review: (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 12l3 3 7-7" />
    </svg>
  ),

  report: (
    <svg viewBox="0 0 24 24">
      <path d="M4 6h16v12H4z" />
      <path d="M4 6l8 6 8-6" />
    </svg>
  )
};


const steps = [
  {
    num: "01",
    icon: icons.company,
    title: "Set Up Your Company",
    desc: "Register your company details, PAYE reference, and configure your payroll settings."
  },
  {
    num: "02",
    icon: icons.employees,
    title: "Add Employees",
    desc: "Import or manually add employee information including tax codes and payment details."
  },
  {
    num: "03",
    icon: icons.data,
    title: "Enter Payroll Data",
    desc: "Record hours worked, overtime, bonuses, and any adjustments for the pay period."
  },
  {
    num: "04",
    icon: icons.payroll,
    title: "Process Payroll",
    desc: "Our system calculates PAYE, NIC, pensions, and generates payslips automatically."
  },
  {
    num: "05",
    icon: icons.review,
    title: "Review & Approve",
    desc: "Review calculations, make any necessary adjustments, and approve the payroll run.",
   // highlight: true
  },
  {
    num: "06",
    icon: icons.report,
    title: "Distribute & Report",
    desc: "Payslips are sent to employees and RTI submissions are made to HMRC."
  }
];

export default function HowItWorks() {
  return (
    <section className="how-section">

      {/* ✅ HEADER */}
      <h2>
        How It <span>Works</span>
      </h2>

      <p className="subtitle">
        Get your payroll up and running in six simple steps
      </p>

      {/* ✅ GRID */}
      <div className="steps-grid">

        {steps.map((step, i) => (
          <div
            key={i}
            className={`step-card ${step.highlight ? "active" : ""}`}
          >

            <div className="step-top">
              <span className="step-num">{step.num}</span>
              <span className="step-icon">{step.icon}</span>
            </div>

            <h3>{step.title}</h3>
            <p>{step.desc}</p>

          </div>
        ))}

      </div>

    </section>
  );
}
