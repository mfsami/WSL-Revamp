import React, { useState, useRef } from "react";
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
  const teamDetailsRef = useRef(null);

  const handleTeamClick = (team) => {
    setSelectedTeam(team);
    // Smoothly scroll to the team details section
    teamDetailsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#161616]">
      <Navbar />

      <main className="container max-w-3xl mx-auto px-6 py-8">
        {/* Team Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {teams.map((team) => (
            <div
              key={team.name}
              onClick={() => handleTeamClick(team)}
              className={`p-4 rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 ${
                selectedTeam.name === team.name
                  ? "bg-[#424242]"
                  : "bg-[#1a1a1a] hover:bg-[#222222]"
              }`}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-full overflow-hidden">
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
        <div
          ref={teamDetailsRef}
          className="bg-[#1a1a1a] rounded-lg p-6 transition-colors">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6 mb-8">
            <div className="w-24 h-24 bg-[#1a1a1a] rounded-full overflow-hidden">
              <img
                src={selectedTeam.logo}
                alt={`${selectedTeam.name} Logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-white text-2xl font-bold">
                {selectedTeam.name}
              </h3>
              <p className="text-gray-400">
                {selectedTeam.players.length} players
              </p>
            </div>
          </div>

          {/* Players Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedTeam.players.map((player) => (
              <div
                key={`${player.name}-${player.number}`}
                className="bg-[#161616] rounded-lg p-4 hover:bg-[#222222] transition-colors">
                <div className="text-white font-semibold">{player.name}</div>
                <div className="text-gray-400 text-sm">{player.position}</div>
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
