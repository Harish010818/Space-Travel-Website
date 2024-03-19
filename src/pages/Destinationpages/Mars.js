import DestinationNav from "../../components/DestinationNav";
import Array from "./data";
import Header from "../../components/Header"

const Mars = () => {

     return (
          <div className = "destination" id="body">
                <Header />
                <main className="main-container grid-container--destination flow">      
                 <h1 className="uppercase tablet:justify-self-start  font-Barlow [letter-spacing:3.75px] title">
                    <span className="text-white/25 font-bold mr-2"> 01</span> pick your destination
                 </h1>
                 <img className= "planet-image" src={Array[1]?.img} alt="the moon"/>
                    <div className="tabs-list">
                        <DestinationNav/>
                    </div>      
             <article className="destination-info  flow">
                    <span className="uppercase font-Bellefair leading-mid-tight planet--name">{Array[1]?.name}</span>
                    <p className="max-w-80 text-xs font-Roboto font-light [letter-spacing:1px]">{Array[1]?.description}</p>
               <div>
             <div className="destination-meta">
               <div>
                    <h3 className="uppercase text-xs text-white/60">Avg. distance</h3>
                    <p className="uppercase font-Bellefair text-2xl">{Array[1]?.AvgDistance}</p>
               </div>
               <div>
                    <h3 className="uppercase text-xs text-white/60">Est. travel time</h3>
                    <p className="uppercase font-Bellefair text-2xl">{Array[1]?.travelTime}</p>
               </div>
           </div>
              </div>
          </article>
     </main>
          </div>  
    )
    
} 

export default Mars;