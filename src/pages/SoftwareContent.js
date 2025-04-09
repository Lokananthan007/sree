import "./SoftwareContent.css";
import useGlobalScroll from "../animation/useGlobalScroll";

function SoftwareContent(){

    useGlobalScroll();

    return (
        <div id="SoftwareContent">
            <h3 data-animate="fade-in" data-delay="0.2s">CRAFTING SMART SOFTWARE SOLUTIONS</h3>
            <p data-animate="fade-in" data-delay="0.2s">
            At SREE INFINITY TECH, we turn complex ideas into efficient software systems that drive real results. 
            From custom applications solutions, our team delivers powerful tools tailored to your business 
            goals through innovation, strategy and technology.
            </p>
        </div>
    );
};
export default SoftwareContent;
