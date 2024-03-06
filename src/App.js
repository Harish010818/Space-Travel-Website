import {BrowserRouter, Routes, Route} from "react-router-dom"
import LayOut from "./components/LayOut.js"
import Homepage from "./pages/Homepage.js"
import DestinationLayOut from "./components/DestinationLayOut.js"
import Moon from "./pages/Destinationpages/Moon.js"
import Europa from "./pages/Destinationpages/Europa.js"
import Titan from "./pages/Destinationpages/Titan.js"
import Mars from "./pages/Destinationpages/Mars.js"
import CrewLayOut from "./components/CrewLayOut.js"
import Crew1 from "./pages/Crewpages/Crew1.js"
import Crew2 from "./pages/Crewpages/Crew2.js"
import Crew3 from "./pages/Crewpages/Crew3.js"
import Crew4 from "./pages/Crewpages/Crew4.js"
import TechLayOut from "./components/TechLayOut.js"
import Launcher from "./pages/Techpages/Launcher.js"
import Spaceport from "./pages/Techpages/Spaceport.js"
import SpaceCapsule from "./pages/Techpages/SpaceCapsule.js"

function App() {
  

  return (
  <div>
      <BrowserRouter>
            <Routes>
                  <Route path="/" element = {<LayOut />} >
                    <Route index  element = {<Homepage />} />

                     <Route path="destination" element = {<DestinationLayOut />} >
                          <Route index element = {<Moon />}/>         
                          <Route path="mars" element = {<Mars/>}/>         
                          <Route path="europa" element = {<Europa />}/>         
                          <Route path="titan" element = {<Titan />}/> 
                     </Route>                 
                      <Route path="crew" element = {<CrewLayOut />}>         
                              <Route index element = {<Crew1 />}/>         
                              <Route path="crew2" element = {<Crew2 />}/>         
                              <Route path="crew3" element = {<Crew3 />}/>         
                              <Route path="crew4" element = {<Crew4 />}/>
                      </Route>          
                      < Route path="technology" element = {<TechLayOut />}>
                              < Route index element = {<Launcher />}/>
                              < Route path="spaceport" element = {<Spaceport />}/>
                              < Route path="spacecapsule" element = {<SpaceCapsule />}/>
                      </Route >
                  </Route>       
            </Routes>
      </BrowserRouter>
  </div>
  ) 
}

export default App;
