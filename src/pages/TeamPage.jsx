import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";
import SohaibLogo from "../assets/images/logos/SOHAIB.jpg";
import ZakLogo from "../assets/images/logos/ZAKLOGO.png";
import AdnanLogo from "../assets/images/logos/ADNAN.jpg";
import ColeLogo from "../assets/images/logos/cole.jpg";
import PedriLogo from "../assets/images/logos/pedri.jpg";
import BombsLogo from "../assets/images/logos/bombs.jpg";

const TeamPage = () => {
  const teams = [
    {
      name: "DEMBELE FC",
      logo: SohaibLogo,
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
      logo: ZakLogo,
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
      logo: AdnanLogo,
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
      logo: ColeLogo,
      players: [
        { name: "Player", number: 1, position: "GK" },
        { name: "Player", number: 4, position: "DEF" },
        { name: "Player", number: 10, position: "MID" },
        { name: "Player", number: 7, position: "FWD" },
        { name: "Player", number: 11, position: "MID" },
      ],
    },
    {
      name: "PEDRI FC",
      logo: PedriLogo,
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
      logo: BombsLogo,
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
    <div className="min-h-screen bg-[#161616]">
      <Navbar />

      <main className="container max-w-screen-md mx-auto px-4 py-8 mb-16 mt-20">
        {/* Team Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {teams.map((team) => (
            <div
              key={team.name}
              className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                selectedTeam.name === team.name
                  ? "bg-[#424242]"
                  : "bg-[#1a1a1a] hover:bg-[#222222]"
              }`}
              onClick={() => setSelectedTeam(team)}>
              <div className="flex items-center space-x-3">
                {/* Circle with Team Logo */}
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src={team.logo}
                    alt={`${team.name} Logo`}
                    className="w-full h-full object-cover"
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
        <div className="bg-[#1a1a1a] rounded-lg p-6">
          <div className="flex items-center space-x-6 mb-8">
            {/* Large Circle with Selected Team Logo */}
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={selectedTeam.logo}
                alt={`${selectedTeam.name} Logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold">
                {selectedTeam.name}
              </h3>
              <p className="text-gray-400">
                {selectedTeam.players.length} players
              </p>
            </div>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedTeam.players.map((player) => (
              <div
                key={`${player.name}-${player.number}`}
                className="bg-[#161616] rounded-lg p-4 transition-colors duration-300">
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
