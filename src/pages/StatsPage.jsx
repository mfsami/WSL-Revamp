import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

const StatsPage = () => {
  const [selectedStatType, setSelectedStatType] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "goals",
    direction: "desc",
  });

  const players = [
    // Goalies
    {
      name: "Adam Tanouti",
      team: "TEAM A",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Aref El-Tawil",
      team: "TEAM B",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Muneer Nazir",
      team: "TEAM C",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Khaled Al-Kadri",
      team: "TEAM D",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Adam Zahwee",
      team: "TEAM E",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Shaheryar Ahsan",
      team: "TEAM F",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },

    // Defenders
    {
      name: "Mosaab Jomha",
      team: "TEAM A",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Bilal Rahal",
      team: "TEAM B",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohamed Al-Turk",
      team: "TEAM C",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohammed Elkhatib",
      team: "TEAM D",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },

    // Attackers
    {
      name: "Sohaib Jomha",
      team: "TEAM A",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Hussien Al-Turk",
      team: "TEAM B",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Adnan El-Tayan",
      team: "TEAM C",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Rayyan Islam",
      team: "TEAM D",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohamed Elmestiri",
      team: "TEAM E",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Khalid Shaheen",
      team: "TEAM F",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Redouane Zerqalah",
      team: "TEAM A",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Abdirahman Sheikhdon",
      team: "TEAM B",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Jamal Assaf",
      team: "TEAM C",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },

    // Both
    {
      name: "Adnan El-Tawil",
      team: "TEAM A",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Zayd Elzein",
      team: "TEAM B",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Omar Jomha",
      team: "TEAM C",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Yazan Al Maani",
      team: "TEAM D",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Motasim Assaf",
      team: "TEAM E",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Zakariya Assaf",
      team: "TEAM F",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Ahmed Assaf",
      team: "TEAM A",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Yaqin Issa",
      team: "TEAM B",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Sami El-Sayed",
      team: "TEAM C",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Rehan Khadri",
      team: "TEAM D",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Taha El-Sayed",
      team: "TEAM E",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Rahal Rahal",
      team: "TEAM F",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Huthayfah Jomha",
      team: "TEAM A",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Yousif Al Mishhedani",
      team: "TEAM B",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Amir Bensekhria",
      team: "TEAM C",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mostafa Heider",
      team: "TEAM D",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Sohaib Khadri",
      team: "TEAM E",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Abdullah Aderinto",
      team: "TEAM F",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
  ];

  const statTypes = [
    { id: "goals", label: "Top Scorers" },
    { id: "assists", label: "Top Assisters" },
    { id: "goalkeepers", label: "Goalkeepers" },
  ];

  const teams = [...new Set(players.map((player) => player.team))];

  const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      if (direction === "asc") {
        return a[key] - b[key];
      }
      return b[key] - a[key];
    });
  };

  const filteredPlayers = (() => {
    let filtered = [...players];

    if (selectedTeam !== "all") {
      filtered = filtered.filter((player) => player.team === selectedTeam);
    }

    switch (selectedStatType) {
      case "goalkeepers":
        return filtered.filter((player) => player.position === "GK");
      case "goals":
        return sortData(filtered, "goals", "desc");
      case "assists":
        return sortData(filtered, "assists", "desc");
      case "players":
        // Default to showing all players if no team is selected
        return filtered.sort((a, b) => a.name.localeCompare(b.name));
      default:
        // Sort alphabetically if "All Players" is selected
        return selectedTeam === "all"
          ? filtered.sort((a, b) => a.name.localeCompare(b.name))
          : filtered;
    }
  })();

  return (
    <div className="min-h-screen bg-[#161616]">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mb-16 max-w-screen-lg">
        {/* Navigation Row */}
        <div className="flex flex-col items-center gap-6 mb-8">
          {/* Filter Row */}
          <div className="flex items-center">
            <label className="text-gray-400 font-semibold mr-4">
              Filter by Team:
            </label>
            <div className="relative">
              <select
                value={selectedTeam}
                onChange={(e) => {
                  const value = e.target.value;
                  setSelectedTeam(value);
                  if (value === "all") {
                    setSelectedStatType("players"); // Default to "players" when selecting "All Players"
                  }
                }}
                className={`px-6 py-3 pr-10 rounded-lg font-semibold bg-[#2a2a2a] text-white transition-all duration-300 whitespace-nowrap appearance-none hover:bg-[#3a3a3a]`}>
                <option value="all">All Players</option>
                {teams.map((team) => (
                  <option key={team} value={team}>
                    {team}
                  </option>
                ))}
              </select>
              <span
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                style={{ fontSize: "1.5rem", lineHeight: "1rem" }}>
                &#9662;
              </span>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-wrap justify-center items-center gap-4">
            {/* Players Button */}
            <button
              onClick={() => {
                setSelectedStatType("players");
                setSelectedTeam("all"); // Reset team filter when clicking "Players"
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedStatType === "players"
                  ? "bg-red-600 text-white"
                  : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"
              }`}>
              Players
            </button>

            {/* Stat Types Buttons */}
            {statTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => {
                  setSelectedStatType(type.id);
                  setSelectedTeam("all"); // Reset team filter when switching stat type
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedStatType === type.id
                    ? "bg-red-600 text-white"
                    : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"
                }`}>
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Table */}
        <div className="bg-[#1a1a1a] rounded-lg p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-3 px-4 text-left">Player</th>
                <th className="py-3 px-4 text-left">Team</th>
                <th className="py-3 px-4 text-center cursor-pointer hover:text-white">
                  Goals
                </th>
                <th className="py-3 px-4 text-center cursor-pointer hover:text-white">
                  Assists
                </th>
                <th className="py-3 px-4 text-center">YC</th>
                <th className="py-3 px-4 text-center">RC</th>
                {selectedStatType === "goalkeepers" && (
                  <th className="py-3 px-4 text-center">Clean Sheets</th>
                )}
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player) => (
                <tr
                  key={player.name}
                  className="text-white border-b border-gray-700 last:border-0 hover:bg-[#3a3a3a] transition-colors duration-200">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-semibold">{player.name}</div>
                      <div className="text-sm text-gray-400">
                        {player.position}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{player.team}</td>
                  <td className="py-4 px-4 text-center">{player.goals}</td>
                  <td className="py-4 px-4 text-center">{player.assists}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">
                      {player.yellowCards}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="bg-red-500/20 text-red-500 px-2 py-1 rounded">
                      {player.redCards}
                    </span>
                  </td>
                  {selectedStatType === "goalkeepers" && (
                    <td className="py-4 px-4 text-center">
                      {player.cleanSheets}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StatsPage;
