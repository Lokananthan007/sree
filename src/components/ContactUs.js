import Contact from "../pages/Contact";
import { useEffect } from "react";
import GetInTouch from "../pages/GetInTouch";


function ContactUs (){
        useEffect(() => {
            document.title = "Contact Us | Sree Infinity Tech";
          }, []);
    return (
        <>
            <GetInTouch />
            <Contact />
        </>
    );
};
export default ContactUs;