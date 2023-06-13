import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <Card 
        img={require(`${"./images/katie-zaferes.png"}`)}
      /> 
    </div>
  )
}

export default App