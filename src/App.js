import "./App.css";
import FrontBg from "./pages/Home/FrontBg";
import Navbar from "./pages/Home/Navbar";
import Upcoming from "./pages/Home/Upcoming";
import Score from "./pages/Home/Score";
import EiaBg from "./pages/Home/EiaBg";
import Footer from "./pages/Home/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FrontBg />

      <Upcoming />
      <Score />
      <EiaBg />
      <Footer />
    </div>
  );
}

export default App;
