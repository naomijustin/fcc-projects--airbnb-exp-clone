import React from "react"
//import imageExp from "../images/katie-zaferes.png"
import starIcon from "../images/star-icon.svg"

export default function Card(props) {

    return (
        <div className="card--container">
            
            <span className="card--status-badge">SOLD OUT</span>
            <img className="card--image-exp" src={props.img} alt="Experience Background Image"></img>
            <div className="card--text-lower card--font-weight-300">
                <img src={starIcon} alt="Star Icon"></img>
                <span> 5.0</span>
                <span className="card--text-muted"> (6) &#x2022; USA</span>
            </div>
            <div className="card--text-lower card--font-weight-300">Life lessons with Katie Zaferes</div>
            <div className="card--text-lower">
                <b>From $136</b>
                <span className="card--font-weight-300"> / person</span>
            </div>                     
        </div>
    )
}