import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import experiences from "./data.js"
console.log(experiences);

const cardsExp = experiences.map(item => {
  return (<Card
            img={require(`${"./images/" + item.coverImg}`)}
          />);
})
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
  return (
    <div className="app--container">
      <Navbar />
      <Hero />
      <Card 
        img={require(`${"./images/katie-zaferes.png"}`)}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      /> 
      
    </div>
    
  )
}

export default App