import "./DigitalMarketing.css";
import { useNavigate } from "react-router-dom";

function DigitalMarketing () {
  const navigate = useNavigate();
  return (
    <div id="DigitalMarketing">
        <h3 data-animate="fade-in" data-delay="0.2s">Top-Tier Digital Marketing Company</h3>
        <p data-animate="fade-in" data-delay="0.2s">
        At <strong>SREE INFINITY TECH</strong>, we specialize in delivering result-driven digital marketing solutions
         that boost your brand's visibility and drive conversions.
        </p>
        <p data-animate="fade-in" data-delay="0.2s">
        From strategic <strong>SEO</strong> services that improve your search engine rankings to engaging 
        marketing campaigns, we help your business capture and retain audience attention.
        </p>
        <p data-animate="fade-in" data-delay="0.2s">
        Our certified experts craft impactful <strong>Google Ads</strong> and <strong>Meta Ads</strong> 
        (Facebook & Instagram) to generate leads, grow traffic and maximize ROI across all platforms.
        Whether you're a startup or an established enterprise, partner with us to elevate your digital
        presence and grow faster in a competitive market.
        </p>
        <button onClick={() => navigate("/contact us")} className="btn" data-animate="fade-in" data-delay="0.2s">LET'S TALK</button>
    </div>
  );
}

export default DigitalMarketing;
