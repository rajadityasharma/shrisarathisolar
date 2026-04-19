import "./SideActions.css";

function SideActions() {
  return (
    <div className="side-actions">

      {/* WhatsApp */}
      <div className="action-wrapper">
        <div className="action-btn whatsapp">
          <i className="fa-brands fa-whatsapp"></i>
        </div>

        <div className="dropdown">
          <a
            href="https://wa.me/7976152966?text=Hello%20Shri%20Sarathi%20Solar"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 79 7615 2966
          </a>

          <a
            href="https://wa.me/7413880009?text=Hello%20Shri%20Sarathi%20Solar"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91 74 1388 0009
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="action-wrapper">
        <div className="action-btn phone">
          <i className="fa-solid fa-phone"></i>
        </div>

        <div className="dropdown">
          <a href="tel:+917976152966">+91 79 7615 2966</a>
          <a href="tel:+917413880009">+91 74 1388 0009</a>
        </div>
      </div>

      {/* Email (same as before) */}
      <a href="mailto:shrisarathisolar@gmail.com" className="action-btn email">
        <i className="fa-solid fa-envelope"></i>
      </a>

    </div>
  );
}

export default SideActions;