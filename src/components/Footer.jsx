import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/Shri_Sarathi_Solar.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaEnvelope
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="light-modern-footer">
      <div className="footer-container">
        {/* BRAND COLUMN */}
        <div className="footer-section brand-column">
          <div className="footer-logo">
            <img src={logo} alt="Shri Sarathi Solar" />
          </div>
          <p className="brand-desc">
            Powering a cleaner, greener, and sustainable future with innovative
            solar energy solutions.
          </p>
          
          {/* SOCIAL ICONS SQUIRCLES */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61572133485148" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/shri_sarathi.solar/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="mailto:shrisarathisolar@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section links-column">
          <h4 className="section-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/FAQs">FAQs</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* INTERACTIVE CONTACT CARDS */}
        <div className="footer-section contact-column">
          <h4 className="section-title">Contact Us</h4>
          <div className="contact-info-wrapper">
            <a href="mailto:shrisarathisolar@gmail.com" className="contact-card">
              <span className="contact-icon-box">📧</span> 
              <div className="contact-text-box">
                <span className="contact-label">Email Us</span>
                <span className="contact-value">shrisarathisolar@gmail.com</span>
              </div>
            </a>

            <a href="tel:+917976152966" className="contact-card">
              <span className="contact-icon-box">📞</span>
              <div className="contact-text-box">
                <span className="contact-label">Support Line 1</span>
                <span className="contact-value">+91 79761 52966</span>
              </div>
            </a>

            <a href="tel:+917413880009" className="contact-card">
              <span className="contact-icon-box">📞</span>
              <div className="contact-text-box">
                <span className="contact-label">Support Line 2</span>
                <span className="contact-value">+91 74138 80009</span>
              </div>
            </a>

            <div className="contact-card static-card">
              <span className="contact-icon-box">📍</span>
              <div className="contact-text-box">
                <span className="contact-label">Location</span>
                <span className="contact-value">India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM METADATA BAR */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright-text">
            © 2026 - {new Date().getFullYear()}{" "}
            <a href="https://shrisarathisolar.in/" target="_blank" rel="noreferrer" className="copyright-brand">
              Shri Sarathi Solar
            </a>
            . All rights reserved.
          </p>
          <p className="developer-credits">
            Designed & Developed By{" "}
            <a href="https://adityakumarpatna.netlify.app/" target="_blank" rel="noreferrer" className="dev-link">
              Aditya Kumar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;