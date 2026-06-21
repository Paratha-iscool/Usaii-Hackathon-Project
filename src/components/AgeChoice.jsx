import React, { useState } from "react";
import "./AgeChoice.css";

function AgeChoice({ onNext }) {
    const [selectedAge, setselectedAge] = useState("");
    const ages = ["Ages 8-12", "Ages 12-19", "Ages 20-59", "Ages 60+"];

    const handleClick = (index) => {
        const age = ages[index];
        setselectedAge(age);
        console.log(age);

        onNext(age);
    };

    return (
        <div className="AgeChoiceWrapper">
            <h2 className="AgeChoiceQuestion">What is your age group?</h2>

            <div className="AgeChoiceGrid">
                {ages.map((age, index) => (
                    <button onClick={() => handleClick(index)} key={index}>
                        {age}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default AgeChoice;