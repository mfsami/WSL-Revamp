import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NOTEXTLOGO from "../../assets/images/NOTEXTLOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/teams", label: "TEAMS" },
    { path: "/rankings", label: "RANKINGS" },
    { path: "/stats", label: "STATS" },
    { path: "/schedule", label: "SCHEDULE" },
    { path: "/highlights", label: "HIGHLIGHTS" },
    { path: "/awards", label: "AWARDS" },
  ];

  return (
    <nav className="bg-[#161616] shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo and Title Section */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-12 w-12" src={NOTEXTLOGO} alt="/" />
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col">
                <h1 className="text-white font-bold text-xl">
                  WINTER SOCCER LEAGUE
                </h1>
                <p className="text-gray-400 text-sm">OFFICIAL SITE</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 text-gray-300 hover:text-white hover:bg-[#242424] rounded-md text-sm font-medium transition-colors duration-200">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#242424] focus:outline-none">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-[#242424] rounded-md"
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
