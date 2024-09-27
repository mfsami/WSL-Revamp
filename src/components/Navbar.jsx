import React, { useState } from "react";
import NOTEXTLOGO from "../assets/images/NOTEXTLOGO.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <div className="flex justify- items-center">
        <img className="w-[55px] mx-2" src={NOTEXTLOGO} alt="/" />
        <div className="flex flex-col">
          <h1 className="w-full text-xl font-bold text-[#ffffff] ">
            WINTER SOCCER LEAGUE
          </h1>
          <p className="w-full text-[#ffffff] ">OFFICIAL SITE</p>
        </div>
      </div>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
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
