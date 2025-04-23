import "./DigitalCard.css";
import { FaSearch, FaBullhorn, FaChartLine, FaLaptopCode } from "react-icons/fa";


function DigitalCard() {
    return (
        <div id="DigitalCard">
            <div className="row" data-animate="fade-in" data-delay="0.2s">
                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaSearch style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        SEO Optimization
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        We help boost your website’s visibility on search engines with targeted keywords,
                        content strategies and on-page/off-page SEO techniques to drive organic traffic.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaBullhorn style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Social Media Marketing
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Engage your audience on platforms like Facebook, Instagram and LinkedIn with
                        compelling campaigns, creative content and strategic ad placements.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaChartLine style={{ marginRight: "8px" }} size={40} color="#FFD700" />
                        Analytics & Reporting
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        We provide in-depth analytics and performance reports that give you clear insights into
                        your marketing campaigns, helping you make informed decisions.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">
                        <FaLaptopCode style={{ marginRight: "8px" }} color="#FFD700" size={40} />
                        Website & Landing Pages
                    </h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        We design and develop high-converting websites and landing pages optimized
                        for user experience, speed and digital campaigns.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default DigitalCard;
