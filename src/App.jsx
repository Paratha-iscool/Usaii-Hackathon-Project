import AgeChoice from './components/AgeChoice'
import EmotionsChoice from './components/EmotionsChoice'
import { EmotionsContext } from './components/EmotionsContext';
import { useState } from 'react';
import Home from "./components/Home"

function App() {

  return (
    <>
      <EmotionsChoice></EmotionsChoice>
      <AgeChoice></AgeChoice>
      <Home></Home>
    </>
  )
}

export default App
