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
import img_9 from "../imgs/bubble-tea.jpg";
import img_10 from "../imgs/grass-jelly.jpg";
import img_11 from "../imgs/yakult.jpg";
import img_12 from "../imgs/michael-jackson.jpg";
import img_13 from "../imgs/tiger-beer.png";
import img_14 from "../imgs/sugarcane.jpg";
import img_15 from "../imgs/soybean-milk.jpg";

let gloArr = [img_0, img_1, img_2, img_3, 
  img_4, img_5, img_6, img_7, 
  img_8, img_9, img_10, img_11,
  img_12, img_13, img_14, img_15];

const Cards = (props) => {
  const imgArr = gloArr;

  const [arr, setArr] = useState(imgArr);
  const { score, setScore } = props;
  const [visited, setVisited] = useState([]);

  const selectCard = (num) => () => {
    let tempArr = gloArr;

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

  const renderImgs = () => {
    let result = [];
    for (let i = 0; i < 16; i++) {
      result.push(
        <div 
          key={i}
          className="card" id={arr[i]}
          onClick={selectCard(arr[i])}
        >
        <img className="card-img" src={arr[i]} alt="" /> 
        </div>
      );
    }
    return result;
  };

  return (
    <div id="card-div">
      {renderImgs()}   
    </div>
  );
}

export default Cards
