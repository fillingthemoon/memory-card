import React, { useState } from "react";

const Scoreboard = ({score}) => {

  return (
    <div id="scoreboard-div">
      <h2>Score: {score}</h2>
      <h2>Max score: {score}</h2>
    </div>
  );
}

export default Scoreboard;
