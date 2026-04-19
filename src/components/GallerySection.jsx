import { useState } from "react";
import "./GallerySection.css";

import img0 from "../assets/CEO_&_Founder.webp";
import img1 from "../assets/Shri_Sarathi_Ad1.webp";
import img2 from "../assets/Shri_Sarathi_Ad2.webp";
import img3 from "../assets/Shri_Sarathi_Ad3.webp";
import img4 from "../assets/Shri_Sarathi_Ad4.webp";
import img5 from "../assets/Shri_Sarathi_Ad5.webp";
import img6 from "../assets/service-solar.webp";
import video1 from "../assets/Shri_Sarathi_Solar.mp4";

const galleryItems = [
  { type: "image", src: img0 },
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "image", src: img3 },
  { type: "video", src: video1 },
  { type: "image", src: img4 },
  { type: "image", src: img5 },
  { type: "image", src: img6 },
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