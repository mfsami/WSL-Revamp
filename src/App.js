import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import SchedulePage from "./pages/SchedulePage";
import TeamPage from "./pages/TeamPage";
import StatsPage from "./pages/StatsPage";
import RankingsPage from "./pages/RankingsPage";
import HighlightsPage from "./pages/HighlightsPage";
import AwardsPage from "./pages/AwardsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
        <Route path="/highlights" element={<HighlightsPage />} />
        <Route path="/awards" element={<AwardsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
