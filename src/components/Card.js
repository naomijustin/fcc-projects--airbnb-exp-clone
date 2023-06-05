import React from "react"
import imageExp from "../images/katie-zaferes.png"
import starIcon from "../images/star-icon.svg"

export default function Card() {
    return (
        <div className="card--container">
            <span className="card--status-badge">SOLD OUT</span>
            <img className="card--image-exp" src={imageExp} alt="Experience Background Image"></img>
            <div>
                <img src={starIcon} alt="Star Icon"></img>
                <span> 5.0</span>
                <span> (6) &#x2022; USA</span>
            </div>
            <div>Life lessons with Katie Zaferes</div>
            <div>
                <b>From $136</b>
                <span> / person</span>
            </div>
        </div>
    )
}