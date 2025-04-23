import Contact from "../pages/Contact";
import Goto from "../pages/Goto";
import Homepage from "../pages/Homepage";
import Ourservices from "../pages/Ourservices";
import Ourservicescard from "../pages/Ourservicescard";
import Ourwork from "../pages/Ourwork";
import Ourworkcard from "../pages/Ourworkcard";
import Techlogo from "../pages/Techlogo";
import Whatsays from "../pages/Whatsays";
import Whychoose from "../pages/Whychoose";
import Whychoosecard from "../pages/Whychoosecard";
import { useEffect } from "react";

function Home(){
        useEffect(() => {
            document.title = "Home | Sree Infinity Tech";
          }, []);
    return(
        <>
            <Homepage/>
            <Ourservices/>
            <Ourservicescard/>
            <Goto/>
            <Whychoose/>
            <Whychoosecard/>
            <Techlogo/>
            <Ourwork/>
            <Ourworkcard/>
            <Whatsays/>
            <Contact/>
        </>
    );
}
export default Home;