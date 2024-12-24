// COLOURS: NAVBAR: bg-[#1a1a1a]
// DARKER GIANT BG: bg-[#161616]

import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";
import heroImage from "../assets/images/hello.png";

const LandingPage = () => {
  const upcomingMatches = [
    {
      id: 1,
      homeTeam: "VALVERDE FC",
      awayTeam: "PEDRI FC",
      date: "Dec 26",
      time: "7:15 PM",
      venue: "Servus Place",
    },
    {
      id: 2,
      homeTeam: "DEMBELE FC",
      awayTeam: "BOMBS FC",
      date: "Dec 26",
      time: "7:15 PM",
      venue: "Servus Place",
    },
    {
      id: 3,
      homeTeam: "DABEAST FC",
      awayTeam: "BOMBS FC",
      date: "Dec 26",
      time: "7:50 PM",
      venue: "Servus Place",
    },
    {
      id: 4,
      homeTeam: "DEMBELE FC",
      awayTeam: "COLE WORLD FC",
      date: "Dec 26",
      time: "7:50 PM",
      venue: "Servus Place",
    },
    {
      id: 5,
      homeTeam: "PEDRI FC",
      awayTeam: "COLE WORLD FC",
      date: "Dec 26",
      time: "8:25 PM",
      venue: "Servus Place",
    },
    {
      id: 6,
      homeTeam: "VALVERDE FC",
      awayTeam: "DABEAST FC",
      date: "Dec 26",
      time: "8:25 PM",
      venue: "Servus Place",
    },
  ];

  return (
    <div className="min-h-screen bg-[#161616]">
      <Navbar />
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "68% center",
          backgroundRepeat: "no-repeat",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

        {/* Content */}
        <div className="relative z-20 max-w-7xl px-6 lg:px-40">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
            {/* Responsive font sizes */}
            WINTER SOCCER LEAGUE
          </h1>
          <p className="text-lg lg:text-2xl text-gray-300 mb-8 max-w-2xl">
            Welcome to the second annual winter soccer league, where champions
            are made and legends are born.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/schedule"
              className="bg-white text-[#161616] px-8 py-4 rounded font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              View Schedule <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Matches */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {/* Responsive font sizes */}
              Upcoming Matches - 12/26
            </h2>
            <Link
              to="/schedule"
              className="text-white hover:text-gray-300 transition-colors inline-flex items-center">
              View All Matches
              <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="bg-[#161616] rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
                    <span className="text-white font-medium">
                      {match.homeTeam}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white">VS</div>
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-medium">
                      {match.awayTeam}
                    </span>
                    <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
                  </div>
                </div>
                <div className="mt-4 text-gray-400">
                  <div>
                    <span className="text-white">{match.date}</span> •{" "}
                    {match.time}
                  </div>
                  <div>{match.venue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
