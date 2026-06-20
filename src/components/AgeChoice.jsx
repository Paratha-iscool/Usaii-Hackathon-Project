import React from "react";
import { useState } from "react";

function AgeChoice() {
    const [selectedAge, setselectedAge] = useState("");
    const ages = ["Child", "Teen", "Adult", "Eldery Person"]
    return (
        <div className="EmotionsChoice">
           {ages.map((age, index) => (
                <button onClick={() => setselectedAge(ages[index])} key={index}>
                    {emotion}
                </button>
            ))}
        </div>
    )
}

export default EmotionsChoice;