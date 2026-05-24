import { useEffect, useRef, useState } from "react";
import "./ServiceDetails.css";
import solarImg from "../assets/service-solar.webp";

export default function ServiceDetails() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Jab section ka 15% hissa screen par aa jaye, tab trigger hoga
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Ek baar animate hone ke baad check karna band
        }
      },
      { threshold: 0.15 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`service-details ${isVisible ? "is-visible" : ""}`}
    >
      <div className="service-details-wrapper">
        
        {/* IMAGE SIDE */}
        <div className="service-details-image">
          <div className="image-float-wrapper">
            <img src={solarImg} alt="Solar Service" />
            <div className="service-image-aura"></div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div className="service-details-content">
          <div className="service-mini-badge">Our Expertise</div>
          <h2>
            Complete Solar <span className="highlight-gradient">EPC Solutions</span>
          </h2>
          
          <p className="service-description">
            Shri Sarathi Solar delivers turnkey solar EPC services —
            from design and engineering to installation and
            commissioning.
          </p>

          {/* STAGGERED LIST */}
          <ul className="service-animated-list">
            <li style={{ "--delay": "1" }}>
              <span className="dynamic-tick">✓</span> Residential Rooftop Solar
            </li>
            <li style={{ "--delay": "2" }}>
              <span className="dynamic-tick">✓</span> Commercial & Industrial Projects
            </li>
            <li style={{ "--delay": "3" }}>
              <span className="dynamic-tick">✓</span> On-Grid & Hybrid Systems
            </li>
            <li style={{ "--delay": "4" }}>
              <span className="dynamic-tick">✓</span> Net Metering Assistance
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}