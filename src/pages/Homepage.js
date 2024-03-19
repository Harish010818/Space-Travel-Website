
import { Link } from "react-router-dom";
import Header from "../components/Header";


const Homepage = () => {
    return ( 
       <div className = "home" id="body">
             <Header />
             <main className="main-container grid-container--home">
        <div>
            <h1 className="desktop:text-2xl [letter-spacing:3px] font-Barlow  desktop:text-gray-900 font-semibold">SO,YOU WANT 
            <span className="text-gray-900 tablet:text-white desktop:text-gray-900" > TO TRAVEL </span>TO</h1>
              <span className="space">SPACE</span>
              <p className="max-w-80 text-xs font-Roboto font-light [letter-spacing:1px]">Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
               because we’ll give you a truly out of this world experience! </p>
         </div>

         <Link to= "/destination">
         <div className= "relative">
             <span className="font-light absolute h-48 w-48 rounded-full
              bg-blue-500/55 text-2xl [letter-spacing:1px] text-black
               uppercase flex flex-col items-center justify-center font-Bellefair">Explore</span>
             <div className="content-[''] h-48  w-48 rounded-full  transform bg-yellow-400/15
                hover:scale-150 duration-[750ms] ease-in-out  "></div>
        </div>
        </Link>   
  </main>   
       </div>      
    )
}

export default Homepage;