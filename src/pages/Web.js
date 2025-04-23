import "./Web.css";
import { useNavigate } from "react-router-dom";

function Web (){
    const navigate = useNavigate();
    return (
        <div id="Web">
            <h3 data-animate="fade-in" data-delay="0.2s">Best Web Development Company</h3>
            <p data-animate="fade-in" data-delay="0.2s">
            At <strong>SREE INFINITY TECH</strong>, we deliver scalable and high-performance web solutions designed to help businesses thrive. From startups to enterprises, we build fast, secure and user-friendly websites tailored to your brand and goals.
            </p>

            <p data-animate="fade-in" data-delay="0.2s">
            Our expertise includes custom website design, full-stack development, eCommerce platforms, CMS integration and responsive web applications. With a focus on innovation and long-term growth, <strong>SREE INFINITY TECH</strong> is your trusted partner in digital transformation.
            </p>
            <button onClick={() => navigate("/contact us")} className="btn" data-animate="fade-in" data-delay="0.2s">LET'S TALK</button>
        </div>
    );
};
export default Web;