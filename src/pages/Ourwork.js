import "./Ourwork.css";
import useGlobalScroll from "../animation/useGlobalScroll";

function Ourwork() {
  useGlobalScroll();
  return (
    <div id="Ourwork">
      <h3 data-animate="fade-in" data-delay="0.2s">Our Work</h3>
      <p data-animate="fade-in" data-delay="0.2s">
        Our mission is to deliver innovative, reliable, and high-quality solutions that empower businesses and drive growth. We use
        cutting-edge technology to ensure that our services add value and make technology an asset for our clients.
      </p>
    </div>
  );
}

export default Ourwork;
