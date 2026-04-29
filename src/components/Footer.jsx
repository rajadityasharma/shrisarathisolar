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
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-section brand">
          <div className="logo">
                  <img src={logo} alt="Shri Sarathi Solar" />
                </div>
          <p>
            Powering a cleaner, greener, and sustainable future with innovative
            solar energy solutions.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a href="https://www.facebook.com/profile.php?id=61572133485148" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/shri_sarathi.solar/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaXTwitter />
            </a>
            <a href="mailto:shrisarathisolar@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/FAQs">FAQs</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            📧 <a href="mailto:shrisarathisolar@gmail.com">
                shrisarathisolar@gmail.com
            </a>
          </p>
          <p>
            📞 <a href="tel:+917976152966">+91 7976 152 966</a>
          </p>
          <p>
            📞 <a href="tel:+917413880009">+91 7413 880 009</a>
          </p>
          <p>📍 India</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © 2026 - {new Date().getFullYear()} <a
            href="https://shrisarathisolar.com/"
            target="_blank"
            rel="noreferrer"
          >
            Shri Sarathi Solar
          </a>
          . All rights reserved. |
          Developed & Maintained By{" "}
          <a
            href="https://adityakumarpatna.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Aditya Kumar
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
