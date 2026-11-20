
import Home from "./Home"
import About from "./About"
import Services from "./Service"
import Contact from "./Contact"
import Footer from "./Footer"
import "./App.css"

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>MyCollege</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </div>
  )
}

export default App




// import Home  from "./Home"
// import About from "./About"
// import Services from "./Service"
// import Contact from "./Contact"
// import Fotter from "./Footer"
// import "./App.css"
// function App(){
//   return(
//     <div>
//       <h1>My College</h1>
//     <div>
//       <a href="">Home</a>
//       <a href="">About</a>
//       <a href="">Service</a>
//       <a href="">Contact</a>
//       <a href="">Fotter</a>
//       </div>
//       <Home/>
//       <About/>
//       <Services/>
//       <Contact/>
//       <Fotter/>
//     </div>
//   )
// }
// export default App
