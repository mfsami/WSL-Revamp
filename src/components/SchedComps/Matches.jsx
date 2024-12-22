import React from "react";
import "../../styles/ScheduleStyles/Matches.css";

const Matches = ({ matches }) => {
  return (
    <div className="matchesConMain">
      {matches.length ? (
        matches.map((match, index) => (
          <div key={index} className="matchInfoCont">
            <div className="teamsInfo">
              <h1>{match.team1}</h1>
              <span>VS</span>
              <h1>{match.team2}</h1>
            </div>
            <div className="dateTime">
              <h1 className="date-box">{match.date}</h1>
              <h1>{match.time}</h1>
            </div>
          </div>
        ))
      ) : (
        <p className="noMatches">No matches available for the selected day.</p>
      )}
    </div>
  );
};

export default Matches;
