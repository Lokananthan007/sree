import LifeCycle from "../pages/LifeCycle";
import Software from "../pages/Software";
import SoftwareCard from "../pages/SoftwareCard";
import SoftwareContent from "../pages/SoftwareContent";
import Techlogo from "../pages/Techlogo";
import Contact from "../pages/Contact";

function SoftwareService (){
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