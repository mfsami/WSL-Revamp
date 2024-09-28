import React from "react";
import BGIMAGE from "../../assets/images/BG-IMAGE.png";
import "../../styles/HomeStyles/FrontBg.css";

const FrontBg = () => {
  return (
    <div>
      <img className="BGimg" src={BGIMAGE} alt="/" />
      {/* <div className="textContainer">
        <h1 className="FIGHT">Fight</h1>
        <h1 className="WITH">with</h1>
        <h1 className="WSL">WSL</h1>
      </div> */}
    </div>
  );
};

export default FrontBg;
