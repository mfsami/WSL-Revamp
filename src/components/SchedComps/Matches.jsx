import React from "react";
import "../../styles/ScheduleStyles/Matches.css";

const Matches = () => {
  return (
    <div className="matchesConMain">
      <div className="matchWrapper">
        <div className="matchInfoCont">
          <div className="teamsInfo">
            <h1>DEMBELE FC</h1>
            <span>VS</span>
            <h1>VALVERDE FC</h1>
          </div>
          <div className="dateTime">
            <h1 className="date-box">12/26</h1>
            <h1>8:00 PM</h1>
          </div>
        </div>
        <div className="matchInfoCont"></div>

        <div className="matchInfoCont"></div>
        <div className="matchInfoCont"></div>

        <div className="matchInfoCont"></div>
        <div className="matchInfoCont"></div>
      </div>
    </div>
  );
};

export default Matches;
