import { useState, useEffect } from "react";
import "./Home.css";

import { Helmet } from "react-helmet-async";

import WhySolar from "../components/WhySolar";
import AboutSection from "./AboutSection";
import ServiceDetails from "./ServiceDetails";
import WhyChooseUs from "./WhyChooseUs";
// import EmpanelledMarquee from "./EmpanelledMarquee";
import DirectorMessage from "./DirectorMessage";
import CustomerReviews from "./CustomerReviews";
import ContactSection from "./ContactSection";
import ContactCards from "./ContactCards";
import { Link } from "react-router-dom";


import slide1 from "../assets/Shri_Sarathi_slide1.webp";
import slide2 from "../assets/Shri_Sarathi_slide2.webp";
import slide3 from "../assets/Shri_Sarathi_slide3.webp";
import slide4 from "../assets/Shri_Sarathi_slide4.webp";
import slide5 from "../assets/Shri_Sarathi_slide5.webp";
import slide6 from "../assets/Shri_Sarathi_slide6.webp";
import slide7 from "../assets/Shri_Sarathi_slide7.webp";
import slide8 from "../assets/Shri_Sarathi_slide8.webp";

const slides = [
  { subtitle: "RENEWABLE ENERGY SOLUTIONS", title: "Powering a Greener Tomorrow with Reliable Solar Energy", image: slide1 },
  { subtitle: "SMART ECO-INNOVATION", title: "Smart Solar Solutions Designed for Homes & Businesses", image: slide2 },
  { subtitle: "TRUSTED EFFICIENCY", title: "Energy You Can Trust Backed by Innovation & Reliability", image: slide3 },
  { subtitle: "SUSTAINABLE FUTURE", title: "Clean Renewable Energy Systems Empowering Tomorrow", image: slide4 },
  { subtitle: "SUSTAINABLE FUTURE", title: "Clean Renewable Energy Systems Empowering Tomorrow", image: slide5 },
  { subtitle: "SUSTAINABLE FUTURE", title: "Clean Renewable Energy Systems Empowering Tomorrow", image: slide6 },
  { subtitle: "SUSTAINABLE FUTURE", title: "Clean Renewable Energy Systems Empowering Tomorrow", image: slide7 },
  { subtitle: "SUSTAINABLE FUTURE", title: "Clean Renewable Energy Systems Empowering Tomorrow", image: slide8 },
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds for better reading time

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  return (
    <main>
      <Helmet>
        <title>Best Solar Panel Installation in Bikaner | Rooftop Solar Rajasthan</title>
        <meta name="description" content="Affordable solar panel installation in Jaipur for homes and businesses. Get rooftop solar solutions in Rajasthan with expert support." />
        <link rel="canonical" href="https://shrisarathisolar.in/" />
      </Helmet>

      {/* NEW HERO SLIDER */}
      <section className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <span className="hero-subtitle">{slide.subtitle}</span>
                <h1 className="hero-title">{slide.title}</h1>
                <div className="hero-cta-group">
                  <Link to="/contact" className="btn-primary">Get Free Quote</Link>
                  <Link to="/services" className="btn-secondary">Explore Services</Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* MODERN CONTROLS (WITHOUT COUNTER) */}
        <div className="slider-navigation">
          <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <span 
                key={index} 
                className={`indicator-dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>

          <button className="nav-arrow next" onClick={nextSlide} aria-label="Next Slide">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </section>

      <WhySolar />
      <AboutSection />
      <ServiceDetails />
      <WhyChooseUs />
      {/* <EmpanelledMarquee /> */}
      <DirectorMessage />
      <CustomerReviews />
      <ContactSection />
      <ContactCards />
    </main>
  );
}

export default Home;