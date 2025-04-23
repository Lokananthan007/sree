import App from "../pages/App";
import AppCard from "../pages/AppCard";
import AppContent from "../pages/AppContent";
import Techlogo from "../pages/Techlogo";
import LifeCycle from "../pages/LifeCycle";
import Contact from "../pages/Contact";
import { useEffect } from "react";

function AppService (){
            useEffect(() => {
                document.title = "App Development | Sree Infinity Tech";
              }, []);
    return (
        <>
            <App />
            <AppContent />
            <AppCard />
            <Techlogo />
            <LifeCycle />
            <Contact />
        </>
    );
};
export default AppService;