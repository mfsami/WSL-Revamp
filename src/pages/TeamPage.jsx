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
        { name: "Sohaib Jomha", number: 1, position: "FWD" },
        { name: "Yousif Mesh", number: 4, position: "FWD/DEF" },
        { name: "Rahal Rahal", number: 10, position: "FWD/DEF" },
        { name: "Muneer Nazir", number: 7, position: "GK" },
        { name: "Adnan Shaban", number: 11, position: "FWD/DEF" },
        { name: "Abdirahman Sheikhdon", number: 11, position: "FWD" },
        { name: "Omar Jomha", number: 11, position: "FWD/DEF" },
      ],
    },
    {
      name: "DABEAST FC",
      logo: ZakLogo,
      players: [
        { name: "Zakariya Assaf", number: 1, position: "FWD/DEF" },
        { name: "Yaqin Issa", number: 10, position: "FWD/DEF" },
        // { name: "Omar Assaf", number: 4, position: "FWD/DEF" },
        { name: "Shaheryar Ahsan", number: 11, position: "GK" },
        { name: "Sami El-sayed", number: 7, position: "FWD/DEF" },
        { name: "Mosaab Jomha", number: 11, position: "DEF" },
        { name: "Zayd Elzein", number: 11, position: "FWD/DEF" },
        { name: "Mohammed El-khatib", number: 11, position: "DEF" },
      ],
    },
    {
      name: "VALVERDE FC",
      logo: AdnanLogo,
      players: [
        { name: "Adnan El-tawil", number: 1, position: "FWD/DEF" },
        { name: "Ahmed Assaf", number: 1, position: "FWD/DEF" },
        { name: "Khalid Shaheen", number: 4, position: "FWD" },
        { name: "Mohammad Sheikh Ali", number: 10, position: "FWD" },
        { name: "Abdelrahman Ebeid", number: 7, position: "FWD/DEF" },
        { name: "Taha El-sayed", number: 11, position: "FWD/DEF" },
        { name: "Yzan Al-maani", number: 11, position: "FWD/DEF" },
        { name: "Khalid Al-kadri", number: 11, position: "GK" },
      ],
    },
    {
      name: "COLE WORLD FC",
      logo: ColeLogo,
      players: [
        { name: "Rayyan Islam", number: 1, position: "FWD" },
        { name: "Mohammad Anshasi", number: 4, position: "FWD" },
        { name: "Aref El-Tawil", number: 10, position: "GK" },
        { name: "Rehan Khadri", number: 7, position: "FWD/DEF" },

        { name: "Adnan El-tayan", number: 11, position: "FWD" },
        { name: "Sohaib Khadri", number: 11, position: "FWD" },
        { name: "Hussein Al-turk", number: 11, position: "FWD" },
      ],
    },
    {
      name: "PEDRI FC",
      logo: PedriLogo,
      players: [
        { name: "Huthayfah Jomha", number: 1, position: "FWD/DEF" },
        { name: "Abdullah Aderinto", number: 4, position: "FWD/DEF" },
        { name: "Adam Tanouti", number: 10, position: "GK" },
        { name: "Mohamed Elmestiri", number: 7, position: "FWD/DEF" },
        { name: "Rasheed Jomha", number: 11, position: "FWD/DEF" },
        { name: "Mohammad Sadek", number: 11, position: "FWD" },
        { name: "Bilah Rahal", number: 11, position: "DEF" },
        { name: "Redoune Zerqalah", number: 11, position: "FWD" },
      ],
    },
    {
      name: "BOMBS FC",
      logo: BombsLogo,
      players: [
        { name: "Jamal Assaf", number: 1, position: "FWD" },
        { name: "Anes Mohammed", number: 4, position: "FWD" },
        { name: "Adam Deeb", number: 10, position: "FWD" },
        { name: "Amir Bensekhria", number: 7, position: "FWD" },
        { name: "Adam Zahwee", number: 11, position: "GK" },
        { name: "Mostafa Heider", number: 11, position: "FWD/DEF" },
        { name: "Mohammad Al-turk", number: 11, position: "DEF" },
        { name: "Motassim Assaf", number: 11, position: "FWD/DEF" },
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
