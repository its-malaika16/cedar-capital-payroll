import "./Features.css";

const features = [
    {
        title: "Employee Management",
        desc: "Store and manage all your employee information securely.",

        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 
        0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.67 0-8 
        1.34-8 4v2h10v-2c0-1.66 2.69-3 6-3 1.09 0 2.08.11 
        3 .3V17c0-2.66-5.33-4-8-4z"/>
            </svg>
        )

    },
    {
        title: "P45 & P60 Generation",
        desc: "Generate compliant documents with just a few clicks.",

        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M6 2h9l5 5v15H6zM14 2v6h6" />
            </svg>
        )

    },
    {
        title: "Timesheet Management",
        desc: "Track working hours, overtime, and attendance.",

        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M12 8v4l3 3M12 2a10 10 0 1 0 0 20" />
            </svg>
        )

    },
    {
        title: "Tax & NIC Calculations",
        desc: "Accurate PAYE and pension calculations.",

        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M7 2h10v20H7zM7 7h10" />
            </svg>
        )

    },
    {
        title: "Payslip Generation",
        desc: "Generate detailed payslips instantly.",

        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M6 2h12v20H6zM6 6h12" />
            </svg>
        )

    },
    {
        title: "Employee Portal",
        desc: "Employees access payslips securely.",

        icon: (
            <svg viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zM13 21h8v-8h-8v8z" />
            </svg>
        )

    }
];

export default function Features() {
    return (
        <section className="features-section">

            <h2>
                Everything You Need for <span>Payroll</span>
            </h2>

            <p>From employee management to tax calculations, our comprehensive platform handles every aspect of payroll processing. </p>

            <div className="features-grid">
                {features.map((item, i) => (
                    <div className="feature-card" key={i}>

                        <div className="icon-box">
                            <span className="icon">{item.icon}</span>
                        </div>

                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>

                    </div>
                ))}
            </div>

        </section>
    );
}
