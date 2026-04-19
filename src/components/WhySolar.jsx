import { useEffect, useRef } from "react";
import "./WhySolar.css";
import free from "../assets/free-electricity.webp";
import emi from "../assets/emi.webp";
import energy from "../assets/energy.webp";
import eco from "../assets/eco.webp";
import support from "../assets/support.webp";
import service from "../assets/service.webp";

const cards = [
  { title: "Free Electricity for 25–30 Years", icon: free },
  { title: "Pay Half Bill as EMI for 5 Years!", icon: emi },
  { title: "Energy Independence", icon: energy },
  { title: "Eco Friendly", icon: eco },
  { title: "Subsidy Support", icon: support },
  { title: "After Sales Service", icon: service },
];

function WhySolar() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-solar" ref={sectionRef}>
      {/* HEADING */}
      <div className="why-heading">
        <h2>Energy That Powers the Future</h2>
        <p>
          Smart, sustainable & cost-effective energy solutions for your future
        </p>
      </div>

      <div className="why-container">
        {cards.map((card, index) => (
          <div className="solar-card" key={index}>
            <img src={card.icon} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhySolar;
