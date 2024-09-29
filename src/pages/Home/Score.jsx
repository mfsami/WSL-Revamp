import React from "react";
import "../../styles/HomeStyles/Score.css";

const Score = () => {
  return (
    <div className="scoreCon">
      <div className="matchCon">
        <h1>Matches</h1>
        <div className="matchNum">
          <p>01</p>
          <p className="text-white">02</p>
          <p>03</p>
          <p>04</p>
          <p>05</p>
          <p>06</p>
        </div>
      </div>
      <div className="matchInfoCon">
        <h1 className="team1">Dembele Fc</h1>
        <div className="matchInfo">
          <p>12/26 8:00 PM</p>
          <h1 className="matchScore">3:2</h1>
          <p>REFEREE ADNAN EL-TAWIL</p>
        </div>
        <h1 className="team2">Valverde Fc</h1>
      </div>
    </div>
  );
};

export default Score;
