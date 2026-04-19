
import { Helmet } from "react-helmet-async";
import "./pages.css";

import ServicesHero from "./ServicesHero";
import ServicesSection from "./ServicesSection";
import IndustriesWeServe from "./IndustriesWeServe";
import WhyChooseUs from "./WhyChooseUs";
import ServiceDetails from "./ServiceDetails";
import CustomerReviews from "./CustomerReviews";
import ContactSection from "./ContactSection";
import ContactCards from "./ContactCards";


function Services() {
  return (
    <div className="page section">
      <Helmet>
        <title>Solar Panel Installation Services in Jaipur | Rooftop Solar Solutions</title>
        <meta name="description" content="We offer solar panel installation services in Jaipur for residential and commercial needs. Affordable rooftop solar systems in Rajasthan." />
        <link rel="canonical" href="https://yourdomain.com/services" />
      </Helmet>
      <ServicesHero />
      <ServicesSection />
      <IndustriesWeServe />      
      <ServiceDetails />
      <WhyChooseUs />
      <CustomerReviews />
      <ContactSection />
      <ContactCards />
    </div>
  );
}

export default Services;
