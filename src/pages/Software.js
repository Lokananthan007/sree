import "./Software.css";
import { useNavigate } from "react-router-dom";

function Software () {
  const navigate = useNavigate();
  return (
    <div id="Software">
            <h3 data-animate="fade-in" data-delay="0.2s">Best Software Development Company</h3>
            <p data-animate="fade-in" data-delay="0.2s">
              At <strong>SREE INFINITY TECH</strong>, we deliver smart, scalable software solutions tailored for various industries, helping businesses grow through innovation and technology.
            </p>
            <p data-animate="fade-in" data-delay="0.2s">
              Our services include ERP development, custom web applications, desktop software, CRM development and  complete branding solutions—all designed to boost performance and efficiency.
            </p>
            <button onClick={() => navigate("/contact us")} className="btn" data-animate="fade-in" data-delay="0.2s">LET'S TALK</button>
        </div>
    );
};
export default Software;
