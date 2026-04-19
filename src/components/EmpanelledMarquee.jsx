import "./EmpanelledMarquee.css";

import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";

function EmpanelledMarquee() {
  return (
    <section className="empanelled-section">
      <div className="empanelled-heading">
        <span></span>
        <h3>We are empaneled with</h3>
        <span></span>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* LOGOS – repeat for infinite effect */}
          {[logo1, logo2, logo3, logo4, logo5, logo1, logo2, logo3, logo4, logo5].map(
            (logo, index) => (
              <div className="marquee-item" key={index}>
                <img src={logo} alt="Empanelled Partner" />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default EmpanelledMarquee;
