import React from "react";
import "../../styles/ScheduleStyles/Date.css";

const Date = ({ selectedDay, setSelectedDay }) => {
  const days = ["Tues", "Wed", "Thurs"];
  return (
    <div className="dateConMain">
      <div className="dateCon">
        <h1>Week</h1>
        <div className="dateNum">
          {days.map((day) => (
            <button
              key={day}
              className={`dayButton ${selectedDay === day ? "active" : ""}`}
              onClick={() => setSelectedDay(day)}>
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Date;
