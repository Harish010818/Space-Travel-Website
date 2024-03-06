
import {NavLink  } from "react-router-dom";

const DestinationNav = () => {
    const activeStyles = {
        color : "white",
        borderColor: "white"
    }

   return (
        <nav  className="flex flex-row gap-8 uppercase text-white/25 ">
            <NavLink 
            to="/destination"
            end
            style = {({isActive}) => isActive ?  activeStyles : null}
           className= "uppercase [letter-spacing:2px] border-b border-white/0 hover:border-white/50 pb-1"
        >
            Moon</NavLink>

            <NavLink 
            to="/destination/mars" 
            style = {({isActive}) => isActive ?  activeStyles : null}
            className= "uppercase [letter-spacing:2px] border-b border-white/0 hover:border-white/50 pb-1"
        >
            Mars</NavLink>

            <NavLink 
            to="/destination/europa"
            style = {({isActive}) => isActive ?  activeStyles : null}
            className= "uppercase [letter-spacing:2px] border-b border-white/0 hover:border-white/50 pb-1"
        >
            Europa</NavLink>
            
            <NavLink 
            to="/destination/titan"
            style = {({isActive}) => isActive ?  activeStyles : null}
            className= "uppercase [letter-spacing:2px] border-b border-white/0 hover:border-white/50 pb-1"
         >
            Titan</NavLink>
      </nav>              
   )
}

export default DestinationNav;
