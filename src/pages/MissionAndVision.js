import "./MissionAndVision.css";
import useGlobalScroll from "../animation/useGlobalScroll";

function MissionAndVision () {

    useGlobalScroll();

    return (
        <div id="MissionAndVision">
            <div className="row">
                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">Our Mission</h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        In a rapidly evolving world, our mission is to remain at the forefront of innovation. 
                        We are driven by a commitment to deliver knowledge-powered solutions that make a meaningful 
                        difference. This mission forms the core of our strategies and defines our identity, guiding 
                        us in delivering excellence across every project.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">Our Vision</h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Our vision is to shape the future of technology by redefining what’s possible. 
                        Through continuous innovation, we aim to empower businesses, foster sustainable growth, 
                        and create lasting impact in an ever-changing digital world. With a focus on pushing boundaries, 
                        we strive to set new standards in technology and transformation.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">Our Goal</h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        By embracing emerging opportunities early on, we aim to seamlessly scale and evolve with 
                        the dynamic needs of the industry. Our goal is to serve as a one-stop destination for end-to-end 
                        technology solutions, driven by a passionate and skilled team that ensures the consistent 
                        delivery of quality and innovation.
                    </p>
                </div>

                <div className="col" data-animate="fade-in" data-delay="0.2s">
                    <h4 data-animate="fade-in" data-delay="0.2s">Our Values</h4>
                    <p data-animate="fade-in" data-delay="0.2s">
                        Our values are rooted in excellence, dedication, and integrity. We are committed to developing 
                        impactful web and mobile solutions, and custom applications that help our clients thrive in the digital 
                        landscape. Transparency and long-term trust define our collaborations, while continuous learning 
                        and innovation fuel our growth and ability to adapt.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default MissionAndVision;
