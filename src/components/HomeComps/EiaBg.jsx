import React from "react";
import "../../styles/HomeStyles/EiaBg.css";
import EIA from "../../assets/images/eia.png";

const EiaBg = () => {
  return (
    <div className="EiaBgCont">
      <div class="locationText">
        <p>At</p>
        <h1>Servus</h1>
        <h1>Place</h1>
        {/* <p>Edmonton</p> */}
      </div>
      <img className="eiaBGimg" src={EIA} alt="/" />
    </div>
  );
};

export default EiaBg;
