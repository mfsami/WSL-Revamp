import React from "react";
import "../../styles/HomeStyles/Footer.css";
import NOTEXTLOGOGREY from "../../assets/images/NOTEXTLOGOGREY.png";

const Footer = () => {
  return (
    <div className="footerCont">
      <div className="topFooterCont">
        <div className="lineFoot left"></div>
        <img className="footerLogo" src={NOTEXTLOGOGREY} alt="/" />
        <div className="lineFoot right"></div>
      </div>
    </div>
  );
};

export default Footer;
