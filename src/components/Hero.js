import React from "react"
import photoGrid from "../images/Hero-Photo-Grid.png"

function Hero() {
    return (
        <section className="hero--container">
            <img src={photoGrid} alt="Hero Photo Grid" className="hero--photo-grid"></img>
            <div className="hero--title-section">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero