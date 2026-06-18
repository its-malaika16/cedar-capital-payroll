import "./HowItWorks.css";

/* ✅ SVG ICONS */
const icons = {
  company: "",
  employees: "👥",
  data: "📋",
  payroll: "💷",
  review: "✅",
  report: "✉️"
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
