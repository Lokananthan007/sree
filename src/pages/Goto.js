import "./Goto.css";
import { useNavigate } from "react-router-dom";

function Goto(){
    const navigate = useNavigate();
    return(
        <div id="goto" data-animate="fade-in" data-delay="0.2s">
            <h2 data-animate="fade-in" data-delay="0.2s">READY TO BRING YOUR IDEA TO LIFE <button onClick={() => navigate("/contact us")} className="btn">LET'S TALK</button></h2>
        </div>
    );
}
export default Goto;