import "./ContactSection.css";
import { useState } from "react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Indian phone validation (10 digits)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (formData.message.trim().length < 5) {
      newErrors.message = "Message is too short";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappNumber = "7976152966"; // 🔴 YOUR NUMBER

    const text = `Hello Shri Sarathi Solar 👋%0A
Name: ${formData.name}%0A
Email: ${formData.email}%0A
Phone: ${formData.phone}%0A
Message: ${formData.message}`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${text}`,
      "_blank"
    );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <h2>Let’s discuss your solar energy requirements</h2>
        </div>

        <div className="contact-grid">

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <textarea
              name="message"
              placeholder="Your Message"
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit">Send Message</button>
          </form>

          {/* MAP */}
          <div className="contact-map">
            <iframe
              title="Shri Sarathi Solar Location"
              src="https://www.google.com/maps?q=Rajasthan,India&output=embed"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
