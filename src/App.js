import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiences from "./data.js"

const cardsExp = experiences.map(item => {
  return (<Card
            key={item.id}
            item={item}
            // img={require(`${"./images/" + item.coverImg}`)}
            // rating={item.stats.rating}
            // reviewCount={item.stats.reviewCount}
            // country={item.location}
            // title={item.title}
            // price={item.price}
            // openSpots={item.openSpots}
          />);
})

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <div className="cards-contain">
        {cardsExp}
      </div>     
    </div>
    
  )
}

export default App