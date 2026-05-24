import "./SideActions.css";

function SideActions() {
  return (
    <nav className="mono-side-panel" aria-label="Quick Connect Menu">
      {/* WhatsApp Trigger */}
      <div className="mono-row-wrapper">
        {/* Mobile par yeh direct main number par le jayega, desktop par slide card chalega */}
        <a 
          href="https://wa.me/7976152966?text=Hello%20Shri%20Sarathi%20Solar"
          target="_blank" 
          rel="noopener noreferrer" 
          className="mono-trigger whatsapp-mobile-trigger"
          title="WhatsApp Support"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <div className="mono-expandable-card">
          <div className="mono-card-header">WhatsApp Support</div>
          <a
            href="https://wa.me/7976152966?text=Hello%20Shri%20Sarathi%20Solar"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-action-link"
          >
            <span className="mono-status-dot"></span>
            <div className="mono-link-meta">
              <small>Sales & Query</small>
              <strong>+91 79761 52966</strong>
            </div>
          </a>
          <a
            href="https://wa.me/7413880009?text=Hello%20Shri%20Sarathi%20Solar"
            target="_blank"
            rel="noopener noreferrer"
            className="mono-action-link"
          >
            <span className="mono-status-dot"></span>
            <div className="mono-link-meta">
              <small>Technical Support</small>
              <strong>+91 74138 80009</strong>
            </div>
          </a>
        </div>
      </div>

      {/* Phone Trigger */}
      <div className="mono-row-wrapper">
        <a 
          href="tel:+917976152966" 
          className="mono-trigger phone-mobile-trigger"
          title="Call Direct Line"
        >
          <i className="fa-solid fa-phone"></i>
        </a>
        <div className="mono-expandable-card">
          <div className="mono-card-header">Direct Line</div>
          <a href="tel:+917976152966" className="mono-action-link">
            <i className="fa-solid fa-headset mono-icon-sub"></i>
            <div className="mono-link-meta">
              <small>Line 1</small>
              <strong>+91 79761 52966</strong>
            </div>
          </a>
          <a href="tel:+917413880009" className="mono-action-link">
            <i className="fa-solid fa-headset mono-icon-sub"></i>
            <div className="mono-link-meta">
              <small>Line 2</small>
              <strong>+91 74138 80009</strong>
            </div>
          </a>
        </div>
      </div>

      {/* Email Trigger */}
      <div className="mono-row-wrapper">
        <a 
          href="mailto:shrisarathisolar@gmail.com" 
          className="mono-trigger"
          title="Send Email"
        >
          <i className="fa-solid fa-envelope"></i>
        </a>
        <div className="mono-expandable-card single-row-card">
          <a href="mailto:shrisarathisolar@gmail.com" className="mono-action-link">
            <div className="mono-link-meta">
              <small>Official Inbox</small>
              <strong>shrisarathisolar@gmail.com</strong>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default SideActions;