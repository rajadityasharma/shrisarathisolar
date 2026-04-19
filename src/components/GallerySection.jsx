import { useState } from "react";
import "./GallerySection.css";

import img1 from "../assets/Hr_power_energy_ad1.webp";
import img2 from "../assets/Hr_power_energy_ad2.webp";
import img3 from "../assets/Hr_power_energy_ad3.webp";
import img4 from "../assets/Hr_power_energy_ad4.webp";
import img5 from "../assets/service-solar.webp";
import video1 from "../assets/HR_Power_energy_slide1.mp4";

const galleryItems = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "video", src: video1 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Gallery</h2>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              className="gallery-card"
              key={index}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="gallery" />
              ) : (
                <video src={item.src} muted />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 LIGHTBOX */}
      {selectedItem && (
        <div className="lightbox" onClick={() => setSelectedItem(null)}>
          <span className="close-btn">&times;</span>

          {selectedItem.type === "image" ? (
            <img src={selectedItem.src} alt="preview" />
          ) : (
            <video src={selectedItem.src} controls autoPlay />
          )}
        </div>
      )}
    </section>
  );
};

export default GallerySection;