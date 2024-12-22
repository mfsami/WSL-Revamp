import React from "react";
import FrontBg from "../components/HomeComps/FrontBg";
import Navbar from "../components/HomeComps/Navbar";
import Upcoming from "../components/HomeComps/Upcoming";
import Score from "../components/HomeComps/Score";
import EiaBg from "../components/HomeComps/EiaBg";
import Footer from "../components/HomeComps/Footer";

const FrontPage = () => {
  return (
    <div>
      <Navbar />
      <FrontBg />
      <Upcoming />
      <Score />
      <EiaBg />
      <Footer />
    </div>
  );
};

export default FrontPage;
