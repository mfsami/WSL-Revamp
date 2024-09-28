import "./App.css";
import FrontBg from "./components/FrontBg";
import Navbar from "./components/Navbar";
import Upcoming from "./components/Upcoming";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontBg />
      <Upcoming />
      <Score />
    </div>
  );
}

export default App;
