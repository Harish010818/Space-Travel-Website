import {  Outlet } from "react-router-dom";
import Header from "./Header";
;

const DestinationLayOut = () => {

    return (
          <div className = "bg-[url('assets/destination/background-destination-desktop.jpg')]" id="main-container" >
              <Header />
              <Outlet />
          </div>
           
    )
    
} 

export default DestinationLayOut;

