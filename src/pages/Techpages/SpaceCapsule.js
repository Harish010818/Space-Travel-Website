import TechCircleNav from "../../components/TechCircleNav";
import Array from "./data";


const SpaceCapsule = () => {
    return (
        <main className="flex flex-row item-center gap-20 ml-44 mt-44">
                  <div className="flex flex-col gap-10 -mt-36">
                        <h2 className="uppercase text-xl [letter-spacing:2px] font-light"><span  className="text-white/25 font-bold">03</span> Space launch 101</h2>
                         <div className="flex flex-row gap-20 mt-24">
                         <TechCircleNav />
                      <div className="flex flex-col max-w-lg gap-2 -mt-8">
                           <span className="uppercase [letter-spacing:2px]">The Technologies...</span>
                           <span className="uppercase text-6xl [letter-spacing:2px]">{Array[2]?.name}</span>
                           <p className="mt-5 text-xm max-w-sm">{Array[2]?.description}</p>
                      </div>

                         </div>
                  </div>
                  
                  <img  className = "w-96 h-96 -mt-24" src = {Array[2]?.images} alt="space-technology"/> 
           </main>
    )
}

export default SpaceCapsule;