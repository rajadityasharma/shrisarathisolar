import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Button visibility toggle (> 300px)
      const scrolled = window.scrollY;
      setVisible(scrolled > 300);

      // Percentage tracking progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (scrolled / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // SVG ring stroke math calculations (Radius = 20, Circumference = ~125.6)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className={`premium-scroll-btn ${visible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll back to top"
    >
      {/* Dynamic Progress Indicator Circular SVG Ring */}
      <svg className="progress-ring-svg" width="48" height="48">
        <circle
          className="progress-ring-track"
          cx="24"
          cy="24"
          r={radius}
        />
        <circle
          className="progress-ring-indicator"
          cx="24"
          cy="24"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
      
      {/* Floating Arrow Icon Core */}
      <div className="arrow-icon-wrapper">
        <FaArrowUp />
      </div>
    </button>
  );
}