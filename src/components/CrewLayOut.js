import { Outlet } from "react-router-dom";
import Header from "./Header";

const CrewLayOut = () => {
    return (        
       <div className = "bg-[url('assets/crew/background-crew-desktop.jpg')]" id="main-container">
           <Header />
            <Outlet />   
       </div>
    )
    
} 

export default CrewLayOut;