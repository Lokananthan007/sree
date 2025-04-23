import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './utils/ScrollToTop'; 
import { useState, useEffect } from "react";
import "./App.css";
import Menubar from "./navbar/Menubar";
import Home from "./components/Home";
import About from "./components/About";
import Loader from "./animation/Loader";
import SoftwareService from "./components/SoftwareService";
import Footercontent from './footer/Footercontent';
import WebServices from "./components/WebServices";
import AppService from "./components/AppService";
import Digital from "./components/Digital";
import WorkDelivered from "./components/WorkDelivered";
import ContactUs from "./components/ContactUs";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
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
            <Route path="/service/web development" element={<WebServices />} />
            <Route path="/service/app development" element={<AppService />} />
            <Route path="/service/digital marketing" element={<Digital />} />
            <Route path="/work delivered" element={<WorkDelivered />} />
            <Route path="/contact us" element={<ContactUs />} />
          </Routes>
          <Footercontent />
        </Router>
      )}
    </>
  );
}

export default App;
