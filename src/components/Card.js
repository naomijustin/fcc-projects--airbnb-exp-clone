import React from "react"
//import imageExp from "../images/katie-zaferes.png"
import starIcon from "../images/star-icon.svg"

export default function Card(props) {
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.country === 'Online') {
        badgeText = "ONLINE"
    }
    return (
        <div className="card--container">            
            {badgeText && <span className="card--status-badge">{badgeText}</span>}
            <img className="card--image-exp" src={props.img} alt="Experience Background Image"></img>
            <div className="card--text-lower card--font-weight-300">
                <img src={starIcon} alt="Star Icon"></img>
                <span>&nbsp;{props.rating}</span>
                <span className="card--text-muted"> ({props.reviewCount}) &#x2022; {props.country}</span>
            </div>
            <div className="card--text-lower card--font-weight-300">{props.title}</div>
            <div className="card--text-lower">
                <b>From ${props.price}</b>
                <span className="card--font-weight-300"> / person</span>
            </div>                     
        </div>
    )
}