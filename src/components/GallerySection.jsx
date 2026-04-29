import { useState } from "react";
import "./GallerySection.css";

import img0 from "../assets/CEO_&_Founder.webp";
import img1 from "../assets/Shri_Sarathi_Ad1.webp";
import img2 from "../assets/Shri_Sarathi_Ad2.webp";
import img3 from "../assets/Shri_Sarathi_Ad3.webp";
import img4 from "../assets/Shri_Sarathi_Ad4.webp";
import img5 from "../assets/Shri_Sarathi_Ad5.webp";
import img16 from "../assets/Shri_Sarathi_Ad6.webp";
import img6 from "../assets/Shri_Sarathi_Ad7.webp";
import img7 from "../assets/Shri_Sarathi_Ad8.webp";
import img8 from "../assets/Shri_Sarathi_Ad9.webp";
import img9 from "../assets/Shri_Sarathi_Ad10.webp";
import img10 from "../assets/Shri_Sarathi_Ad11.webp";
import img11 from "../assets/Shri_Sarathi_Ad12.webp";
import img12 from "../assets/Shri_Sarathi_Ad12.webp";
import img13 from "../assets/Shri_Sarathi_Ad14.webp";
import img14 from "../assets/Shri_Sarathi_Ad15.webp";
import img15 from "../assets/service-solar.webp";
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
  { type: "image", src: img7 }, 
  { type: "image", src: img8 }, 
  { type: "image", src: img9 }, 
  { type: "image", src: img10 }, 
  { type: "image", src: img11 }, 
  { type: "image", src: img12 }, 
  { type: "image", src: img13 }, 
  { type: "image", src: img14 }, 
];

const GallerySection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="gallery-section">
      <div className="gallery-wrapper">
        <h2 className="gallery-title">Our Gallery</h2>

        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => setSelectedItem(item)}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="gallery" loading="lazy" />
              ) : (
                <video src={item.src} muted />
              )}

              <div className="overlay">
                <span>View</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selectedItem && (
        <div className="lightbox" onClick={() => setSelectedItem(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedItem(null)}>
              ×
            </button>

            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} alt="preview" />
            ) : (
              <video src={selectedItem.src} controls autoPlay />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;