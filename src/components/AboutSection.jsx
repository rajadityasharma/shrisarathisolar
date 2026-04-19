import "./AboutSection.css";
import aboutImg from "../assets/about-solar.webp";
import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* CONTENT */}
        <div className="about-content">
          <h2>About Shri Sarathi Solar</h2>
          <p className="tagline">
            Powering a sustainable and energy-independent future
          </p>

          <p>
            Shri Sarathi Solar delivers reliable, affordable, and eco-friendly
            solar energy solutions across India. We focus on quality,
            transparency, and long-term customer satisfaction.
          </p>

          <p>
            From consultation to installation and after-sales service, we
            provide complete solar solutions backed by expert professionals.
          </p>

          <div className="about-points">
            <span>✔ Skilled Solar Professionals</span>
            <span>✔ Government Subsidy Support</span>
            <span>✔ Trusted After Sales Service</span>
          </div>

          {/* 🔥 BUTTON */}
          <Link to="/about" className="about-btn">
            Know More About Us
          </Link>
        </div>

        {/* IMAGE */}
        <div className="about-image">
          <img src={aboutImg} alt="Solar Energy" />
        </div>

      </div>

      {/* ===== STATS SECTION ===== */}
      <div className="about-stats">
        <div className="stat-box">
          <h3>25+</h3>
          <span>Employees</span>
          <p>Skilled solar experts for installation & maintenance.</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-box">
          <h3>150%</h3>
          <span>Client Satisfaction</span>
          <p>Every project completed with trust and transparency.</p>
        </div>

        <div className="stat-divider"></div>

        <div className="stat-box">
          <h3>1000+</h3>
          <span>Installations</span>
          <p>Successfully powering homes & industries across India.</p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
