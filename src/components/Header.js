
import { NavLink  } from "react-router-dom";
import logu from "../assets/shared/logo.svg"

const activeStyles = {
  color : "white"
}



const Header = () => {

  const activeStyles = {
    borderColor: "white"
}

   return (
      <header>
        <nav className = "flex relative flex-row gap-44 justify-center items-center mt-8 ml-2">
          <img className = "w-10 h-10 mr-52 ml-16" src={logu} alt="space tourism logo" />
            <hr className= "border-b-1 border-gray-800 absolute w-1/2 mr-96"/>
            <div className = "text-xm uppercase font-thin flex justify-center items-center gap-16 ml-24 px-16 backdrop-blur-lg bg-white/5">
                <NavLink
                to = "/"
                end
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "border-b border-white/0 hover:border-white/50  pt-8 pb-8 flex gap-2 [letter-spacing:2px]"
                >
                
                <span>00</span>Home</NavLink>

                <NavLink
                to = "/destination"
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "border-b border-white/0 hover:border-white/50  pt-8 pb-8 flex gap-2 [letter-spacing:2px]"
                >
                
                <span>01</span>Destinaton</NavLink>

                <NavLink
                to = "/crew"
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "border-b border-white/0 hover:border-white/50  pt-8 pb-8 flex gap-2 [letter-spacing:2px]"
                >
                
                <span>02</span>Crew</NavLink>

                <NavLink
                to = "/technology"
                style ={({isActive}) => isActive ? activeStyles : null}
                className= "border-b border-white/0 hover:border-white/50  pt-8 pb-8 flex gap-2 [letter-spacing:2px]"
                >
                
                <span>03</span>Technology</NavLink>
            </div>
        </nav>
      </header>    
      
   )
}

export default Header;





// aria-selected:border-white
// aria-selected:border-white
// aria-selected:border-white
// aria-selected:border-white