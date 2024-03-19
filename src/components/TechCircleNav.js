import { NavLink } from "react-router-dom";

const TechCircleNav = () => {
    const activeStyles = {
        backgroundColor : "white",
        color : "black"
    }

    return (
        <nav  className = "flex flex-row gap-6 desktop:flex-col"> 

            <NavLink 
            to="/technology"
            end
            style ={({isActive}) => isActive ? activeStyles : null} 
            className = "circle-nav"
            >
           1</NavLink>

            <NavLink 
            to="/technology/spaceport"
            style ={({isActive}) => isActive ? activeStyles : null} 
            className= "circle-nav"
            >
           2</NavLink>

            <NavLink 
            to="/technology/spacecapsule"
            style ={({isActive}) => isActive ? activeStyles : null} 
            className= "circle-nav"
        >
           3</NavLink>
            
      </nav>
    )
}

export default TechCircleNav;