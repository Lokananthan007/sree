import "./SoftwareCard.css";
import { FaUsersCog, FaCogs, FaDesktop, FaGlobe } from "react-icons/fa";

function SoftwareCard() {
    return (
        <div id="SoftwareCard">
            <div className="row">
                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaUsersCog style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Custom CRM Development
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        We build scalable CRM systems that streamline operations, enhance customer engagement
                         and adapt seamlessly to your business needs.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaCogs style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Custom ERP Development
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Our ERP solutions optimize resources, automate workflows 
                        and support your business growth with reliable, user-friendly platforms.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaDesktop style={{ marginRight: "8px" }}  size={40} color="#FFD700" />
                        Custom Desktop Software
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        We develop powerful desktop software tailored to your operations, ensuring performance, reliability
                         and smooth offline access.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaGlobe style={{ marginRight: "8px" }}  color="#FFD700" />
                        Custom Web Applications
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Our custom web apps deliver seamless user experiences, enhanced functionalit
                         and scalable performance for diverse industries.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default SoftwareCard;
