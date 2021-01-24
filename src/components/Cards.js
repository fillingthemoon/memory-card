import React, { useState } from "react";
import "./Cards.css";

const Cards = (props) => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const { score, setScore } = props;
  const [visited, setVisited] = useState([]);

  const selectCard = (num) => () => {
    let tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = tempArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]];
    }
    setArr(tempArr);
    setScore(score + 1);

    if (visited.includes(num)) {
      setScore(0);
      setVisited([]);
    } else {
      visited.push(num);
      setVisited(visited);
      console.log(visited);
    }
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
      <div 
        className="card" id={arr[6]}
        onClick={selectCard(arr[6])}
      >Card {arr[6]}</div>
      <div 
        className="card" id={arr[7]}
        onClick={selectCard(arr[7])}
      >Card {arr[7]}</div>
      <div 
        className="card" id={arr[8]}
        onClick={selectCard(arr[8])}
      >Card {arr[8]}</div>
    </div>
  );
}

export default Cards
