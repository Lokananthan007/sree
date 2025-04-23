import "./AppCard.css";
import { FaMobileAlt, FaAppleAlt, FaAndroid, FaCode } from "react-icons/fa";

function AppCard() {
    return (
        <div id="AppCard">
            <div className="row" data-animate="fade-in" data-delay="0.2s">
                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaMobileAlt style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Cross-Platform Apps
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        We build cross-platform apps using modern frameworks like Flutter and React Native,
                        ensuring consistency, performance, and faster time to market across iOS and Android.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaAppleAlt style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        iOS App Development
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Our iOS app solutions are tailored for Apple devices, delivering smooth performance,
                        intuitive UI/UX, and seamless integration with the iOS ecosystem.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaAndroid style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Android App Development
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        From smartphones to tablets, we develop robust Android apps that meet diverse business needs,
                        ensuring compatibility and top-tier user experience.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaCode style={{ marginRight: "8px" }} color="#FFD700" size={40} />
                        Backend & API Integration
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Our apps are backed by powerful server-side development and seamless API integration,
                        enabling dynamic features, real-time data sync, and secure connections.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default AppCard;
