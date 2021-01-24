import React, { useState } from "react";
import "./Cards.css";

import img_0 from "../imgs/bandung.jpg";
import img_1 from "../imgs/carrot-juice.jpg";
import img_2 from "../imgs/ice-lemon-tea.jpg";
import img_3 from "../imgs/kopi-o.jpg";
import img_4 from "../imgs/kopi.jpg";
import img_5 from "../imgs/milo-dinosaur.jpg";
import img_6 from "../imgs/oolong-tea.jpg";
import img_7 from "../imgs/soursop.png";
import img_8 from "../imgs/teh-c.jpg";

const Cards = (props) => {
  const imgArr = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];

  const [arr, setArr] = useState(imgArr);
  const { score, setScore } = props;
  const [visited, setVisited] = useState([]);

  const selectCard = (num) => () => {
    let tempArr = [img_0, img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
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
    }
  };

  return (
    <div id="card-div">
      <div 
        className="card" id={arr[0]}
        onClick={selectCard(arr[0])}
      >
      <img className="card-img" src={arr[0]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[1]}
        onClick={selectCard(arr[1])}
      >
      <img className="card-img" src={arr[1]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[2]}
        onClick={selectCard(arr[2])}
      >
      <img className="card-img" src={arr[2]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[3]}
        onClick={selectCard(arr[3])}
      >
      <img className="card-img" src={arr[3]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[4]}
        onClick={selectCard(arr[4])}
      >
      <img className="card-img" src={arr[4]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[5]}
        onClick={selectCard(arr[5])}
      >
      <img className="card-img" src={arr[5]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[6]}
        onClick={selectCard(arr[6])}
      >
      <img className="card-img" src={arr[6]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[7]}
        onClick={selectCard(arr[7])}
      >
      <img className="card-img" src={arr[7]} alt="" /> 
      </div>
      <div 
        className="card" id={arr[8]}
        onClick={selectCard(arr[8])}
      >
      <img className="card-img" src={arr[8]} alt="" /> 
      </div>
    </div>
  );
}

export default Cards
