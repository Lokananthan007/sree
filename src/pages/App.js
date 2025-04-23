import "./App.css";
import { useNavigate } from "react-router-dom";

function App () {
  const navigate = useNavigate();
  return (
    <div id="App">
      <h3 data-animate="fade-in" data-delay="0.2s">Top-Tier App Development Company</h3>
      <p data-animate="fade-in" data-delay="0.2s">
        At <strong>SREE INFINITY TECH</strong>, we specialize in crafting innovative, scalable and high-performing software solutions tailored to your business goals.
      </p>
      <p data-animate="fade-in" data-delay="0.2s">
        From intuitive mobile and web applications to powerful desktop software and enterprise-grade ERP & CRM systems, our expert team transforms your ideas into impactful digital products.
      </p>
      <p data-animate="fade-in" data-delay="0.2s">
        We also offer end-to-end branding solutions and custom development services that enhance efficiency automate workflows and elevate your digital presence.
        Partner with us to bring your vision to life and stay ahead in a tech-driven world.
      </p>
      <button onClick={() => navigate("/contact us")} className="btn" data-animate="fade-in" data-delay="0.2s">LET'S TALK</button>
    </div>
  );
}

export default App;
