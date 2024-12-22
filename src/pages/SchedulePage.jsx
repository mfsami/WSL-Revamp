import React from "react";
import Navbar from "../components/HomeComps/Navbar";
import Date from "../components/SchedComps/Date";
import Matches from "../components/SchedComps/Matches";
import Footer from "../components/HomeComps/Footer";

const SchedulePage = () => {
  return (
    <div>
      <Navbar />
      <Date />
      <Matches />
      <Footer />
    </div>
  );
};

export default SchedulePage;
