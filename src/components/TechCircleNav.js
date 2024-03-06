import { NavLink } from "react-router-dom";

const TechCircleNav = () => {
    const activeStyles = {
        backgroundColor : "white",
        color : "black"
    }

    return (
        <nav  className = "flex flex-col gap-8 -mt-6"> 

            <NavLink 
            to="/technology"
            end
            style ={({isActive}) => isActive ? activeStyles : null} 
            className= "flex border-box border h-16 w-16 rounded-full justify-center items-center hover:bg-white hover:text-black"
            >
           1</NavLink>

            <NavLink 
            to="/technology/spaceport"
            style ={({isActive}) => isActive ? activeStyles : null} 
            className= "flex border-box border h-16 w-16 rounded-full justify-center items-center hover:bg-white hover:text-black"
            >
           2</NavLink>

            <NavLink 
            to="/technology/spacecapsule"
            style ={({isActive}) => isActive ? activeStyles : null} 
            className= "flex border-box border h-16 w-16 rounded-full justify-center items-center hover:bg-white hover:text-black"
        >
           3</NavLink>
            
      </nav>
    )
}

export default TechCircleNav;