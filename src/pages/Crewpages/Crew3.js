import CrewDottedNav from "../../components/CrewDottedNav";
import Array from "./data";

const Crew3 = () => {
    return (
        <div>
              <main className="flex flex-row ml-44 mt-16 gap-36">
                   <div className = "flex flex-col justify-items-start gap-6   text-xl mr-20">
                       <div className="uppercase [letter-spacing:2px]">
                               <h2><span className="text-white/25 font-bold">02</span> Meet your crew</h2>
                              <div className="mt-20">
                                  <span className="text-blue-500 font-extralight">{Array[2]?.desig}</span>
                                  <h2 className="text-5xl max-w-lg mt-3">{Array[2]?.name}</h2>
                              </div>
                         </div>
                          <p className="max-w-96 text-sm mt-5">{Array[2]?.about}</p>
                   </div>             
                       <img className= "h-96 flex flex-col mt-24" src={Array[2]?.img} alt="crew-astronauts" />
           </main>
           <div className="flex flex-row item ml-44">
                    <CrewDottedNav/>
                </div>
        </div>
           )
}

export default Crew3;