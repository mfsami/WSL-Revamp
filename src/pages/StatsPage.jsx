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
      team: "PEDRI FC",
      position: "GK",
      goals: 0,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Aref El-Tawil",
      team: "DABEAST FC",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Muneer Nazir",
      team: "DEMBELE FC",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },

    {
      name: "Khaled Al-Kadri",
      team: "VALVERDE FC",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Adam Zahwee",
      team: "BOMBS FC",
      position: "GK",
      goals: 0,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Adam Deeb",
      team: "BOMBS FC",
      position: "GK",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Shaheryar Ahsan",
      team: "COLE WORLD FC",
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
      team: "DABEAST FC",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Bilal Rahal",
      team: "PEDRI FC",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Rasheed Jomha",
      team: "PEDRI FC",
      position: "DEF",
      goals: 0,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohamed Al-Turk",
      team: "BOMBS FC",
      position: "DEF",
      goals: 1,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohammed Elkhatib",
      team: "DABEAST FC",
      position: "DEF",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },

    {
      name: "Mohammed Sadek",
      team: "PEDRI FC",
      position: "DEF",
      goals: 2,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },

    // Attackers
    {
      name: "Sohaib Jomha",
      team: "DEMBELE FC",
      position: "FWD",
      goals: 2,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Hussien Al-Turk",
      team: "COLE WORLD FC",
      position: "FWD",
      goals: 2,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Adnan El-Tayan",
      team: "COLE WORLD FC",
      position: "FWD",
      goals: 2,
      assists: 2,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Adnan Shaban",
      team: "DEMBELE FC",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Rayyan Islam",
      team: "COLE WORLD FC",
      position: "FWD",
      goals: 2,
      assists: 3,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohamed Elmestiri",
      team: "PEDRI FC",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohamed Anshasi",
      team: "COLE WORLD FC",
      position: "FWD",
      goals: 2,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Khalid Shaheen",
      team: "VALVERDE FC",
      position: "FWD",
      goals: 5,
      assists: 3,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Redouane Zerqalah",
      team: "PEDRI FC",
      position: "FWD",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Anes Mohammed",
      team: "BOMBS FC",
      position: "FWD",
      goals: 2,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Abdirahman Sheikhdon",
      team: "DEMBELE FC",
      position: "FWD",
      goals: 0,
      assists: 2,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Abdelrahman Ebeid",
      team: "VALVERDE FC",
      position: "FWD",
      goals: 1,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mohammed Sheikh Ali",
      team: "VALVERDE FC",
      position: "FWD",
      goals: 3,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Jamal Assaf",
      team: "BOMBS FC",
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
      team: "VALVERDE FC",
      position: "BOTH",
      goals: 0,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Zayd Elzein",
      team: "DABEAST FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Omar Jomha",
      team: "DEMBELE FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Yazan Al Maani",
      team: "VALVERDE FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Motassim Assaf",
      team: "BOMBS FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Zakariya Assaf",
      team: "DABEAST FC",
      position: "BOTH",
      goals: 0,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Omar Assaf",
      team: "DABEAST FC",
      position: "BOTH",
      goals: 1,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Ahmed Assaf",
      team: "VALVERDE FC",
      position: "BOTH",
      goals: 2,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Yaqin Issa",
      team: "COLE WORLD FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Sami El-Sayed",
      team: "DABEAST FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Rehan Khadri",
      team: "COLE WORLD FC",
      position: "BOTH",
      goals: 0,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Taha El-Sayed",
      team: "VALVERDE FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Rahal Rahal",
      team: "DEMBELE FC",
      position: "BOTH",
      goals: 1,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Huthayfah Jomha",
      team: "PEDRI FC",
      position: "BOTH",
      goals: 1,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Yousif Al Mishhedani",
      team: "DEMBELE FC",
      position: "BOTH",
      goals: 0,
      assists: 1,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Amir Bensekhria",
      team: "BOMBS FC",
      position: "BOTH",
      goals: 1,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Mostafa Heider",
      team: "BOMBS FC",
      position: "BOTH",
      goals: 0,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Sohaib Khadri",
      team: "COLE WORLD FC",
      position: "BOTH",
      goals: 3,
      assists: 0,
      yellowCards: 0,
      redCards: 0,
      cleanSheets: 0,
    },
    {
      name: "Abdullah Aderinto",
      team: "PEDRI FC",
      position: "BOTH",
      goals: 1,
      assists: 2,
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
              {getSortedPlayers().map((player) => (
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
