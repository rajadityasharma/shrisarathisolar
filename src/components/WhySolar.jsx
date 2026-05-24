import "./WhySolar.css";
import free from "../assets/free-electricity.webp";
import emi from "../assets/emi.webp";
import energy from "../assets/energy.webp";
import eco from "../assets/eco.webp";
import support from "../assets/support.webp";
import service from "../assets/service.webp";

const features = [
  { title: "Free Electricity for 25–30 Years", icon: free, desc: "Enjoy decades of zero-cost power generation for your property." },
  { title: "Pay Half Bill as EMI for 5 Years!", icon: emi, desc: "Easy financing that fits your budget without upfront burden." },
  { title: "Energy Independence", icon: energy, desc: "Generate your own power and break free from grid reliability." },
  { title: "Eco Friendly", icon: eco, desc: "Reduce your carbon footprint with clean, green solar energy." },
  { title: "Subsidy Support", icon: support, desc: "Complete assistance in availing government financial benefits." },
  { title: "After Sales Service", icon: service, desc: "Prompt support and regular maintenance for hassle-free performance." },
];

function WhySolar() {
  return (
    <section className="why-solar-sticky-fresh">
      <div className="sticky-wrapper">
        
        {/* LEFT SIDE: STICKY PANEL (Yeh freeze rahega) */}
        <div className="left-sticky-content">
          <span className="premium-tag">Features</span>
          <h2>Energy That Powers the Future</h2>
          <p>
            Smart, sustainable & cost-effective energy solutions for your future. Scroll to explore how we transform your energy experience.
          </p>
        </div>

        {/* RIGHT SIDE: SCROLLABLE HIGH-CONTRAST LIST */}
        <div className="right-scroll-list">
          {features.map((item, index) => (
            <div className="sticky-row-item" key={index}>
              <div className="row-left-meta">
                <span className="row-index-num">0{index + 1}</span>
                <div className="row-icon-container">
                  <img src={item.icon} alt={item.title} />
                </div>
              </div>
              
              <div className="row-main-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhySolar;