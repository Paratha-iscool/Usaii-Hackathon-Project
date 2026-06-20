import React from "react";
import { useState } from "react";

function EmotionsChoice() {
    const [selectedEmotion, setselectedEmotion] = useState("");
    const emotions = ["Scared", "Confused", "Frustrated", "Overwhelmed"]
    return (
        <div className="EmotionsChoice">
           {emotions.map((emotion, index) => (
                <button onClick={() => setselectedEmotion(emotions[index])} key={index}>
                    {emotion}
                </button>
            ))}
        </div>
    )
}

export default EmotionsChoice;