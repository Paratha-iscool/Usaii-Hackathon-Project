import "./EmotionsChoice.css";
import React, { useContext } from "react";
import { useState } from "react";

function EmotionsChoice({ onNext }) {
    const [selectedEmotion, setselectedEmotion] = useState("")
    const emotions = ["Scared", "Confused", "Frustrated", "Overwhelmed"]

    const handleClick = (index) => {
        const emotion = emotions[index];
        setselectedEmotion(emotion);
        console.log(emotion);

        onNext(emotion);
    };

    return (
        <div className="emotion-container">
            <h2>How are you feeling right now?</h2>

            <div className="emotion-grid">
                {emotions.map((emotion, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className="emotion-btn"
                    >
                        {emotion}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default EmotionsChoice;