import { useState } from "react";

import LandingPage from "./components/LandingPage";
import EmotionsChoice from "./components/EmotionsChoice";
import AgeChoice from "./components/AgeChoice";
import Home from "./components/Home";

function App() {
  const [emotion, setEmotion] = useState("");
  const [age, setAge] = useState("");
  const [currentPage, setCurrentPage] = useState("landing");

  return (
    <>
      {currentPage === "landing" && (
        <LandingPage onStart={() => setCurrentPage("emotion")} />
      )}

      {currentPage === "emotion" && (
        <EmotionsChoice
          onNext={(emotionValue) => {
            setEmotion(emotionValue);
            setCurrentPage("age");
          }}
        />
      )}

      {currentPage === "age" && (
        <AgeChoice
          onNext={(ageValue) => {
            setAge(ageValue);
            setCurrentPage("chat");
          }}
        />
      )}

      {currentPage === "chat" && (
        <Home emotion={emotion} age={age} />
      )}
    </>
  );
}

export default App;