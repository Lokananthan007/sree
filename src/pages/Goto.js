import "./Goto.css";
import useGlobalScroll from "../animation/useGlobalScroll";

function Goto(){
    
    useGlobalScroll();

    return(
        <div id="goto" data-animate="fade-in" data-delay="0.2s">
            <h2 data-animate="fade-in" data-delay="0.2s">READY TO BRING YOUR IDEA TO LIFE <button className="btn">LET'S TALK</button></h2>
        </div>
    );
}
export default Goto;