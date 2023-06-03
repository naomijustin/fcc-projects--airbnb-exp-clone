import React from "react"
import logo from "../images/AirBnb-Logo.svg"

function Navbar() {
    return (
        <nav className="nav--container">
            <img src={logo} alt="AirBnb Logo"></img>
        </nav>
    )
}

export default Navbar