import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

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
    // Week 1, Day "Dec 23" matches
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
    // Add more matches for "Dec 26", "Dec 28", etc., for Week 1
    // Add matches for Week 2 ("Dec 29", "Dec 30", "Jan 2")
  ];

  const filteredMatches = placeholderMatches.filter(
    (match) =>
      match.year === selectedYear &&
      match.week === selectedWeek &&
      match.day === selectedDay
  );

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <main className="container mx-auto px-4 py-12 mb-16">
        {/* Filters Row */}
        <div className="flex justify-center gap-6 mb-12">
          {/* Year Selector */}
          <div className="flex items-center gap-2">
            <label className="text-gray-400 font-semibold">Year:</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-4 py-2 rounded-lg bg-[#2a2a2a] text-white font-semibold transition-all duration-300 hover:bg-[#3a3a3a]">
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Week Selector */}
          <div className="flex items-center gap-2">
            <label className="text-gray-400 font-semibold">Week:</label>
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(Number(e.target.value))}
              className="px-4 py-2 rounded-lg bg-[#2a2a2a] text-white font-semibold transition-all duration-300 hover:bg-[#3a3a3a]">
              {weeks.map((week) => (
                <option key={week.number} value={week.number}>
                  Week {week.number}
                </option>
              ))}
            </select>
          </div>

          {/* Day Selector */}
          <div className="flex items-center gap-2">
            <label className="text-gray-400 font-semibold">Day:</label>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="px-4 py-2 rounded-lg bg-[#2a2a2a] text-white font-semibold transition-all duration-300 hover:bg-[#3a3a3a]">
              {weeks
                .find((week) => week.number === selectedWeek)
                ?.days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {/* Matches */}
        <div className="space-y-4">
          {filteredMatches.length > 0 ? (
            filteredMatches.map((match) => (
              <div
                key={match.id}
                className="bg-[#212121] rounded-lg p-6 transition-transform duration-300 hover:transform hover:scale-[1.01] max-w-7xl mx-auto">
                <div className="flex justify-between items-center">
                  <div className="flex-1 flex flex-col items-center text-center min-w-[250px]">
                    <div className="text-white font-semibold text-lg whitespace-nowrap">
                      {match.homeTeam}
                    </div>
                    <div className="text-red-500 font-bold text-xl">
                      {match.homeScore}
                    </div>
                  </div>
                  <div className="flex-1 flex items-center justify-center text-gray-400 font-semibold text-lg">
                    VS
                  </div>
                  <div className="flex-1 flex flex-col items-center text-center min-w-[250px]">
                    <div className="text-white font-semibold text-lg whitespace-nowrap">
                      {match.awayTeam}
                    </div>
                    <div className="text-red-500 font-bold text-xl">
                      {match.awayScore}
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="bg-red-600 px-2 py-1 text-white font-semibold rounded">
                      {match.date}
                    </div>
                    <div className="text-white font-semibold">{match.time}</div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-400 py-12">
              Still working on this. Get out of here pal
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SchedulePage;
