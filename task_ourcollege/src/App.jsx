import Home  from "./Home"
import About from "./About"
import Services from "./Service"
import Contact from "./Contact"
import Fotter from "./Footer"
import "./App.css"
function App(){
  return(
    <div>
      <h1>My College</h1>
    <div>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Service</a>
      <a href="">Contact</a>
      <a href="">Fotter</a>
      </div>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Fotter/>
    </div>
  )
}
export default App
