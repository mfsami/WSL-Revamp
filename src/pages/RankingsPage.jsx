import React, { useMemo } from "react";
import Navbar from "../components/HomeComps/Navbar";
import Footer from "../components/HomeComps/Footer";

import SohaibLogo from "../assets/images/logos/SOHAIB.jpg"; // Dembele
import ZakLogo from "../assets/images/logos/ZAKLOGO.png"; // Dabeast
import AdnanLogo from "../assets/images/logos/ADNAN.jpg"; // Valverde
import ColeLogo from "../assets/images/logos/cole.jpg"; // Cole World
import PedriLogo from "../assets/images/logos/pedri.jpg"; // Pedri
import BombsLogo from "../assets/images/logos/bombs.jpg"; // Mansaf

const RankingsPage = () => {
  const groupAOrder = ["VALVERDE FC", "MANSAF FC", "PEDRI FC"];
  const groupBOrder = ["DEMBELE FC", "COLE WORLD FC", "DABEAST FC"];

  const emptyTeam = (name, logo = null) => ({
    name,
    logo,
    gamesPlayed: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
  });

  const team = (name, logo, gp, w, d, l, gf, ga) => ({
    name,
    logo,
    gamesPlayed: gp,
    wins: w,
    draws: d,
    losses: l,
    goalsFor: gf,
    goalsAgainst: ga,
    goalDifference: gf - ga,
    points: w * 3 + d,
  });

  const standings = [
    team("VALVERDE FC", AdnanLogo, 7, 0, 1, 6, 8, 26),
    team("MANSAF FC", BombsLogo, 7, 3, 2, 2, 11, 5),
    team("PEDRI FC", PedriLogo, 7, 2, 3, 2, 10, 9),
    team("DEMBELE FC", SohaibLogo, 7, 5, 1, 1, 18, 7),
    team("COLE WORLD FC", ColeLogo, 7, 1, 1, 5, 6, 15),
    team("DABEAST FC", ZakLogo, 7, 5, 2, 0, 15, 4),
  ];

  const sortTeams = (teams) => {
    return [...teams].sort(
      (a, b) =>
        b.points - a.points ||
        b.goalDifference - a.goalDifference ||
        b.goalsFor - a.goalsFor ||
        a.name.localeCompare(b.name)
    );
  };

  const { groupA, groupB } = useMemo(() => {
    const byName = new Map(standings.map((t) => [t.name, t]));

    const aTeams = groupAOrder.map(
      (name) => byName.get(name) ?? emptyTeam(name)
    );
    const bTeams = groupBOrder.map(
      (name) => byName.get(name) ?? emptyTeam(name)
    );

    return {
      groupA: sortTeams(aTeams),
      groupB: sortTeams(bTeams),
    };
  }, []);

  const TeamLogo = ({ team }) => {
    const initials = team.name
      .split(" ")
      .slice(0, 2)
      .map((w) => w[0])
      .join("");

    return (
      <div className="w-8 h-8 bg-[#161616] rounded-full flex items-center justify-center overflow-hidden">
        {team.logo ? (
          <img
            src={team.logo}
            alt={`${team.name} Logo`}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-[10px] text-gray-300 font-semibold">
            {initials}
          </span>
        )}
      </div>
    );
  };

  const StandingsTable = ({ title, teams }) => (
    <div className="bg-[#1a1a1a] rounded-lg p-4 md:p-6 min-w-full overflow-x-auto">
      <h2 className="text-white font-semibold text-lg mb-4">{title}</h2>

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
          {teams.map((team, idx) => (
            <tr
              key={`${title}-${team.name}`}
              className="text-white border-b border-gray-700 last:border-0 transition-colors duration-200">
              <td className="py-3 px-2 font-semibold">{idx + 1}</td>

              <td className="py-3 px-2">
                <div className="flex items-center space-x-3">
                  <TeamLogo team={team} />
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

              <td className="py-3 px-2 text-center font-bold">{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#161616]">
      <Navbar />

      <main className="container mx-auto px-4 py-8 mb-16 mt-16 md:max-w-4xl lg:max-w-5xl overflow-x-auto">
        <div className="flex flex-col gap-6">
          <StandingsTable title="GROUP A" teams={groupA} />
          <StandingsTable title="GROUP B" teams={groupB} />
        </div>

        {/* --------------------------  LEAGUE INFO -------------------------- */}
        <section className="mt-8 bg-[#1a1a1a] rounded-lg p-4 md:p-6">
          {/* Format + Playoffs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-sm text-gray-300 items-start">
            <div>
              <h4 className="text-white font-semibold mb-2">Format</h4>
              <ul className="space-y-1">
                <li>6 teams → 2 groups of 3</li>
                <li className="pt-2 font-semibold text-gray-200">
                  Round robin
                </li>
                <li>
                  Play the 2 teams in your group twice each (home & away) = 4
                  games
                </li>
                <li>Play the 3 teams in the other group once = 3 games</li>
                <li className="pt-1">
                  <span className="font-semibold text-gray-200">Total:</span> 7
                  games per team
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-2">Playoffs</h4>
              <ul className="space-y-1">
                <li>1st in each group = bye to semi-finals</li>
                <li className="pt-2 font-semibold text-gray-200">Play-in</li>
                <li>2A vs 3B</li>
                <li>3A vs 2B</li>
                <li className="pt-2">
                  Winners face the group winners in the semis{" "}
                  <span className="text-gray-200 font-semibold">
                    (avoid same-group semis if possible)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Standings Notes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-300 items-start">
            {/* Points */}
            <div>
              <h4 className="text-white font-semibold mb-2">Standings Notes</h4>
              <p className="text-gray-400 mb-2">Points system</p>
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold text-gray-200">W</span> (Win) =
                  3 pts
                </li>
                <li>
                  <span className="font-semibold text-gray-200">D</span> (Draw)
                  = 1 pt
                </li>
                <li>
                  <span className="font-semibold text-gray-200">L</span> (Loss)
                  = 0 pts
                </li>
              </ul>
            </div>

            {/* Abbreviations */}
            <div>
              <h4 className="text-white font-semibold mb-2">Abbreviations</h4>
              <ul className="space-y-1">
                <li>
                  <span className="font-semibold text-gray-200">GP</span> =
                  Games Played
                </li>
                <li>
                  <span className="font-semibold text-gray-200">W / D / L</span>{" "}
                  = Wins / Draws / Losses
                </li>
                <li>
                  <span className="font-semibold text-gray-200">GF</span> =
                  Goals For (scored)
                </li>
                <li>
                  <span className="font-semibold text-gray-200">GA</span> =
                  Goals Against (conceded)
                </li>
                <li>
                  <span className="font-semibold text-gray-200">GD</span> = Goal
                  Difference (GF − GA)
                </li>
                <li>
                  <span className="font-semibold text-gray-200">YC</span> =
                  Yellow Cards
                </li>
                <li>
                  <span className="font-semibold text-gray-200">RC</span> = Red
                  Cards
                </li>
              </ul>
            </div>

            {/* Tie-breakers */}
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-2">
                Tie-breakers (in order)
              </h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>Points</li>
                <li>Head-to-head points (among tied teams)</li>
                <li>Head-to-head goal difference</li>
                <li>Overall goal difference (GD)</li>
                <li>Overall goals for (GF)</li>
                <li>
                  Fair play (fewest total cards —{" "}
                  <span className="text-gray-200 font-semibold">YC = 1</span>,{" "}
                  <span className="text-gray-200 font-semibold">RC = 3</span>)
                </li>
                <li>Playoff (if still tied)</li>
              </ol>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default RankingsPage;
