import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menubar from "./navbar/Menubar";
import Home from "./components/Home";
import "./animation/Animation.css";

function App() {
  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
