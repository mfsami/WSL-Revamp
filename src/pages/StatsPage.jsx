import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";
import "../styles/StatsPage.css";

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

  const filteredPlayers = players.filter((player) => {
    if (selectedTeam !== "all" && player.team !== selectedTeam) {
      return false;
    }
    if (selectedStatType === "goalkeepers") {
      return player.position === "GK";
    }
    return true;
  });

  return (
    <div className="stats-container">
      <Navbar />
      <main className="stats-main">
        {/* Filter Row */}
        <div className="filters-row">
          <label className="filter-label">Filter by Team:</label>
          <select
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            className="filter-select">
            <option value="all">All Players</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>

        {/* Stat Buttons */}
        <div className="stat-buttons">
          <button
            onClick={() => {
              setSelectedStatType("players");
              setSelectedTeam("all");
            }}
            className={`stat-button ${
              selectedStatType === "players" ? "active" : ""
            }`}>
            All Players
          </button>
          {statTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedStatType(type.id)}
              className={`stat-button ${
                selectedStatType === type.id ? "active" : ""
              }`}>
              {type.label}
            </button>
          ))}
        </div>

        {/* Stats Table */}
        <div className="stats-table-container">
          <table className="stats-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Team</th>
                <th>Goals</th>
                <th>Assists</th>
                <th>YC</th>
                <th>RC</th>
                {selectedStatType === "goalkeepers" && <th>Clean Sheets</th>}
              </tr>
            </thead>
            <tbody>
              {filteredPlayers.map((player) => (
                <tr key={player.name}>
                  <td>{player.name}</td>
                  <td>{player.team}</td>
                  <td>{player.goals}</td>
                  <td>{player.assists}</td>
                  <td>
                    <span className="stat-badge yellow">
                      {player.yellowCards}
                    </span>
                  </td>
                  <td>
                    <span className="stat-badge red">{player.redCards}</span>
                  </td>
                  {selectedStatType === "goalkeepers" && (
                    <td>{player.cleanSheets}</td>
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
