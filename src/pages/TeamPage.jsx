import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

const TeamPage = () => {
  const teams = [
    {
      name: "DEMBELE FC",
      logo: "/team-logos/dembele.png",
      players: [
        { name: "Player", number: 1, position: "GK" },
        { name: "Player", number: 4, position: "DEF" },
        { name: "Player", number: 10, position: "MID" },
        { name: "Player", number: 7, position: "FWD" },
        { name: "Player", number: 11, position: "MID" },
      ],
    },
    {
      name: "DABEAST FC",
      logo: "/team-logos/valverde.png",
      players: [
        { name: "Player", number: 1, position: "GK" },
        { name: "Player", number: 4, position: "DEF" },
        { name: "Player", number: 10, position: "MID" },
        { name: "Player", number: 7, position: "FWD" },
        { name: "Player", number: 11, position: "MID" },
      ],
    },
    {
      name: "VALVERDE FC",
      logo: "/team-logos/haaland.png",
      players: [
        { name: "Player", number: 1, position: "GK" },
        { name: "Player", number: 4, position: "DEF" },
        { name: "Player", number: 10, position: "MID" },
        { name: "Player", number: 7, position: "FWD" },
        { name: "Player", number: 11, position: "MID" },
      ],
    },
    {
      name: "COLE WORLD FC",
      logo: "/team-logos/mbappe.png",
      players: [
        { name: "Player", number: 1, position: "GK" },
        { name: "Player", number: 4, position: "DEF" },
        { name: "Player", number: 10, position: "MID" },
        { name: "Player", number: 7, position: "FWD" },
        { name: "Player", number: 11, position: "MID" },
      ],
    },
    {
      name: "BOMBS FC",
      logo: "/team-logos/bellingham.png",
      players: [
        { name: "Player", number: 1, position: "GK" },
        { name: "Player", number: 4, position: "DEF" },
        { name: "Player", number: 10, position: "MID" },
        { name: "Player", number: 7, position: "FWD" },
        { name: "Player", number: 11, position: "MID" },
      ],
    },
  ];

  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mb-16 mt-20">
        {/* Team Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedTeam.name === team.name
                  ? "bg-red-600"
                  : "bg-[#2a2a2a] hover:bg-[#3a3a3a]"
              }`}
              onClick={() => setSelectedTeam(team)}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center">
                  <img
                    src={team.logo}
                    // ADD TEAM LOGOS HERE
                    alt={``}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h2 className="text-white text-lg font-semibold">
                  {team.name}
                </h2>
              </div>
            </div>
          ))}
        </div>

        {/* Team Details */}
        <div className="bg-[#2a2a2a] rounded-lg p-6">
          <div className="flex items-center space-x-6 mb-8">
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center">
              <img
                src={selectedTeam.logo}
                // ADD TEAM LOGOS HERE
                alt={``}
                className="w-20 h-20 object-contain"
              />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold">
                {selectedTeam.name}
              </h3>
              <p className="text-gray-400">
                Squad Size: {selectedTeam.players.length} players
              </p>
            </div>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {selectedTeam.players.map((player) => (
              <div
                key={`${player.name}-${player.number}`}
                className="bg-[#3a3a3a] rounded-lg p-4 hover:bg-[#4a4a4a] transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{player.name}</p>
                    <p className="text-gray-400 text-sm">{player.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
