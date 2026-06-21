import { useState } from "react";

import LandingPage from "./components/LandingPage";
import EmotionsChoice from "./components/EmotionsChoice";
import AgeChoice from "./components/AgeChoice";
import Home from "./components/Home";

function App() {
  const [emotion, setEmotion] = useState("");
  const [age, setAge] = useState("");
  const flow = ["landing", "emotion", "age", "chat"];
  const [currentPage, setCurrentPage] = useState("landing");

  const goBack = () => {
    const currentIndex = flow.indexOf(currentPage);
    if (currentIndex > 0) {
      setCurrentPage(flow[currentIndex - 1]);
    }
  };

  return (
    <>
      {currentPage === "landing" && (
        <LandingPage onStart={() => setCurrentPage("emotion")} />
      )}

      {currentPage === "emotion" && (
       <EmotionsChoice
          onNext={(emotion) => {
            setEmotion(emotion);
            setCurrentPage("age");
          }}
          onBack={goBack}
        />
      )}

      {currentPage === "age" && (
        <AgeChoice
          onNext={(ageValue) => {
            setAge(ageValue);
            setCurrentPage("chat");
          }}
          onBack={goBack}
        />
      )}

      {currentPage === "chat" && (
        <Home emotion={emotion} age={age} onBack={goBack} />
      )}
    </>
  );
}

export default App;