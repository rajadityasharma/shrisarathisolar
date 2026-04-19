import { useState, useEffect, useRef } from "react";
import "./CustomerReviews.css";

import user1 from "../assets/logo4.webp";
import user2 from "../assets/logo2.webp";
import user3 from "../assets/logo3.webp";

const reviews = [
  {
    name: "Rohit Sharma",
    role: "Home Owner",
    image: user1,
    review:
      "Shri Sarathi Solar installed our rooftop solar system perfectly. Very professional and transparent service.",
  },
  {
    name: "Anita Verma",
    role: "Business Owner",
    image: user2,
    review:
      "Excellent guidance on subsidy and smooth installation. Highly satisfied with the team.",
  },
  {
    name: "Suresh Patel",
    role: "Factory Owner",
    image: user3,
    review:
      "Reliable solar solutions with strong after-sales support. I strongly recommend Shri Sarathi Solar.",
  },
];

function CustomerReviews() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const prevSlide = () => {
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
    startAutoSlide();
  };

  const nextSlide = () => {
    setIndex(index === reviews.length - 1 ? 0 : index + 1);
    startAutoSlide();
  };

  const { name, role, image, review } = reviews[index];

  return (
    <section className="review-section">
      <h2 className="review-heading">Customer Review </h2>
      <div className="review-layout">

        {/* LEFT BUTTONS */}
        <div className="review-controls">
          <button onClick={prevSlide}>◀</button>
          <button onClick={nextSlide}>▶</button>
        </div>

        {/* RIGHT REVIEW */}
        <div className="review-card">

          <div className="review-avatar">
            <img src={image} alt={name} />
          </div>

          <p className="review-text">“{review}”</p>

          <h4>{name}</h4>
          <span>{role}</span>

        </div>

      </div>
    </section>
  );
}

export default CustomerReviews;
