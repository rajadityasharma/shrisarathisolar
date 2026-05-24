import "./ContactCards.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function ContactCards() {
  const contactData = [
    { icon: <FaEnvelope />, title: "Email Us", links: ["shrisarathisolar@gmail.com", "adityasha237@gmail.com"], type: "email" },
    { icon: <FaPhoneAlt />, title: "Call Us", links: ["+91 79 7615 2966", "+91 74 1388 0009"], type: "phone" },
    { icon: <FaWhatsapp />, title: "WhatsApp", links: ["+91 79 7615 2966", "+91 74 1388 0009"], type: "whatsapp" },
  ];

  return (
    <section className="contact-section">
      <div className="contact-grid">
        {contactData.map((item, index) => (
          <div key={index} className={`card ${item.type}`}>
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <div className="links">
              {item.links.map((link, i) => (
                <a key={i} href={item.type === 'email' ? `mailto:${link}` : `tel:${link.replace(/\s/g, '')}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ContactCards;