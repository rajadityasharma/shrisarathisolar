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

  // ENTER = SEND | SHIFT+ENTER = NEW LINE
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Bubble */}
      <div className="chatbot-bubble" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {open && (
        <div className="chatbot-box">
          {/* Header */}
          <div className="chatbot-header">
            <div className="mini-logo">
              <img src={logo} alt="HR Power Energy" />
            </div>
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          {/* Body */}
          <div className="chatbot-body" ref={bodyRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              rows={1}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatBot;