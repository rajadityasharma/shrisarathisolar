import "./ServicesSection.css";
import service1 from "../assets/service-installation.webp";
import service2 from "../assets/service-maintenance.webp";
import service3 from "../assets/service-commercial.webp";
import service4 from "../assets/service-subsidy.webp";
import { Link } from "react-router-dom";

function ServicesSection() {
  const services = [
    {
      img: service1,
      number: "01",
      title: "Solar Installation",
      desc: "Premium rooftop solar installation for homes and businesses.",
    },
    {
      img: service2,
      number: "02",
      title: "Maintenance & AMC",
      desc: "Regular maintenance and AMC support for long-lasting performance.",
    },
    {
      img: service3,
      number: "03",
      title: "Commercial & Industrial",
      desc: "Custom solar systems for factories, industries and warehouses.",
    },
    {
      img: service4,
      number: "04",
      title: "Subsidy & Net Metering",
      desc: "Complete assistance for subsidy approval and net metering.",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">

        {/* HEADING */}
        <div className="services-header">
          <span>OUR SERVICES</span>

          <h2>
            Connected Solar Ecosystem
          </h2>

          <p>
            Every service is connected together to provide
            a complete solar journey for your home and business.
          </p>
        </div>

        {/* CONNECTED LAYOUT */}
        <div className="services-flow">

          {services.map((service, index) => (
            <div className="service-item" key={index}>

              {/* LINE */}
              {index !== services.length - 1 && (
                <div className="connector-line"></div>
              )}

              {/* IMAGE */}
              <div className="service-image">
                <img src={service.img} alt={service.title} />
              </div>

              {/* CONTENT */}
              <div className="service-content">

                <span className="service-number">
                  {service.number}
                </span>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>

                {/* <Link to="/services">
                  Explore More
                </Link> */}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default ServicesSection;