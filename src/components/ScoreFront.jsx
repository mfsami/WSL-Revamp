import React from "react";
import "../styles/ScoreFront.css";

const ScoreFront = () => {
  return (
    <div className="container">
      <div className="upcomingContainer">
        <div className="line left"></div>
        <p className="upcoming">UPCOMING MATCHES</p>
        <div className="line right"></div>
      </div>
    </div>
  );
};

export default ScoreFront;
