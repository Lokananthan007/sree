import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Menubar from "./navbar/Menubar";
import Home from "./components/Home";
import About from "./components/About";
import Loader from "./components/Loader";
import { useState, useEffect } from "react";
import SoftwareService from "./components/SoftwareService";
import Footercontent from './footer/Footercontent';
import ScrollToTop from './utils/ScrollToTop'; // ✅ import scroll behavior

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <ScrollToTop /> 
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service/software development" element={<SoftwareService />} />
          </Routes>
          <Footercontent />
        </Router>
      )}
    </>
  );
}

export default App;
