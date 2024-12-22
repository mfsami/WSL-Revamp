import React from "react";
import "../../styles/ScheduleStyles/Date.css";
const Date = () => {
  return (
    <div className="dateConMain">
      <div className="dateCon">
        <h1>Week</h1>
        <div className="dateNum">
          <p>01</p>
          <p className="text-white">02</p>
          <p>03</p>
        </div>
        <div className="dateNum">
          <p>Tues</p>
          <p className="text-white">Wed</p>
          <p>Thurs</p>
        </div>
      </div>
    </div>
  );
};

export default Date;
