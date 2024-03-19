
import { NavLink  } from "react-router-dom";
import logu from "../assets/shared/logo.svg"
import React from "react";


const Header = () => {

  const activeStyles = {
    borderColor: "white",
    color : "white"
}

const [UI, setUI] = React.useState(false)

const handleClick = () => {
  setUI(prev => !prev)
}

   return (
      <header className = "primary-header">
          <img className = "logo" src={logu} alt="space tourism logo" />
          <button className={ UI ? "mobile-nav-toggle-cross" : "mobile-nav-toggle-bar"  } aria-controls="primary-navigation" onClick={handleClick}></button>
             <nav 
                id="primary-nav"
                className = { UI ? "primary-nav-UIshow" : "primary-nav-UIhide"} 
              >
                <NavLink
                to = "/"  
                end
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "navlink"
                >
                
                <span>00</span>Home</NavLink>

                <NavLink
                to = "/destination"
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "navlink"
                >
                
                <span>01</span>Destinaton</NavLink>

                <NavLink
                to = "/crew"
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "navlink"
                >
                
                <span>02</span>Crew</NavLink>

                <NavLink
                to = "/technology"
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "navlink"
                >
                
                <span>03</span>Technology</NavLink>
            </nav>
      </header>    
      
   )
}

export default Header;

