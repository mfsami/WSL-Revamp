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
    { number: 2, days: ["Dec 29", "Dec 30"] },
    { number: "Playoffs", days: ["Jan 2"] },
  ];

  const placeholderMatches = [
    //DECEMBER 23
    {
      id: "2024-2025-1-Dec 23-1",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "VALVERDE FC",
      awayTeam: "BOMBS FC",
      homeScore: "7",
      awayScore: "3",
      date: "Dec 23",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 23-2",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "DEMBELE FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "1",
      date: "Dec 23",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 23-3",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "DABEAST FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "3",
      date: "Dec 23",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 23-4",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "BOMBS FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "0",
      awayScore: "8",
      date: "Dec 23",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 23-5",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "DABEAST FC",
      awayTeam: "DEMBELE FC",
      homeScore: "1",
      awayScore: "2",
      date: "Dec 23",
      time: "8:25 PM",
    },
    {
      id: "2024-2025-1-Dec 23-6",
      year: "2024-2025",
      week: 1,
      day: "Dec 23",
      homeTeam: "COLE WORLD FC",
      awayTeam: "VALVERDE FC",
      homeScore: "4",
      awayScore: "2",
      date: "Dec 23",
      time: "8:25 PM",
    },
    //DECEMBER 26
    {
      id: "2024-2025-1-Dec 26-1",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "VALVERDE FC",
      awayTeam: "PEDRI FC",
      homeScore: "0",
      awayScore: "3",
      date: "Dec 26",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 26-2",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "DEMBELE FC",
      awayTeam: "BOMBS FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 26",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 26-3",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "DABEAST FC",
      awayTeam: "BOMBS FC",
      homeScore: "2",
      awayScore: "0",
      date: "Dec 26",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 26-4",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "DEMBELE FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "3",
      awayScore: "1",
      date: "Dec 26",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 26-5",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "PEDRI FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 26",
      time: "8:25 PM",
    },
    {
      id: "2024-2025-1-Dec 26-6",
      year: "2024-2025",
      week: 1,
      day: "Dec 26",
      homeTeam: "VALVERDE FC",
      awayTeam: "DABEAST FC",
      homeScore: "6",
      awayScore: "2",
      date: "Dec 26",
      time: "8:25 PM",
    },
    //DECEMBER 28
    {
      id: "2024-2025-1-Dec 28-1",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "BOMBS FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "5",
      date: "Dec 28",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 28-2",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DABEAST FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "1",
      awayScore: "2",
      date: "Dec 28",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-1-Dec 28-3",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DEMBELE FC",
      awayTeam: "PEDRI FC",
      homeScore: "1",
      awayScore: "0",
      date: "Dec 28",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 28-4",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "COLE WORLD FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "0",
      date: "Dec 28",
      time: "7:50 PM",
    },
    {
      id: "2024-2025-1-Dec 28-5",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DEMBELE FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "1",
      date: "Dec 28",
      time: "8:25 PM",
    },
    {
      id: "2024-2025-1-Dec 28-6",
      year: "2024-2025",
      week: 1,
      day: "Dec 28",
      homeTeam: "DABEAST FC",
      awayTeam: "BOMBS FC",
      homeScore: "3",
      awayScore: "1",
      date: "Dec 28",
      time: "8:25 PM",

      //DECEMBER 29
    },
    {
      id: "2024-2025-2-Dec 29-1",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "DABEAST FC",
      awayTeam: "DEMBELE FC",
      homeScore: "3",
      awayScore: "2",
      date: "Dec 29",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 29-2",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "BOMBS FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "1",
      awayScore: "4",
      date: "Dec 29",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 29-3",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "DEMBELE FC",
      awayTeam: "BOMBS FC",
      homeScore: "3",
      awayScore: "2",
      date: "Dec 29",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 29-4",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "PEDRI FC",
      awayTeam: "VALVERDE FC",
      homeScore: "1",
      awayScore: "3",
      date: "Dec 29",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 29-5",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "DABEAST FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 29",
      time: "8:20 PM",
    },
    {
      id: "2024-2025-2-Dec 29-6",
      year: "2024-2025",
      week: 2,
      day: "Dec 29",
      homeTeam: "COLE WORLD FC",
      awayTeam: "PEDRI FC",
      homeScore: "0",
      awayScore: "1",
      date: "Dec 29",
      time: "8:20 PM",
    },

    //DECEMBER 30

    {
      id: "2024-2025-2-Dec 30-1",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "VALVERDE FC",
      awayTeam: "DEMBELE FC",
      homeScore: "3",
      awayScore: "0",
      date: "Dec 30",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 30-2",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "BOMBS FC",
      awayTeam: "PEDRI FC",
      homeScore: "2",
      awayScore: "2",
      date: "Dec 30",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Dec 30-3",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "DABEAST FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "0",
      awayScore: "2",
      date: "Dec 30",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 30-4",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "BOMBS FC",
      awayTeam: "VALVERDE FC",
      homeScore: "2",
      awayScore: "7",
      date: "Dec 30",
      time: "7:45 PM",
    },
    {
      id: "2024-2025-2-Dec 30-5",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "DABEAST FC",
      awayTeam: "PEDRI FC",
      homeScore: "3",
      awayScore: "2",
      date: "Dec 30",
      time: "8:20 PM",
    },
    {
      id: "2024-2025-2-Dec 30-6",
      year: "2024-2025",
      week: 2,
      day: "Dec 30",
      homeTeam: "DEMBELE FC",
      awayTeam: "COLE WORLD FC",
      homeScore: "4",
      awayScore: "2",
      date: "Dec 30",
      time: "8:20 PM",
    },

    //PLAYOFFS

    {
      id: "2024-2025-2-Jan 2-1",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "VALVERDE FC",
      awayTeam: "BOMBS FC",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Jan 2-2",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "PEDRI FC",
      awayTeam: "DABEAST FC",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "7:15 PM",
    },
    {
      id: "2024-2025-2-Jan 2-3",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "DEMBELE FC",
      awayTeam: "WINNER OF PLAY IN (HIGHER SEED)",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "8:00 PM",
    },
    {
      id: "2024-2025-2-Jan 2-4",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "COLE WORLD FC",
      awayTeam: "WINNER OF PLAY IN (LOWER SEED)",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "8:00 PM",
    },
    {
      id: "2024-2025-2-Jan 2-5",
      year: "2024-2025",
      week: 2,
      day: "Jan 2",
      homeTeam: "-",
      awayTeam: "-",
      homeScore: "-",
      awayScore: "-",
      date: "Jan 2",
      time: "8:55 PM",
    },
  ];

  const filteredMatches = placeholderMatches.filter(
    (match) =>
      match.year === selectedYear &&
      ((typeof selectedWeek === "number" && match.week === selectedWeek) ||
        (selectedWeek === "Playoffs" && match.day === "Jan 2")) &&
      match.day === selectedDay
  );

  const renderPlayoffMatches = (matches) => {
    return matches.map((match, index) => (
      <React.Fragment key={match.id}>
        {index === 2 && <h2 className="semifinals-header">SEMI FINALS</h2>}
        {index === 4 && <h2 className="finals-header">FINALS</h2>}
        <div className="match-card">
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
      </React.Fragment>
    ));
  };

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
            onChange={(e) => {
              const weekValue =
                e.target.value === "Playoffs"
                  ? "Playoffs"
                  : Number(e.target.value);
              setSelectedWeek(weekValue);
              if (weekValue === 2) {
                setSelectedDay("Dec 29");
              } else if (weekValue === 1) {
                setSelectedDay("Dec 23");
              } else if (weekValue === "Playoffs") {
                setSelectedDay("Jan 2");
              }
            }}
            className="filter-select">
            {weeks.map((week) => (
              <option key={week.number} value={week.number}>
                {typeof week.number === "number"
                  ? `Week ${week.number}`
                  : week.number}
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
            selectedWeek === "Playoffs" ? (
              renderPlayoffMatches(filteredMatches)
            ) : (
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
            )
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
