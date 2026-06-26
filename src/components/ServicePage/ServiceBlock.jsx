import "./ServiceBlock.css";

/* ✅ Tick */
const Tick = () => (
  <svg viewBox="0 0 24 24" className="tick-icon">
    <circle cx="12" cy="12" r="10" />
    <path d="M7 12l3 3 7-7" />
  </svg>
);

/* ✅ ALL SERVICES (INCLUDING EMPLOYEE) */
const services = [
  {
    title: "Employee Information Management",
    desc: "Centralise all your employee data in one secure, GDPR-compliant platform.",
    label: "Employee",
    reverse: false,
    left: [
      "Personal details and contact information",
      "Bank account details for payments",
      "Emergency contacts"
    ],
    right: [
      "Employment history and contracts",
      "Tax codes and NI numbers",
      "Document storage and management"
    ]
  },
  {
    title: "P45 & P60 Generation",
    desc: "Generate HMRC-compliant P45 and P60 documents automatically.",
    label: "P45",
    reverse: true,
    left: [
      "Automatic P45 on employee departure",
      "Digital delivery via employee portal",
      "Bulk generation capabilities"
    ],
    right: [
      "Year-end P60 generation for all staff",
      "Print-ready PDF formats",
      "HMRC submission ready"
    ]
  },
  {
    title: "Timesheet Management",
    desc: "Track working hours, overtime, and attendance with ease.",
    label: "Timesheet",
    reverse: false,
    left: [
      "Daily, weekly, and monthly timesheets",
      "Holiday and absence management",
      "Integration with payroll calculations"
    ],
    right: [
      "Overtime calculation and tracking",
      "Manager approval workflows",
      "Export to various formats"
    ]
  },
  {
    title: "Payroll & Payslip Generation",
    desc: "Calculate pay, deductions, and generate detailed payslips.",
    label: "Payroll",
    reverse: true,
    left: [
      "Gross to net pay calculations",
      "PAYE income tax calculations",
      "National Insurance contributions"
    ],
    right: [
      "Pension auto-enrolment deductions",
      "Student loan repayments",
      "Statutory payments (SSP, SMP, SPP)"
    ]
  },
  
  {
    title: "Employee Self-Service Portal",
    desc: "Employees can access their payslips and documents securely.",
    label: "Employee Portal",
    reverse: false,
    left: [
      "Secure email-based access",
      "View and download payslips",
      "Access P45 and P60 documents"
    ],
    right: [
      "Update personal information",
      "Submit timesheet entries",
      "Request holiday and time off"
    ]
  },
  {
    title: "UK Compliance & Reporting",
    desc: "Stay compliant with all HMRC regulations and requirements.",
    label: "UK Compliance",
    reverse: true,
    left: [
      "Real-Time Information (RTI) submissions",
      "Gender pay gap reporting",
      "Apprenticeship levy calculations"
    ],
    right: [
      "NI category management",
      "Automatic tax code updates",
      "Pension regulatory compliance"
    ]
  },
];

export default function ServicesList() {
  return (
    <section className="services-list">

      {services.map((item, i) => (
        <div
          key={i}
          className={`service-row ${item.reverse ? "reverse" : ""}`}
        >

          {/* ✅ TEXT SIDE */}
          <div className="text">

            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            <div className="bullets">

              <ul>
                {item.left.map((b, i) => (
                  <li key={i}>
                    <Tick />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <ul>
                {item.right.map((b, i) => (
                  <li key={i}>
                    <Tick />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

          {/* ✅ CARD SIDE */}
          <div className="visual">

            <div className="card">

              <h4>{item.label}</h4>

              <div className="lines">
                <span className = "circle"> </span><span></span>
                <span></span>
                <span></span>
              </div>

              <div className="status">
                <span>Status</span>
                <span className="active">Active</span>
              </div>

            </div>

          </div>
        </div>
      ))}

    </section>
  );
}
