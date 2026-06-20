import React, { useState } from "react";
import {generateContent} from './Model';
import ReactMarkdown from 'react-markdown';

export default function Home() {
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
    if (!userInput.trim()) {
        setResponse([{ type: "system", message: "Please enter a prompt.." }]);
        return;
    }
  }

  setIsLoading(true);
  try {
    const res = await generateContent(userInput);
    setResponse(prevResponse => [...prevResponse, {type: "user", message: userInput}, {type: "bot", message: res()}
    ])
    setUserInput('');
  } catch (err) {
    console.error("Error generating responde:", err);
    setResponse(prevResponse => [
        ...prevResponse,
        { type: "system", message: "An error has occured, response could not be generated. :c"}
    ])
  }
  finally {
    setIsLoading(false);
  }

const handleKeyPress = (e) => {
    if(e.key == 'Enter') {
        e.preventDefault();
        handleSubmit();
    }
}
}
