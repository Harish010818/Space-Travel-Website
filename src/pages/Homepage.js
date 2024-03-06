
import { Link } from "react-router-dom";
import Header from "../components/Header";


const Homepage = () => {
    return ( 
       <div className = "bg-[url('assets/home/background-home-desktop.jpg')]" id="main-container">
             <Header />
             <main className="flex flex-row item-center ml-44 mt-52">
        <div className = "flex flex-col  space-y-3">
            <h1 className=" text-xl [letter-spacing:2px]">SO, YOU WANT TO TRAVEL TO</h1>
              <span className="text-8xl  [letter-spacing:4px]">SPACE</span>
              <p className="max-w-80 text-sm">Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
               because we’ll give you a truly out of this world experience! </p>
         </div>
         <Link to= "/destination">
         <div className= "relative ml-80  mt-2">
             <span className="font-light absolute h-52 w-52 rounded-full bg-white text-2xl [letter-spacing:1px] text-black uppercase flex flex-col items-center justify-center">Explore</span>
             <div className="content-['']
                h-52 w-52 rounded-full bg-white/15 transform hover:scale-150
                 duration-[750ms] ease-in-out
             "></div>
        </div>
        </Link>   
  </main>   
       </div>       
    )
}

export default Homepage;