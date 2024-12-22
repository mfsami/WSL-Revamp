import React from "react";
import BGIMAGE from "../../assets/images/BG-IMAGE.png";
import "../../styles/HomeStyles/FrontBg.css";

const FrontBg = () => {
  return (
    <div className="frontBgCont">
      <div className="textContainer">
        <h1>Fight</h1>
        <div className="redLine"></div>
        <h1>with</h1>
        <h1>WSL</h1>
      </div>
      <img className="BGimg" src={BGIMAGE} alt="/" />
    </div>
  );
};

export default FrontBg;
