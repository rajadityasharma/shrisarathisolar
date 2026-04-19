import "./pages.css";

import AboutHero from "./AboutHero";

import { Helmet } from "react-helmet-async";

import AboutSection from "./AboutSection";
import MissionVision from "./MissionVision";
import DirectorMessage from "./DirectorMessage";
// import EmpanelledMarquee from "./EmpanelledMarquee";
import OurProcess from "./OurProcess";
import ContactCards from "./ContactCards";

function About() {
  return (
    <div className="page section">
      <Helmet>
        <title>About Our Solar Company in Jaipur | Expert Solar Solutions</title>
        <meta name="description" content="Learn about our solar company in Jaipur providing reliable rooftop solar solutions across Rajasthan with expert team and affordable pricing." />
        <link rel="canonical" href="https://shrisarathisolar.com/about" />
      </Helmet>
      <AboutHero />
      <AboutSection />
      <MissionVision />
      <DirectorMessage />
      {/* <EmpanelledMarquee /> */}
      <OurProcess />
      <ContactCards />
    </div>
  );
}

export default About;
