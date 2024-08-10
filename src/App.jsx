import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Title from "./Components/Title/Title.jsx";
import About from "./Components/About/About.jsx";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <br/>
        <Title subtitle="Our Projects" title="Some of Our Projects"/>
        <Projects/>
        <About/>
      </div>
      

    </div>
  )
}

export default App;
