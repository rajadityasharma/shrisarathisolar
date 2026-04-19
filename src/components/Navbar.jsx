import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

import logo from "../assets/Shri_Sarathi_Solar.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    if (!isHome) return;

    const heroHeight = window.innerHeight * 0.8;

    const handleScroll = () => {
      if (window.scrollY > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <nav
      className={`navbar 
        ${isHome && !scrolled ? "navbar-transparent" : "navbar-black"}
        ${menuOpen ? "menu-open" : ""}
      `}
    >
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Shri Sarathi Solar" />
      </div>

      {/* Burger Icon */}
      <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link></li>
        <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;