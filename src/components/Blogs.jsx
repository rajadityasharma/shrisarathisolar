import "./pages.css";
import { Helmet } from "react-helmet-async";

import BlogHero from "./BlogHero";
import GallerySection from "./GallerySection";
import ContactCards from "./ContactCards";
function ContactUs() {
  return (
    <div className="page section contact-info">
      <Helmet>
        <title>Solar Blog Jaipur | Solar Tips, Cost & Installation Guide</title>
        <meta name="description" content="Read latest blogs on solar panel installation, pricing, and benefits in Jaipur. Learn how to save electricity bills with solar energy." />
        <link rel="canonical" href="https://yourdomain.com/blogs" />
      </Helmet>
      <BlogHero />
      <GallerySection />
      <ContactCards />
    </div>
  );
}

export default ContactUs;
