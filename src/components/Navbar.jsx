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
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const heroHeight = window.innerHeight * 0.8;

    const handleScroll = () => {
      if (window.scrollY > heroHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`navbar 
        ${isHome && !scrolled ? "navbar-transparent" : "navbar-solid"}
        ${menuOpen ? "menu-open" : ""}
      `}
    >
      <div className="navbar-container">
        {/* Logo - Original Colors Preserved */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Shri Sarathi Solar" />
        </Link>

        {/* Burger Icon */}
        <button 
          className={`burger ${menuOpen ? "toggle" : ""}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" className={location.pathname === "/services" ? "active" : ""} onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/faqs" className={location.pathname === "/faqs" ? "active" : ""} onClick={closeMenu}>
              FAQs
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={location.pathname === "/blogs" ? "active" : ""} onClick={closeMenu}>
              Blogs
            </Link>
          </li>
          <li className="nav-cta-li">
            <Link to="/contact" className="nav-cta" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;