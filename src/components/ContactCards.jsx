import "./ContactCards.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function ContactCards() {
  return (
    <section className="contact-cards-section">
      <div className="contact-cards-container">

        <div className="contact-card email">
          <FaEnvelope className="icon" />
          <h4>Email Us</h4>
          <p>shrisarathisolar@gmail.com</p>
          <p>adityasha237@gmail.com@gmail.com</p>
        </div>

        <div className="contact-card phone">
          <FaPhoneAlt className="icon" />
          <h4>Call Us</h4>
          <p>+91 79 7615 2966</p>
          <p>+91 74 1388 0009</p>
        </div>

        <div className="contact-card whatsapp">
          <FaWhatsapp className="icon" />
          <h4>WhatsApp</h4>
          <p>+91 79 7615 2966</p>
          <p>+91 74 1388 0009</p>
        </div>

      </div>
    </section>
  );
}

export default ContactCards;
