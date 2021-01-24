import React, { useState } from "react";
import Cards from "./components/Cards";
import Scoreboard from "./components/Scoreboard";

import "./App.css";

const  App = () => {
  const [score, setScore] = useState(0);

  return (
    <div id="app-div">
      <h1>Memory Game</h1>
      <h3>GitHub repo <a href="https://github.com/fillingthemoon/memory-card" target="_blank" rel="noreferrer">here</a></h3>
      <h3 id="instr">Click on each drink only once!</h3>
      <Scoreboard score={score}/>
      <Cards score={score} setScore={setScore} />
    </div>
  );
}

export default App;
