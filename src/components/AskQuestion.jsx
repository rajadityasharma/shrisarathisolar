import { useState } from "react";
import "./AskQuestion.css";

const OPENAI_API_KEY = "PASTE_YOUR_API_KEY_HERE";

function AskQuestion() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const res = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              {
                role: "system",
                content:
                  "You are a solar energy expert for Shri Sarathi Solar. Answer in simple Hindi or English.",
              },
              {
                role: "user",
                content: question,
              },
            ],
            temperature: 0.4,
          }),
        }
      );

      const data = await res.json();
      setAnswer(data.choices[0].message.content);
    } catch (err) {
      setAnswer("❌ Answer fetch nahi ho paaya. Dobara try karein.");
    }

    setLoading(false);
  };

  return (
    <section className="ask-ai">
      <h2>Ask Our Solar Expert</h2>

      <div className="ask-box">
        <input
          type="text"
          placeholder="Jaise: Solar panel subsidy kitni hai?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={askAI}>
          {loading ? "Thinking..." : "Ask"}
        </button>
      </div>

      {answer && (
        <div className="answer-card">
          <strong>Answer:</strong>
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
}

export default AskQuestion;
