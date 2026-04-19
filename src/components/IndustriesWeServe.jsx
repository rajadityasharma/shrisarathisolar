import "./IndustriesWeServe.css";

import residential from "../assets/residential.webp";
import commercial from "../assets/commercial.webp";
import industrial from "../assets/industrial.webp";
import hospital from "../assets/hospital.webp";
import education from "../assets/education.webp";

const industries = [
  {
    title: "Residential Solar Solutions",
    desc: "Residential Solar Solutions offer reliable and cost-effective rooftop solar systems specially designed for homes. These solutions help homeowners significantly reduce electricity bills while generating clean and renewable energy. Each system is carefully planned after a detailed site survey to ensure maximum sunlight utilization and long-term performance. High-quality solar panels and components are used to provide safety, durability, and consistent power output. Residential solar systems can be integrated with existing electrical connections and may include net metering benefits where applicable. By choosing residential solar solutions, homeowners gain energy independence, increase property value, and contribute to a sustainable and environmentally friendly future.",
    img: residential,
  },
  {
    title: "Commercial Buildings",
    desc: "Commercial Buildings benefit greatly from smart solar installations that help reduce operational and energy costs. Commercial solar systems are designed to meet higher power demands while ensuring maximum efficiency and reliability. By utilizing unused rooftop or open spaces, businesses can generate their own clean electricity and reduce dependence on conventional power sources. These systems support long-term savings, predictable energy expenses, and improved sustainability goals. With professionally designed and installed solar solutions, commercial buildings can achieve better energy management, enhanced brand reputation, and compliance with environmental standards, while contributing positively to a cleaner and greener future.",
    img: commercial,
  },
  {
    title: "Industrial Plants",
    desc: "Industrial Plants require high-capacity solar systems to meet large-scale energy demands efficiently and reliably. Industrial solar solutions are designed to deliver consistent power for manufacturing units, warehouses, and processing facilities while significantly reducing electricity costs. By installing robust solar systems on rooftops or open land, industries can optimize energy usage and minimize dependence on conventional power sources. These systems are engineered for durability, high performance, and long operational life under demanding conditions. Industrial solar installations also support sustainability goals, lower carbon emissions, and provide long-term financial benefits, making them a smart investment for modern industries.",
    img: industrial,
  },
  {
    title: "Hospitals & Healthcare",
    desc: "Hospitals & Healthcare facilities require uninterrupted and reliable power to support critical medical equipment and essential services. Solar energy solutions for healthcare institutions are designed to provide clean, stable, and efficient power while reducing dependence on traditional electricity sources. These systems help lower operational costs and ensure energy availability during peak demand or outages when integrated with backup solutions. By adopting solar power, hospitals and healthcare centers can enhance energy security, reduce carbon emissions, and support a healthier environment, all while maintaining the highest standards of safety, reliability, and operational continuity.",
    img: hospital,
  },
  {
    title: "Educational Institutions",
    desc: "Educational Institutions can greatly benefit from sustainable solar energy solutions that support both cost savings and environmental responsibility. Solar installations for schools and colleges help reduce electricity expenses while providing a reliable source of clean energy for classrooms, laboratories, and administrative buildings. These systems also serve as practical learning tools, promoting awareness of renewable energy among students. By adopting solar power, educational institutions can demonstrate leadership in sustainability, lower their carbon footprint, and ensure long-term energy stability, creating a greener and more responsible future for students and the community.",
    img: education,
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="industries-zigzag">
      <h2 className="section-title">Industries We Serve</h2>
      <p className="section-subtitle">
        Delivering solar excellence across multiple sectors
      </p>

      <div className="industries-wrapper">
        {industries.map((item, index) => (
          <div
            className={`industry-row ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={index}
          >
            <div className="industry-image">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="industry-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
