import Contact from "../pages/Contact";
import { useEffect } from "react";
import DigitalMarketing from "../pages/DigitalMarketing";
import DigitalContant from "../pages/DigitalContant";
import DigitalCard from "../pages/DigitalCard";

function Digital (){
        useEffect(() => {
            document.title = "Digital Marketing | Sree Infinity Tech";
          }, []);
    return (
        <>
            <DigitalMarketing />
            <DigitalContant />
            <DigitalCard />
            <Contact />
        </>
    );
};
export default Digital;