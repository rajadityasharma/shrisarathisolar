import "./ServicesSection.css";
import service1 from "../assets/service-installation.webp";
import service2 from "../assets/service-maintenance.webp";
import service3 from "../assets/service-commercial.webp";
import service4 from "../assets/service-subsidy.webp";
import { Link } from "react-router-dom";

function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* HEADING */}
        <div className="services-header">
          {/* <h2>Our Services</h2> */}
          <p>
            Complete solar energy solutions designed for homes, businesses,
            and industries across India.
          </p>
        </div>

        {/* CARDS */}
        <div className="services-grid">

          <div className="service-card">
            <img src={service1} alt="Solar Installation" />
            <h3>Solar Installation</h3>
            <p>
              High-quality rooftop solar installation for residential and
              commercial projects.
            </p>
            <Link to="/services">Learn More</Link>
          </div>

          <div className="service-card">
            <img src={service2} alt="Solar Maintenance" />
            <h3>Maintenance & AMC</h3>
            <p>
              Reliable maintenance services to ensure maximum performance
              and long system life.
            </p>
            <Link to="/services">Learn More</Link>
          </div>

          <div className="service-card">
            <img src={service3} alt="Commercial Solar" />
            <h3>Commercial & Industrial</h3>
            <p>
              Customized solar solutions for factories, warehouses,
              and large establishments.
            </p>
            <Link to="/services">Learn More</Link>
          </div>

          <div className="service-card">
            <img src={service4} alt="Subsidy Support" />
            <h3>Subsidy & Net Metering</h3>
            <p>
              Complete support for government subsidies and net metering
              approvals.
            </p>
            <Link to="/services">Learn More</Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
