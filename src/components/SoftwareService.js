import LifeCycle from "../pages/LifeCycle";
import Software from "../pages/Software";
import SoftwareCard from "../pages/SoftwareCard";
import SoftwareContent from "../pages/SoftwareContent";
import Techlogo from "../pages/Techlogo";
import Contact from "../pages/Contact";
import { useEffect } from "react";

function SoftwareService (){
        useEffect(() => {
            document.title = "Software Development | Sree Infinity Tech";
          }, []);
    return (
        <>
            <Software />
            <SoftwareContent />
            <SoftwareCard />
            <Techlogo />
            <LifeCycle />
            <Contact />
        </>
    );
};
export default SoftwareService;