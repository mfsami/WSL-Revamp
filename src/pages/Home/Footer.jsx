import React from "react";
import "../../styles/HomeStyles/Footer.css";
import NOTEXTLOGOGREY from "../../assets/images/NOTEXTLOGOGREY.png";
import footerLogos from "../../assets/images/footerLogos.png";

const Footer = () => {
  return (
    <div className="footerCont">
      <div className="topFooterCont">
        <div className="lineFoot left"></div>
        <img className="footerLogo" src={NOTEXTLOGOGREY} alt="/" />
        <div className="lineFoot right"></div>
      </div>
      <div className="footerLogosCont">
        <img className="footerLogosImg" src={footerLogos} alt="/" />
      </div>
      <div className="secondFootCont"></div>
      <div className="bottomFootCont">
        <p>@WSL 2025 CREATED BY SAMI-ELSAYED</p>
      </div>
    </div>
  );
};

export default Footer;
