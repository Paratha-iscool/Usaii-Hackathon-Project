import React, { useContext, useState } from "react";
import {generateContent} from './Model';
import ReactMarkdown from "react-markdown";
import './Home.css';

export default function Home({ emotion, age }) {

    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [location, setLocation] = useState("");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClear = () => {
    setUserInput('');
    setResponse([]);
    setIsLoading(false);
  };

const handleSubmit = async () => {
    if (!location.trim()) {
      alert("Please enter your location first.");
      return;
    }
    if (!userInput.trim()) return;
    if (!emotion || !age) return;

    setIsLoading(true);

    try {
        const prompt = `
You are an AI that helps users turn stressful situations into clear action plans.

User emotion: ${emotion}
User age group: ${age}

User message: ${userInput}

Respond with:
1. What Matters
2. What To Do
3. What Happens If You Don't
        `;

        const res = await generateContent(
            prompt,
            location
        );

        try {

            const parsed = JSON.parse(res);

            if (parsed.hitlTriggered) {

                setResponse(prev => [
                    ...prev,
                    {
                        type: "user",
                        message: userInput
                    },
                    {
                        type: "bot",
                        message:
        `🚨 This situation may require immediate support from a trusted adult, mental health professional, crisis service, or emergency services. Find a Helpline here:   https://findahelpline.com/

        Location provided: ${parsed.detectedLocation}`
                    }
                ]);

                setUserInput("");
                return;
            }

        } catch {

        }

        setResponse(prev => [
            ...prev,
            { type: "user", message: userInput },
            { type: "bot", message: res }
        ]);

        setUserInput("");

    } catch (err) {
        console.error(err);
    } finally {
        setIsLoading(false);
    }
};

const handleKeyPress = (e) => {
    if(e.key == 'Enter') {
        e.preventDefault();
        handleSubmit();
    }
}

return (
  <div className="chat-container">

    {response.length === 0 ? (
      <div className="empty-state">
        <h1>Need any help?</h1>
        <p>Type something and I'll turn it into a plan</p>
      </div>
    ) : (
      <div className="chat-history">

  {response.map((msg, index) => (
    <div key={index} className={`message-wrapper ${msg.type}`}>

      <div className="message-label">
        {msg.type === "user" ? "You" : "☁️ StepWise ☁️"}
      </div>

      <div className={`message ${msg.type}`}>
        <ReactMarkdown>{msg.message}</ReactMarkdown>
      </div>

    </div>
  ))}

    {isLoading && (
        <div className="message-wrapper bot">

        <div className="message-label">
            ☁️ StepWise ☁️
        </div>

        <div className="message bot typing">
            <span></span>
            <span></span>
            <span></span>
        </div>

        </div>
    )}

    </div>
    )}

    <div className="location-container">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your country or city..."
        className="location-input"
      />
    </div>

    <div className="input-container">

      <button onClick={handleClear} className="clear-btn">
        Clear
      </button>

      <input
        type="text"
        value={userInput}
        onChange={handleUserInput}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        className="chat-input"
      />

      <button onClick={handleSubmit} className="send-btn">
        ➤
      </button>

    </div>

  </div>
);

};