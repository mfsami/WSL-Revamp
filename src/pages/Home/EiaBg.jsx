import React from "react";
import "../../styles/HomeStyles/EiaBg.css";
import EIA from "../../assets/images/eia.png";

const EiaBg = () => {
  return (
    <div className="EiaBgCont">
      <img className="eiaBGimg" src={EIA} alt="/" />
    </div>
  );
};

export default EiaBg;
