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
      name: "COLE WORLD FC",
      logo: ColeLogo,
      gamesPlayed: 6,
      wins: 5,
      draws: 0,
      losses: 1,
      goalsFor: 18,
      goalsAgainst: 6,
      goalDifference: 12,
      points: 15,
      form: [""],
    },
    {
      rank: 2,
      name: "DEMBELE FC",
      logo: SohaibLogo,
      gamesPlayed: 6,
      wins: 4,
      draws: 1,
      losses: 1,
      goalsFor: 9,
      goalsAgainst: 5,
      goalDifference: 4,
      points: 13,
      form: [""],
    },
    {
      rank: 3,
      name: "PEDRI FC",
      logo: PedriLogo,
      gamesPlayed: 6,
      wins: 3,
      draws: 1,
      losses: 2,
      goalsFor: 12,
      goalsAgainst: 5,
      goalDifference: 7,
      points: 10,
      form: [""],
    },

    {
      rank: 4,
      name: "VALVERDE FC",
      logo: AdnanLogo,
      gamesPlayed: 6,
      wins: 2,
      draws: 0,
      losses: 4,
      goalsFor: 16,
      goalsAgainst: 16,
      goalDifference: 0,
      points: 6,
      form: [""],
    },
    {
      rank: 5,
      name: "DABEAST FC",
      logo: ZakLogo,
      gamesPlayed: 6,
      wins: 2,
      draws: 0,
      losses: 4,
      goalsFor: 10,
      goalsAgainst: 14,
      goalDifference: -4,
      points: 6,
      form: [""],
    },
    {
      rank: 6,
      name: "BOMBS FC",
      logo: BombsLogo,
      gamesPlayed: 6,
      wins: 1,
      draws: 0,
      losses: 5,
      goalsFor: 6,
      goalsAgainst: 25,
      goalDifference: -19,
      points: 3,
      form: [""],
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
      <main className="container mx-auto px-4 py-8 mb-16 mt-16 md:max-w-4xl lg:max-w-5xl overflow-x-auto">
        {/* Rankings Table */}
        <div className="bg-[#1a1a1a] rounded-lg p-4 md:p-6 min-w-full overflow-x-auto">
          <table className="w-full text-sm md:text-base table-auto">
            <thead>
              <tr className="text-gray-400 border-b border-gray-700">
                <th className="py-3 px-2 text-left">#</th>
                <th className="py-3 px-2 text-left">Team</th>
                <th className="py-3 px-2 text-center">GP</th>
                <th className="py-3 px-2 text-center">W</th>
                <th className="py-3 px-2 text-center">D</th>
                <th className="py-3 px-2 text-center">L</th>
                <th className="py-3 px-2 text-center">GF</th>
                <th className="py-3 px-2 text-center">GA</th>
                <th className="py-3 px-2 text-center">GD</th>
                <th className="py-3 px-2 text-center">PTS</th>
              </tr>
            </thead>
            <tbody>
              {teamRankings.map((team) => (
                <tr
                  key={team.name}
                  className="text-white border-b border-gray-700 last:border-0 transition-colors duration-200">
                  <td className="py-3 px-2 font-semibold">{team.rank}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-[#1a1a1a] rounded-full flex items-center justify-center overflow-hidden">
                        <img
                          src={team.logo}
                          alt={`${team.name} Logo`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-semibold">{team.name}</span>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-center">{team.gamesPlayed}</td>
                  <td className="py-3 px-2 text-center">{team.wins}</td>
                  <td className="py-3 px-2 text-center">{team.draws}</td>
                  <td className="py-3 px-2 text-center">{team.losses}</td>
                  <td className="py-3 px-2 text-center">{team.goalsFor}</td>
                  <td className="py-3 px-2 text-center">{team.goalsAgainst}</td>
                  <td
                    className={`py-3 px-2 text-center ${
                      team.goalDifference > 0
                        ? "text-green-500"
                        : team.goalDifference < 0
                        ? "text-red-500"
                        : ""
                    }`}>
                    {team.goalDifference > 0 ? "+" : ""}
                    {team.goalDifference}
                  </td>
                  <td className="py-3 px-2 text-center font-bold">
                    {team.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
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
