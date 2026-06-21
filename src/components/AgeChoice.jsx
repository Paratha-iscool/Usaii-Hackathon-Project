import React from "react";
import { useState } from "react";
import { generateContent } from "./Model";

function AgeChoice() {
    const [selectedAge, setselectedAge] = useState("");
    const ages = ["Child", "Teen", "Adult", "Elderly"]

    const handleClick = (index) => {
        setselectedAge(ages[index])
        generateContent("Additionally the user is of the age range: " + selectedAge)
        console.log(selectedAge)
    }
    return (
        <div className="AgeChoice">
           {ages.map((age, index) => (
                <button onClick={() => handleClick(index)} key={index}>
                    {age}
                </button>
            ))}
        </div>
    )
}

export default AgeChoice;