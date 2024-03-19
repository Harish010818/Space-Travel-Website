import { NavLink } from "react-router-dom";

const CrewDottedNav = () => {

    const activeStyles = {
        backgroundColor : "white"
    } 

    return (
        <div  className="flex flex-row gap-4">

            <NavLink 
            to="/crew"
            end
             style ={({isActive}) => isActive ? activeStyles : null} 
            className= "rounded-full h-4 w-4 bg-white/25 hover:bg-white/50"
        >
           </NavLink>

            <NavLink 
            to="/crew/crew2"
            style ={({isActive}) => isActive ? activeStyles : null}
            className= "rounded-full h-4 w-4 bg-white/25 hover:bg-white/50"
        >
           </NavLink>

            <NavLink 
            to="/crew/crew3"
            style ={({isActive}) => isActive ? activeStyles : null}
            className= "rounded-full h-4 w-4 bg-white/25 hover:bg-white/50"
        >
           </NavLink>
            
            <NavLink 
            to="/crew/crew4"
            style ={({isActive}) => isActive ? activeStyles : null}
            className= "rounded-full h-4 w-4 bg-white/25 hover:bg-white/50"
         >
           </NavLink>
      </div>
    )
}

export default CrewDottedNav;