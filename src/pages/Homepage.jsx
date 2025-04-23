import "./Homepage.css";
import Adobe from "../assets/images/home-icon (1).png";
import Google from "../assets/images/home-icon (3).png";
import AWS from "../assets/images/home-icon (2).png";
import Azure from "../assets/images/home-icon (4).png";

function Homepage(){
    return(
        <div id="homepage">
            <h3 data-animate="fade-in" data-delay="0.2s">Expert Software Developers</h3>
            <h2 data-animate="fade-in" data-delay="0.2s">Top Software & App Development Company</h2>
            <h3 data-animate="fade-in" data-delay="0.2s">for Digital Growth Solutions</h3>
            <p data-animate="fade-in" data-delay="0.2s">Empower your business with our full-service expertise in Software Development,  
                Mobile Apps, Websites and Digital Marketing. We specialize in innovative solutions,  
                multi-platform lead nurturing and cutting-edge strategies to accelerate your digital success.</p>
            <div className="image">
                <img src={Adobe} alt="Adobe Cloud" title="Adobe Cloud" data-animate="fade-in" data-delay="0.2s" />
                <img src={Google} alt="Google Cloud" title="Google Cloud" data-animate="fade-in" data-delay="0.2s" />
                <img src={AWS} alt="AWS" title="AWS" data-animate="fade-in" data-delay="0.2s" />
                <img src={Azure} alt="Azure" title="Azure" data-animate="fade-in" data-delay="0.2s" />
            </div>
        </div>
    );
}
export default Homepage;