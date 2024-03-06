
import React from "react";
import Array from "./data";
import DestinationNav from "../../components/DestinationNav";

const Moon = () => {

    return (
     <main className="flex flex-row ml-36 mt-32">
     <div className = "flex flex-col justify-center items-center gap-4 text-xl uppercase [letter-spacing:2px] -mt-20">
            <h2><span className="text-white/25 font-bold"> 01</span> pick your destination</h2>
            <img className="w-96 h-96" src={Array[0]?.img} alt="planet"/>
      </div >
        <div className="flex flex-col justify-items-start ml-48 gap-8 -mt-7">
                <DestinationNav/>
               <span className="text-8xl uppercase [letter-spacing:2px]">{Array[0]?.name}</span>
               <p className="max-w-96 text-sm">{Array[0]?.description}</p>
             <hr className= "border-b-1 border-gray-800 "/>
          <div className="flex flex-row gap-20 uppercase">
              <div className="flex flex-col">
                   <label className="text-xs font-light">Avg. distance</label>
                   <span className="text-3xl">{Array[0]?.AvgDistance}</span>
              </div> 
              <div className="flex flex-col">
                   <label className="text-xs font-light">Est. travel time</label>
                   <span className="text-3xl">{Array[0]?.travelTime}</span>
              </div>
         </div>
     </div>
</main>       
    )
    
} 

export default Moon;
