import React, { useContext, useState } from "react";
import {generateContent} from './Model';
import ReactMarkdown from "react-markdown";



export default function Home({ emotion, age }) {

    const [userInput, setUserInput] = useState('');
    const [response, setResponse] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClear = () => {
    setUserInput('');
    setResponse([]);
    setIsLoading(false);
  };

const handleSubmit = async () => {
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

        const res = await generateContent(prompt);

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
    <div className= "chat-container">
        {response.length === 0 ? (<h1>Need any help?</h1>) : (
        <div className = "chat-history"> 
            {response.map((msg, index) => (
                <p key={index} className={`message ${msg.type}`}>
                 <ReactMarkdown>{msg.message}</ReactMarkdown>
                 </p>
            ))}
            {isLoading && <p className="loading-text">Working hard!</p>}
        </div>
        )}

        <div className="input-container">
            <button onClick={(handleClear)} className="clear-btn">Clear</button>

            <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                onKeyDown={handleKeyPress}
                placeholder="Type your message here..."
                className="chat-input"
            />

            <button onClick={handleSubmit} className="send-btn">
            </button>
        </div>
    </div>
)

};