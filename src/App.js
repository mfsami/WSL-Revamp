import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FrontPage from "./pages/FrontPage";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
