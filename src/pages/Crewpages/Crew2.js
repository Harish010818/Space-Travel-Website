import CrewDottedNav from "../../components/CrewDottedNav";
import Header from "../../components/Header"
import Array from "./data";

const Crew2 = () => {
    return (
        <div className = "crew" id="body">
           <Header />
           <main className="grid-container--crew main-container justify-items-start flow">
                     <h2 className="uppercase tablet:justify-self-start font-Barlow [letter-spacing:4.72px] title"><span className="text-white/25 font-bold mr-2">02</span> Meet your crew</h2>
                        <div className = "dot-indicators">
                            <CrewDottedNav />
                        </div>
                   <article className="crew-details flow">
                            <header className="uppercase [letter-spacing:2px] flow">
                              <h2 className="text-blue-500 leading-mid-tight font-extralight font-Bellefair designation">{Array[1]?.desig}</h2>
                                <p className="crew-name font-Bellefair">{Array[1]?.name}</p>
                            </header>
                          <p className="max-w-80 text-xs font-Roboto font-light [letter-spacing:1px]">{Array[1]?.about}</p>
                   </article>             
                      <img className= "crew-image border-b border-white/10" src={Array[1]?.img} alt="crew-astronauts" />
           </main>
       </div>
           )
}

export default Crew2;