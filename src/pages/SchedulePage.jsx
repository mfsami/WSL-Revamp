import React, { useState } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

const SchedulePage = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);

  const weeks = [
    { number: "01", day: "Mon" },
    { number: "02", day: "Thurs" },
    { number: "03", day: "Sat" },
  ];

  const placeholderMatches = [
    {
      id: 1,
      week: 1,
      homeTeam: "HOME TEAM 1",
      awayTeam: "AWAY TEAM 1",
      homeScore: "-",
      awayScore: "-",
      date: "MM/DD",
      time: "00:00 PM",
    },
    {
      id: 2,
      week: 1,
      homeTeam: "HOME TEAM 2",
      awayTeam: "AWAY TEAM 2",
      homeScore: "-",
      awayScore: "-",
      date: "MM/DD",
      time: "00:00 PM",
    },
    {
      id: 3,
      week: 2,
      homeTeam: "HOME TEAM 3",
      awayTeam: "AWAY TEAM 3",
      homeScore: "-",
      awayScore: "-",
      date: "MM/DD",
      time: "00:00 PM",
    },
    {
      id: 4,
      week: 3,
      homeTeam: "HOME TEAM 4",
      awayTeam: "AWAY TEAM 4",
      homeScore: "-",
      awayScore: "-",
      date: "MM/DD",
      time: "00:00 PM",
    },
    {
      id: 4,
      week: 1,
      homeTeam: "HOME TEAM 4",
      awayTeam: "AWAY TEAM 4",
      homeScore: "-",
      awayScore: "-",
      date: "MM/DD",
      time: "00:00 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      <main className="container mx-auto px-4 py-12 mb-16">
        {/* Week Selector */}
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-gray-400 font-semibold mb-4">
            Week {selectedWeek}
          </h2>
          <div className="flex gap-6 mb-2">
            {weeks.map((week) => (
              <button
                key={week.number}
                onClick={() => setSelectedWeek(parseInt(week.number))}
                className={`w-10 h-10 rounded-md font-semibold transition-all duration-300 ${
                  selectedWeek === parseInt(week.number)
                    ? "bg-red-600 text-white"
                    : "bg-[#2a2a2a] text-gray-400 hover:bg-[#3a3a3a]"
                }`}>
                {week.number}
              </button>
            ))}
          </div>
          <div className="flex gap-6">
            {weeks.map((week) => (
              <div
                key={week.day}
                className={`w-12 text-center font-semibold ${
                  selectedWeek === parseInt(week.number)
                    ? "text-white"
                    : "text-gray-400"
                }`}>
                {week.day}
              </div>
            ))}
          </div>
        </div>

        {/* Matches */}
        <div className="space-y-4">
          {placeholderMatches
            .filter((match) => match.week === selectedWeek)
            .map((match) => (
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
            ))}

          {placeholderMatches.filter((match) => match.week === selectedWeek)
            .length === 0 && (
            <div className="text-center text-gray-400 py-12">
              No matches scheduled for this week
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SchedulePage;
