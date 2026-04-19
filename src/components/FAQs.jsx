import "./pages.css";

import { Helmet } from "react-helmet-async";

import FaqHero from "./FaqHero";
// import AskQuestion from "./AskQuestion";
import FAQSection from "./FAQSection";
import ContactCards from "./ContactCards";

function FAQs() {
  return (
    <div className="page section">
      <Helmet>
        <title>Solar FAQs | Solar Panel Questions & Answers Jaipur</title>
        <meta name="description" content="Find answers to common questions about solar panel installation, cost, and benefits in Jaipur and Rajasthan." />
        <link rel="canonical" href="https://yourdomain.com/faqs" />
      </Helmet>
      <FaqHero />
      {/* <AskQuestion /> */}
      <FAQSection />
      <ContactCards />
    </div>
  );
}

export default FAQs;
