import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";
import "../styles/StatsPage.css";

import { players20242025 } from "../data/stats/players_2024_2025";
import { players20252026 } from "../data/stats/players_2025_2026";


const StatsPage = () => {
  const [selectedStatType, setSelectedStatType] = useState("all");
  const [selectedTeam, setSelectedTeam] = useState("all");
  const years = ["2024-2025", "2025-2026"];
  const [selectedYear, setSelectedYear] = useState("2025-2026");
  const playersByYear = {
    "2024-2025": players20242025,
    "2025-2026": players20252026,
  };

  const players = playersByYear[selectedYear] || [];


  const statTypes = [
    { id: "goals", label: "Top Scorers" },
    { id: "assists", label: "Top Assisters" },
    // { id: "goalkeepers", label: "Goalkeepers" },
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

  const getSortedPlayers = () => {
    let sortedPlayers = [...filteredPlayers];

    if (selectedStatType === "goals") {
      return sortedPlayers.sort((a, b) => b.goals - a.goals);
    } else if (selectedStatType === "assists") {
      return sortedPlayers.sort((a, b) => b.assists - a.assists);
    } else if (selectedStatType === "goalkeepers") {
      return sortedPlayers.sort((a, b) => b.cleanSheets - a.cleanSheets);
    }

    return sortedPlayers;
  };

  return (
    <div className="stats-container">
      <Navbar />
      <main className="stats-main">
        {/* Filter Row */}
        <div className="filters-row">
        <label className="filter-label">Season:</label>
        <select
          value={selectedYear}
          onChange={(e) => {
            setSelectedYear(e.target.value);
            setSelectedTeam("all"); // optional but nice: avoids "missing team" when switching seasons
          }}
          className="filter-select">
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

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
                {selectedStatType !== "goalkeepers" && (
                  <>
                    <th>Goals</th>
                    <th>Assists</th>
                  </>
                )}
                {selectedStatType === "goalkeepers" && <th>GA</th>}
                <th>YC</th>
                <th>RC</th>
                {selectedStatType === "goalkeepers" && <th>Clean Sheets</th>}
              </tr>
            </thead>
            <tbody>
              {getSortedPlayers().map((player) => (
                <tr key={player.name}>
                  <td>{player.name}</td>
                  <td>{player.team}</td>
                  {selectedStatType !== "goalkeepers" && (
                    <>
                      <td>{player.goals}</td>
                      <td>{player.assists}</td>
                    </>
                  )}
                  {selectedStatType === "goalkeepers" && (
                    <td>{player.GA || 0}</td>
                  )}
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
