
import Contact from "../pages/Contact";
import { useEffect } from "react";
import Ourwork from "../pages/Ourwork";
import Ourworkcard from "../pages/Ourworkcard";
import Whychoose from "../pages/Whychoose";
import Whychoosecard from "../pages/Whychoosecard";
import Techlogo from "../pages/Techlogo";
import Whatsays from "../pages/Whatsays";

function WorkDelivered (){
            useEffect(() => {
                document.title = "Work Delivered | Sree Infinity Tech";
              }, []);
    return (
        <>
            <Ourwork />
            <Ourworkcard />
            <Techlogo />
            <Whychoose />
            <Whychoosecard />
            <Whatsays />
            <Contact />
        </>
    );
};
export default WorkDelivered;