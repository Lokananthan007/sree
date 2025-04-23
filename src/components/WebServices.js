import Web from "../pages/Web";
import WebCard from "../pages/WebCard";
import WebContent from "../pages/WebContent";
import Techlogo from "../pages/Techlogo";
import LifeCycle from "../pages/LifeCycle";
import Contact from "../pages/Contact";
import { useEffect } from "react";

function WebServices() {
          useEffect(() => {
              document.title = "Web Development | Sree Infinity Tech";
            }, []);
  return (
    <>
      <Web />
      <WebContent />
      <WebCard />
      <Techlogo />
      <LifeCycle />
      <Contact />
    </>
  );
}

export default WebServices;
