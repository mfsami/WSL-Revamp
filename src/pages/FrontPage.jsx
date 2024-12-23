import React from "react";
import { Link } from "react-router-dom";
import { Trophy, ArrowRight, CalendarDays, Star } from "lucide-react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

const LandingPage = () => {
  const upcomingMatches = [
    {
      id: 1,
      homeTeam: "TEAM 1",
      awayTeam: "TEAM 2",
      date: "Dec 23",
      time: "03:00 PM",
      venue: "Servus Place",
    },
    {
      id: 2,
      homeTeam: "TEAM 1",
      awayTeam: "TEAM 2",
      date: "Dec 24",
      time: "03:00 PM",
      venue: "Servus Place",
    },
    {
      id: 3,
      homeTeam: "TEAM 1",
      awayTeam: "TEAM 2",
      date: "Dec 25",
      time: "03:00 PM",
      venue: "Servus Place",
    },
    {
      id: 4,
      homeTeam: "TEAM 1",
      awayTeam: "TEAM 2",
      date: "Dec 26",
      time: "03:00 PM",
      venue: "Servus Place",
    },
    {
      id: 5,
      homeTeam: "TEAM 1",
      awayTeam: "TEAM 2",
      date: "Dec 27",
      time: "03:00 PM",
      venue: "Servus Place",
    },
    {
      id: 6,
      homeTeam: "TEAM 1",
      awayTeam: "TEAM 2",
      date: "Dec 28",
      time: "03:00 PM",
      venue: "Servus Place",
    },
  ];

  return (
    <div className="min-h-screen bg-[#161616]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#161616] to-transparent z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/api/placeholder/1920/1080"
            alt="Soccer field"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <h1 className="text-7xl font-bold text-white mb-6">
            WINTER SOCCER LEAGUE
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-2xl">
            Experience the thrill of winter soccer where champions are made and
            legends are born.
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
            <h2 className="text-3xl font-bold text-white">Upcoming Matches</h2>
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
