import Aboutcontent from "../pages/Aboutcontent";
import Contact from "../pages/Contact";
import MissionAndVision from "../pages/MissionAndVision";
import { useEffect } from "react";

function About (){
    useEffect(() => {
        document.title = "About | Sree Infinity Tech";
      }, []);
    
    return (
        <>
            <Aboutcontent />
            <MissionAndVision />
            <Contact/>
        </>
    );
};
export default About;