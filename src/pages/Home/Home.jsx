// ./pages/Home/Home.js
import React from "react";
import FrontBg from "./FrontBg";
import Navbar from "./Navbar";
import Upcoming from "./Upcoming";
import Score from "./Score";
import EiaBg from "./EiaBg";
import Footer from "./Footer";

const Home = () => {
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

export default Home;
