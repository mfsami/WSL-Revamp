import React, { useState } from "react";
import NOTEXTLOGO from "../../assets/images/NOTEXTLOGO.png";
import "../../styles/HomeStyles/Navbar.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="navMainContainer">
      <div className="logoTextContainer">
        <div className="logoNav">
          <img src={NOTEXTLOGO} alt="/" />
          <div className="textCol">
            <h1 className="textCol ">WINTER SOCCER LEAGUE</h1>
            <p className="textCol">OFFICIAL SITE</p>
          </div>
        </div>
      </div>
      <div className="pagesNav">
        <ul className="hidden md:flex">
          <li className="p-4">HOME</li>
          <li className="p-4">TEAMS</li>
          <li className="p-4">RANKINGS</li>
          <li className="p-4">STATS</li>
          <li className="p-4">SCHEDULE</li>
          <li className="p-4">HIGHLIGHTS</li>
          <li className="p-4">AWARDS</li>
        </ul>
      </div>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }>
        <h1 className="w-full text-3xl font-bold text-[#00DF9A] m-4">REACT</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

<div className="flex items-center flex-col"></div>;

export default Navbar;
