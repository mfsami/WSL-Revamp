import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import SchedulePage from "./pages/SchedulePage";
import TeamPage from "./pages/TeamPage";
import StatsPage from "./pages/StatsPage";
import RankingsPage from "./pages/RankingsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/teams" element={<TeamPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/rankings" element={<RankingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
