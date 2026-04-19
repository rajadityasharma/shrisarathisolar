import { Helmet } from "react-helmet-async";

import "./pages.css";

import ContactHero from "./ContactHero";
import ContactSection from "./ContactSection"
import ContactCards from "./ContactCards";
function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contact Solar Company in Jaipur | Get Free Solar Quote</title>
        <meta name="description" content="Contact our solar company in Jaipur for free consultation and solar panel installation quote. Call now for rooftop solar solutions." />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>
      <ContactHero />
      <ContactSection />
      <ContactCards />
    </div>
  )
}

export default ContactUs
