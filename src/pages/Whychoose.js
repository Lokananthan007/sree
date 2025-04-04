import "./Whychoose.css";
import useGlobalScroll from "../animation/useGlobalScroll";

function Whychoose() {
    useGlobalScroll();
    return (
        <div id="whychoose">
            <h3 data-animate="fade-in" data-delay="0.2s">Why Choose Us</h3>
            <p data-animate="fade-in" data-delay="0.2s">
                We excel in web development, software, mobile apps, and digital marketing. 
                Our goal is to provide reliable, high-quality solutions that empower businesses and drive growth. 
                Using advanced technologies, we ensure our services enhance value and turn technology into a powerful asset for our clients.
            </p>
        </div>
    );
};
export default Whychoose;