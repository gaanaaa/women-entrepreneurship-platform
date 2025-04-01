import React, { useState } from "react";
import { Avatar } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import "./AIMentor.css";

const AIMentor = () => {
  const [conversation, setConversation] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [userInput, setUserInput] = useState("");

  const fetchAIResponse = async (query) => {
    // Enhanced mock responses
    const responses = {
      funding:
        "Here are funding options:\n1. Government Grants\n2. Micro-loans\n3. Angel Investors",
      marketing:
        "Top marketing strategies:\n1. Social Media\n2. Local Partnerships\n3. Referral Programs",
      "": "How can I help you today? Ask about funding, marketing, or business planning.",
    };
    return responses[query.toLowerCase()] || responses[""];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const response = await fetchAIResponse(userInput);
    setConversation([...conversation, { user: userInput, mentor: response }]);
    setUserInput("");
  };

  const startVoiceRecognition = () => {
    setIsListening(true);
    // In a real app, integrate Web Speech API here
    // For now, this just enables the text input
  };

  return (
    <div className="ai-mentor-card">
      <Avatar
        src="/images/ai-mentor.png"
        className="pulse-avatar"
        alt="Digital mentor Aisha"
        sx={{ width: 80, height: 80 }}
      />

      <div className="chat-container">
        {conversation.length === 0 ? (
          <div className="welcome-message">
            <p>Hi! I'm Aisha, your business mentor. Ask me about:</p>
            <ul>
              <li>Funding options</li>
              <li>Marketing ideas</li>
              <li>Business planning</li>
            </ul>
          </div>
        ) : (
          conversation.map((msg, i) => (
            <div key={i} className={`message ${msg.user ? "user" : "mentor"}`}>
              {msg.user || msg.mentor}
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your question..."
          disabled={isListening}
        />
        <button
          type="button"
          className={`voice-button ${isListening ? "listening" : ""}`}
          onClick={startVoiceRecognition}
        >
          <MicIcon /> {isListening ? "Listening..." : "Tap to speak"}
        </button>
      </form>
    </div>
  );
};

export default AIMentor;
