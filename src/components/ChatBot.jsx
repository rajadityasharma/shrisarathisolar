import { useState, useRef, useEffect } from "react";
import "./ChatBot.css";
import chatbotData from "./chatbotData";
import logo from "../assets/Shri_Sarathi_Solar.webp";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi 👋 Ask me anything about Solar Energy!" }
  ]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages]);

  const getBotReply = (userText) => {
    const lower = userText.toLowerCase();

    for (let item of chatbotData) {
      if (item.keywords.some((k) => lower.includes(k))) {
        return item.answer;
      }
    }
    return "Sorry 😕 I didn't understand. Please ask about solar services.";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botReply = {
      from: "bot",
      text: getBotReply(input)
    };

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Mono Bubble */}
      <div 
        className={`chatbot-mono-bubble ${open ? "bubble-active" : ""}`} 
        onClick={() => setOpen(!open)}
        aria-label="Toggle Support Chat"
      >
        {open ? (
          <i className="fa-solid fa-xmark close-icon-spin"></i>
        ) : (
          <div className="icon-badge-wrapper">
            <i className="fa-solid fa-comment-dots"></i>
            <span className="mono-pulse-dot"></span>
          </div>
        )}
      </div>

      {open && (
        <div className="chatbot-premium-box">
          {/* Header */}
          <div className="chatbot-premium-header">
            <div className="bot-profile-meta">
              <div className="premium-mini-logo">
                <img src={logo} alt="HR Power Energy" />
              </div>
              <div className="bot-status-text">
                <h4>Solar Assistant</h4>
                <div className="status-indicator">
                  <span className="online-dot"></span>
                  <small>Automated • Online</small>
                </div>
              </div>
            </div>
            <button className="close-panel-btn" onClick={() => setOpen(false)}>
              <i className="fa-solid fa-minus"></i>
            </button>
          </div>

          {/* Body */}
          <div className="chatbot-premium-body" ref={bodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`premium-msg-row ${msg.from}`}>
                {msg.from === "bot" && (
                  <div className="bot-avatar-icon">
                    <i className="fa-solid fa-robot"></i>
                  </div>
                )}
                <div className="premium-msg-bubble">
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Panel */}
          <div className="chatbot-premium-input-zone">
            <div className="input-textarea-wrapper">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                rows={1}
              />
            </div>
            <button 
              className={`premium-send-btn ${input.trim() ? "active-ready" : ""}`} 
              onClick={sendMessage}
              disabled={!input.trim()}
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;