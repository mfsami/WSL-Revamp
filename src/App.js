import "./App.css";
import FrontBg from "./components/FrontBg";
import Navbar from "./components/Navbar";
import ScoreFront from "./components/ScoreFront";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontBg />
      <ScoreFront />
    </div>
  );
}

export default App;
