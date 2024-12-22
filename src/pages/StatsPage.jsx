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
    {
      name: "Player 1",
      team: "TEAM A",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Player 2",
      team: "TEAM A",
      position: "MID",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Player 3",
      team: "TEAM B",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Player 4",
      team: "TEAM B",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    // Add more players as needed
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
      default:
        return filtered;
    }
  })();

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mb-16">
        <h1 className="text-white text-3xl font-bold mb-8">
          Player Statistics
        </h1>

        {/* Navigation Row */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          {/* All Teams Dropdown */}
          <div className="relative">
            <select
              value={selectedTeam}
              onChange={(e) => {
                setSelectedTeam(e.target.value);
                setSelectedStatType("all"); // Reset stat type filter when switching teams
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap appearance-none ${
                selectedTeam !== "all"
                  ? "bg-[#2a2a2a] text-white"
                  : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"
              }`}>
              <option value="all">All Teams</option>

              {teams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>

          {statTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => {
                setSelectedStatType(type.id);
                setSelectedTeam("all"); // Reset team filter when switching stat type
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                selectedStatType === type.id && selectedTeam === "all"
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
