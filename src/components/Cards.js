import React, { useState } from "react";
import "./Cards.css";

const Cards = (props) => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  const { score, setScore } = props;
  const [visited, setVisited] = useState([]);

  const selectCard = (num) => () => {
    let tempArr = [1, 2, 3, 4, 5, 6];
    for (let i = tempArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    setArr(tempArr);
    setScore(score + 1);

    console.log(num);
  };

  return (
    <div id="card-div">
      <div 
        className="card" id={arr[0]}
        onClick={selectCard(arr[0])}
      >Card {arr[0]}</div>
      <div 
        className="card" id={arr[1]}
        onClick={selectCard(arr[1])}
      >Card {arr[1]}</div>
      <div 
        className="card" id={arr[2]}
        onClick={selectCard(arr[2])}
      >Card {arr[2]}</div>
      <div 
        className="card" id={arr[3]}
        onClick={selectCard(arr[3])}
      >Card {arr[3]}</div>
      <div 
        className="card" id={arr[4]}
        onClick={selectCard(arr[4])}
      >Card {arr[4]}</div>
      <div 
        className="card" id={arr[5]}
        onClick={selectCard(arr[5])}
      >Card {arr[5]}</div>
    </div>
  );
}

export default Cards
