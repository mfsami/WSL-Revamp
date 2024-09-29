import "./App.css";
import FrontBg from "./pages/Home/FrontBg";
import Navbar from "./pages/Home/Navbar";
import Upcoming from "./pages/Home/Upcoming";
import Score from "./pages/Home/Score";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontBg />
      <Score />
      <Upcoming />
    </div>
  );
}

export default App;
