import "./Ourservicescard.css";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import mobileImg from "../assets/images/mobile-icon.png";
import softwareImg from "../assets/images/software-icon.png";
import webImg from "../assets/images/web-icon.png";
import marketingImg from "../assets/images/marketing-icon.png";
import { useNavigate } from "react-router-dom";

function Ourservicescard() {
  const navigate = useNavigate();
  return (
    <div id="Ourservicescard">
      <div className="card-container" data-animate="fade-in" data-delay="0.2s">
        {/* Mobile App Development */}
        <Card className="card" data-animate="fade-in" data-delay="0.2s">
          <div className="image-container" data-animate="fade-in" data-delay="0.2s">
            <Image src={mobileImg} alt="Mobile App Development" fluid />
          </div>
          <Card.Body data-animate="fade-in" data-delay="0.2s">
            <Card.Title data-animate="fade-in" data-delay="0.2s">App Development</Card.Title>
            <Card.Text data-animate="fade-in" data-delay="0.2s">
              Create top-notch Android and iOS applications with intuitive design, smooth functionality 
              and reliable performance.
            </Card.Text>
            <button onClick={() => navigate("/service/app development")}  className="custom-btn" data-animate="fade-in" data-delay="0.2s">Learn More</button>
          </Card.Body>
        </Card>

        {/* Software Development */}
        <Card className="card" data-animate="fade-in" data-delay="0.2s">
          <div className="image-container" data-animate="fade-in" data-delay="0.2s">
            <Image src={softwareImg} alt="Software Development" fluid />
          </div>
          <Card.Body data-animate="fade-in" data-delay="0.2s">
            <Card.Title data-animate="fade-in" data-delay="0.2s">Software Development</Card.Title>
            <Card.Text data-animate="fade-in" data-delay="0.2s">
              Design and develop scalable, secure and efficient software solutions tailored to 
              meet business requirements effectively.
            </Card.Text>
            <button onClick={() => navigate("/service/software development")} className="custom-btn" data-animate="fade-in" data-delay="0.2s">Learn More</button>
          </Card.Body>
        </Card>

        {/* Web Development */}
        <Card className="card" data-animate="fade-in" data-delay="0.2s">
          <div className="image-container">
            <Image src={webImg} alt="Web Development" fluid />
          </div>
          <Card.Body data-animate="fade-in" data-delay="0.2s">
            <Card.Title data-animate="fade-in" data-delay="0.2s">Web Development</Card.Title>
            <Card.Text data-animate="fade-in" data-delay="0.2s">
              Create responsive, modern websites with user-friendly interfaces, optimized performance
               and seamless functionality across devices.
            </Card.Text>
            <button onClick={() => navigate("/service/web development")} className="custom-btn" data-animate="fade-in" data-delay="0.2s">Learn More</button>
          </Card.Body>
        </Card>

        {/* Digital Marketing */}
        <Card className="card" data-animate="fade-in" data-delay="0.2s">
          <div className="image-container" data-animate="fade-in" data-delay="0.2s">
            <Image src={marketingImg} alt="Digital Marketing" fluid />
          </div>
          <Card.Body data-animate="fade-in" data-delay="0.2s">
            <Card.Title data-animate="fade-in" data-delay="0.2s">Digital Marketing</Card.Title>
            <Card.Text data-animate="fade-in" data-delay="0.2s">
              Enhance brand visibility through strategic marketing, driving engagement, customer growth
               and long-term business success.
            </Card.Text>
            <button onClick={() => navigate("/service/digital marketing")} className="custom-btn" data-animate="fade-in" data-delay="0.2s">Learn More</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Ourservicescard;
