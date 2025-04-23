import "./WebCard.css";
import { FaCode, FaMobileAlt, FaServer, FaLaptopCode } from "react-icons/fa";

function WebCard() {
    return (
        <div id="WebCard" data-animate="fade-in" data-delay="0.2s">
            <div className="row" data-animate="fade-in" data-delay="0.2s">
                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaCode style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Frontend Development
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        We craft intuitive and engaging interfaces using modern technologies like React, Vue and HTML/CSS
                        to deliver sleek, responsive designs.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaServer style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Backend Development
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Robust and scalable backend systems powered by Node.js, Express and databases like MySQL & MongoDB to handle business logic and data flow.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaLaptopCode style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Full-Stack Solutions
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Complete web solutions from design to deployment, integrating frontend and backend seamlessly for optimized performance and functionality.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaMobileAlt style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Responsive Web Design
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Mobile-first and fully responsive websites that adapt beautifully across all devices and screen sizes to enhance user engagement.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default WebCard;
