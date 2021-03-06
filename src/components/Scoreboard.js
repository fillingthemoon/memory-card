import React, { useState } from "react";

import "./Scoreboard.css"

const Scoreboard = ({score}) => {
  const [highscore, setHighscore] = useState(0);

  if (highscore < score) {
    setHighscore(score);
  }

  return (
    <div id="scoreboard-div">
      <h2>Score: {score} </h2>
      <h2>Highscore: {highscore}</h2>
    </div>
  );
}

export default Scoreboard;
