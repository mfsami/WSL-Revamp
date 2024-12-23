import React from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";
import SohaibLogo from "../assets/images/logos/SOHAIB.jpg";
import ZakLogo from "../assets/images/logos/ZAKLOGO.png";
import AdnanLogo from "../assets/images/logos/ADNAN.jpg";
import ColeLogo from "../assets/images/logos/cole.jpg";
import PedriLogo from "../assets/images/logos/pedri.jpg";
import BombsLogo from "../assets/images/logos/bombs.jpg";

const RankingsPage = () => {
  const teamRankings = [
    {
      rank: 1,
      name: "DEMBELE FC",
      logo: SohaibLogo,
      gamesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: ["W", "W", "W", "W", "W"],
    },
    {
      rank: 2,
      name: "DABEAST FC",
      logo: ZakLogo,
      gamesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: ["W", "D", "W", "W", "D"],
    },
    {
      rank: 3,
      name: "VALVERDE FC",
      logo: AdnanLogo,
      gamesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: ["L", "W", "W", "D", "W"],
    },
    {
      rank: 4,
      name: "BOMBS FC",
      logo: BombsLogo,
      gamesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: ["D", "L", "W", "D", "W"],
    },
    {
      rank: 5,
      name: "COLE WORLD FC",
      logo: ColeLogo,
      gamesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: ["L", "L", "D", "L", "W"],
    },
    {
      rank: 6,
      name: "PEDRI FC",
      logo: PedriLogo,
      gamesPlayed: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      form: ["L", "L", "D", "L", "W"],
    },
  ];

  const getFormBadgeColor = (result) => {
    switch (result) {
      case "W":
        return "bg-green-500/20 text-green-500";
      case "D":
        return "bg-yellow-500/20 text-yellow-500";
      case "L":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-gray-500/20 text-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-[#161616]">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mb-16 mt-16 max-w-screen-lg">
        <div className="bg-[#1a1a1a] rounded-lg p-6 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-3 px-4 text-left">Rank</th>
                <th className="py-3 px-4 text-left">Team</th>
                <th className="py-3 px-4 text-center">GP</th>
                <th className="py-3 px-4 text-center">W</th>
                <th className="py-3 px-4 text-center">D</th>
                <th className="py-3 px-4 text-center">L</th>
                <th className="py-3 px-4 text-center">GF</th>
                <th className="py-3 px-4 text-center">GA</th>
                <th className="py-3 px-4 text-center">GD</th>
                <th className="py-3 px-4 text-center">PTS</th>
                <th className="py-3 px-4 text-center">Form</th>
              </tr>
            </thead>
            <tbody>
              {teamRankings.map((team) => (
                <tr
                  key={team.name}
                  className="text-white border-b border-gray-700 last:border-0 transition-colors duration-200">
                  <td className="py-4 px-4 font-semibold">{team.rank}.</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#1a1a1a] rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={team.logo}
                          alt={`${team.name} Logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-semibold">{team.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">{team.gamesPlayed}</td>
                  <td className="py-4 px-4 text-center">{team.wins}</td>
                  <td className="py-4 px-4 text-center">{team.draws}</td>
                  <td className="py-4 px-4 text-center">{team.losses}</td>
                  <td className="py-4 px-4 text-center">{team.goalsFor}</td>
                  <td className="py-4 px-4 text-center">{team.goalsAgainst}</td>
                  <td
                    className={`py-4 px-4 text-center ${
                      team.goalDifference > 0
                        ? "text-green-500"
                        : team.goalDifference < 0
                        ? "text-red-500"
                        : ""
                    }`}>
                    {team.goalDifference > 0 ? "+" : ""}
                    {team.goalDifference}
                  </td>
                  <td className="py-4 px-4 text-center font-bold">
                    {team.points}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center gap-1">
                      {team.form.map((result, index) => (
                        <span
                          key={index}
                          className={`w-6 h-6 flex items-center justify-center rounded-sm ${getFormBadgeColor(
                            result
                          )}`}>
                          {result}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-400">
          <div>GP = Games Played</div>
          <div>W = Wins</div>
          <div>D = Draws</div>
          <div>L = Losses</div>
          <div>GF = Goals For</div>
          <div>GA = Goals Against</div>
          <div>GD = Goal Difference</div>
          <div>PTS = Points</div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RankingsPage;
