import "./App.css";
import FrontBg from "./pages/Home/FrontBg";
import Navbar from "./pages/Home/Navbar";
import Upcoming from "./pages/Home/Upcoming";
import Score from "./pages/Home/Score";
import EiaBg from "./pages/Home/EiaBg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontBg />
      {/* Fix this phasing problem in Upcoming */}
      <Upcoming />
      <Score />

      <EiaBg />
    </div>
  );
}

export default App;
