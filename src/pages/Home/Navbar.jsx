import { Link } from "react-router-dom";
import NOTEXTLOGO from "../../assets/images/NOTEXTLOGO.png";
import "../../styles/HomeStyles/Navbar.css";

const Navbar = () => {
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
          {/* Use the Link component to route to different pages */}
          <li className="p-4">
            <Link to="/">HOME</Link>
          </li>
          <li className="p-4">
            <Link to="/teams">TEAMS</Link>
          </li>
          <li className="p-4">
            <Link to="/rankings">RANKINGS</Link>
          </li>
          <li className="p-4">
            <Link to="/Stats">STATS</Link>
          </li>
          <li className="p-4">
            <Link to="/schedule">SCHEDULE</Link>
          </li>
          <li className="p-4">
            <Link to="/highlights">HIGHLIGHTS</Link>
          </li>
          <li className="p-4">
            <Link to="/awards">AWARDS</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
