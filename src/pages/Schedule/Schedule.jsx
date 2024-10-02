import React from "react";
import Navbar from "../Home/Navbar";
import Date from "./Date";
import Matches from "./Matches";
import Footer from "../Home/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Date />
      <Matches />
      <Footer />
    </div>
  );
};

export default Home;
