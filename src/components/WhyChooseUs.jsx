import "./WhyChooseUs.css";
import chooseImg from "../assets/why-choose.webp";

function WhyChooseUs() {
  return (
    <section className="choose-section">
      <div className="choose-container">

        {/* LEFT IMAGE */}
        <div className="choose-image">
          <img src={chooseImg} alt="Solar Installation" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="choose-content">
          <span className="choose-subtitle">WHY CHOOSE US</span>

          <h2>Reasons to Choose <br /> Shri Sarathi Solar</h2>

          <div className="choose-points">
            <ul>
              <li>Cost-effective Solar Solutions</li>
              <li>Local Expertise You Can Trust</li>
              <li>Best Renewable Energy Consultation</li>
            </ul>

            <ul>
              <li>Premium Quality Components</li>
              <li>Full Banking & Subsidy Support</li>
              <li>Reliable After Sales Service</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
