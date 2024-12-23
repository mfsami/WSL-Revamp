import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";
import "../styles/SchedulePage.css"; // Importing CSS file

const SchedulePage = () => {
  const [selectedYear, setSelectedYear] = useState("2024-2025");
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [selectedDay, setSelectedDay] = useState("Dec 23");

  const years = ["2023-2024", "2024-2025"];
  const weeks = [
    { number: 1, days: ["Dec 23", "Dec 26", "Dec 28"] },
    { number: 2, days: ["Dec 29", "Dec 30", "Jan 2"] },
  ];

  const placeholderMatches = [
    {
      id: "2024-2025-1-Dec 23-1",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "Team A",
      awayTeam: "Team B",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 23",
      time: "01:00 PM",
    },
    {
      id: "2024-2025-1-Dec 23-2",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "Team C",
      awayTeam: "Team D",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 23",
      time: "03:00 PM",
    },
    {
      id: "2024-2025-1-Dec 23-3",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "Team E",
      awayTeam: "Team F",
      homeScore: "-",
      awayScore: "-",
      date: "Dec 23",
      time: "05:00 PM",
    },
  ];

  const filteredMatches = placeholderMatches.filter(
    (match) =>
      match.year === selectedYear &&
      match.week === selectedWeek &&
      match.day === selectedDay
  );

  return (
    <div className="schedule-container">
      <Navbar />
      <main className="schedule-main">
        <div className="filters-row">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="filter-select">
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          <select
            value={selectedWeek}
            onChange={(e) => setSelectedWeek(Number(e.target.value))}
            className="filter-select">
            {weeks.map((week) => (
              <option key={week.number} value={week.number}>
                Week {week.number}
              </option>
            ))}
          </select>
          <select
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
            className="filter-select">
            {weeks
              .find((week) => week.number === selectedWeek)
              ?.days.map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
          </select>
        </div>
        <div className="matches-container">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <div key={match.id} className="match-card">
                <div className="match-team">
                  <p className="team-name">{match.homeTeam}</p>
                  <p className="team-score">{match.homeScore}</p>
                </div>
                <div className="match-vs">VS</div>
                <div className="match-team">
                  <p className="team-name">{match.awayTeam}</p>
                  <p className="team-score">{match.awayScore}</p>
                </div>
                <div className="match-info">
                  <p className="match-date">{match.date}</p>
                  <p className="match-time">{match.time}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-matches">
              Still working on this. Get outta here pal
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SchedulePage;
