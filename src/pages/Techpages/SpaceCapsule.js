import Header from "../../components/Header";
import TechCircleNav from "../../components/TechCircleNav";
import Array from "./data";


const SpaceCapsule = () => {
    return (
        <div className = "technology" id="body">
            <Header />
            <main className="grid-container--technology desktop:justify-items-start main-container flow">
                        <h2 className="uppercase tablet:justify-self-start font-Barlow [letter-spacing:4.72px] title"><span  className="text-white/25 font-bold mr-2">03</span> Space launch 101</h2>
                            <div className="circle-tab"><TechCircleNav /></div>      
                      <article className="technology-details flow">
                            <header className="uppercase [letter-spacing:2px] flow" >
                                <span className=" font-Barlow font-light ">The Technologies...</span>
                                <h2 className="font-Bellefair leading-mid-tight tech-name">{Array[2]?.name}</h2>
                            </header>
                            <p className="max-w-80 text-xs font-Roboto font-light [letter-spacing:1px]">{Array[2]?.description}</p>
                      </article>
                  <img className="tech--imgL" src = {Array[2]?.images[1]} alt="space-technology"/> 
                  <img className="tech--imgP ml-16" src = {Array[2]?.images[0]} alt="space-technology"/> 
           </main> 
      </div>
    )
}

export default SpaceCapsule;