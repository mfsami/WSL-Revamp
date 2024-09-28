import React from "react";
import "../../styles/HomeStyles/Upcoming.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ScoreFront = () => {
  return (
    <div className="container">
      {/* Upcoming matches top part dont touch */}
      <div className="upcomingContainer">
        <div className="line left"></div>
        <p className="upcoming">UPCOMING MATCHES</p>
        <div className="line right"></div>
      </div>

      <div className="datesContainer">
        <p>12/27</p>
        <p>12/27</p>
        <p>12/27</p>
        <p>12/27</p>
        <p>12/27</p>
        <SlArrowLeft className="mx-[-50px]" />
        <div className="currentDateContainer">
          <h1 className="text-6xl font-medium">12/27</h1>
          <h1 className="text-2xl font-medium">Tuesday</h1>
        </div>
        <SlArrowRight className="mx-[-50px]" />
        <p>12/27</p>
        <p>12/27</p>
        <p>12/27</p>
        <p>12/27</p>
        <p>12/27</p>
      </div>
    </div>
  );
};

export default ScoreFront;
