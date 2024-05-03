import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Categories from "./pages/Categories";
import Homepage from "./pages/Homepage";
import Game from "./pages/Game";
import HowToPlay from "./pages/HowToPlay";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/game" element={<Game />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
