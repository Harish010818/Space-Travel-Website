import { Outlet} from "react-router-dom";
import Header from "./Header";
const TechLayOut = () => {

    return (
        
      <div  className = "bg-[url('assets/technology/background-technology-desktop.jpg')]" id="main-container" >
            <Header />
            <Outlet />
      </div>
             
    )
    
} 

export default TechLayOut;