import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

const StatsPage = () => {
  const [selectedStatType, setSelectedStatType] = useState("all");
  const [sortConfig, setSortConfig] = useState({
    key: "goals",
    direction: "desc",
  });

  const players = [
    {
      name: "Player",
      team: "DEMBELE FC",
      position: "FWD",
      matches: 12,
      goals: 15,
      assists: 7,
      yellowCards: 2,
      redCards: 0,
      cleanSheets: 0,
      minutesPlayed: 1080,
    },
    {
      name: "Player",
      team: "VALVERDE FC",
      position: "MID",
      matches: 11,
      goals: 8,
      assists: 12,
      yellowCards: 3,
      redCards: 1,
      cleanSheets: 0,
      minutesPlayed: 990,
    },
    {
      name: "Player",
      team: "HAALAND UNITED",
      position: "GK",
      matches: 12,
      goals: 0,
      assists: 0,
      yellowCards: 1,
      redCards: 0,
      cleanSheets: 6,
      minutesPlayed: 1080,
    },
    // Add more players as needed
  ];

  const statTypes = [
    { id: "all", label: "All Stats" },
    { id: "goals", label: "Top Scorers" },
    { id: "assists", label: "Top Assists" },
    { id: "cards", label: "Cards" },
    { id: "goalkeepers", label: "Goalkeepers" },
  ];

  const sortData = (data, key, direction) => {
    return [...data].sort((a, b) => {
      if (direction === "asc") {
        return a[key] - b[key];
      }
      return b[key] - a[key];
    });
  };

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "desc"
          ? "asc"
          : "desc",
    });
  };

  const filteredPlayers = (() => {
    let filtered = [...players];
    switch (selectedStatType) {
      case "goalkeepers":
        return filtered.filter((player) => player.position === "GK");
      case "cards":
        return sortData(filtered, "redCards", "desc");
      case "goals":
        return sortData(filtered, "goals", "desc");
      case "assists":
        return sortData(filtered, "assists", "desc");
      default:
        return sortData(filtered, sortConfig.key, sortConfig.direction);
    }
  })();

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mb-16">
        <h1 className="text-white text-3xl font-bold mb-8">
          Player Statistics
        </h1>

        {/* Stat Type Selection */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {statTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedStatType(type.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedStatType === type.id
                  ? "bg-red-600 text-white"
                  : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"
              }`}>
              {type.label}
            </button>
          ))}
        </div>

        {/* Stats Table */}
        <div className="bg-[#2a2a2a] rounded-lg p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-3 px-4 text-left">Player</th>
                <th className="py-3 px-4 text-left">Team</th>
                <th className="py-3 px-4 text-center">MP</th>
                <th
                  className="py-3 px-4 text-center cursor-pointer hover:text-white"
                  onClick={() => handleSort("goals")}>
                  Goals
                </th>
                <th
                  className="py-3 px-4 text-center cursor-pointer hover:text-white"
                  onClick={() => handleSort("assists")}>
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
              {filteredPlayers.map((player, index) => (
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
                  <td className="py-4 px-4 text-center">{player.matches}</td>
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
