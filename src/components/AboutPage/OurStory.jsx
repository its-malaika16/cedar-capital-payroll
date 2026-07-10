import "./OurStory.css";

export default function OurStory() {
  return (
    <section className="story-section">

      <div className="story-container">

        {/* ✅ LEFT CARD */}
        <div className="left-card">

          <div className="image-wrapper">
            <img src="/assets/images/ceo.png" alt="Founder" />
          </div>

          <span className="tag subheading">FOUNDER</span>

          <h3>Ali A Hammoud</h3>
          <p>Chief Executive Officer</p>

        </div>

        {/* ✅ RIGHT CONTENT */}
        <div className="right-content">

          <span className="small-tag">OUR STORY</span>

          <h1>
            Built on <span className="yellow-text">trust</span>, driven by <span className="yellow-text">precision</span>.
          </h1>

          <div className="paragraphs">

            <p>
              Cedar Capital Payroll was founded with a simple belief: businesses deserve
              better when it comes to payroll. Too many companies were struggling with outdated
              systems, compliance headaches, and the constant worry of getting it wrong.
            </p>

            <p>
              Our founder, with decades of experience in payroll and HR, set out to create
              a service that would take the stress out of payroll — combining deep expertise
              with modern technology to build a solution that's both powerful and effortless.
            </p>

            <p>
              Today, we're proud to serve hundreds of businesses across the UK, from small
              startups to large enterprises. Every client receives the same exceptional level
              of service and attention to detail.
            </p>

          </div>

          {/* ✅ STATS */}
          <div className="stats">

            <div className="stat-box">
              <h4>15+</h4>
              <span>Years experience</span>
            </div>

            <div className="stat-box">
              <h4>UK</h4>
              <span>HMRC compliant</span>
            </div>

            <div className="stat-box">
              <h4>1:1</h4>
              <span>Personal service</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}