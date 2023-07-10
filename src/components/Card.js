import React from "react"
//import imageExp from "../images/katie-zaferes.png"
import starIcon from "../images/star-icon.svg"

export default function Card(props) {
    console.log(props);
    let badgeText;
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === 'Online') {
        badgeText = "ONLINE"
    }
    return (
        <div className="card--container">            
            {badgeText && <span className="card--status-badge">{badgeText}</span>}
            <img className="card--image-exp" src={`${process.env.PUBLIC_URL + '/images/' + props.item.coverImg}`} alt="Experience Background Image"></img>
            <div className="card--text-lower card--font-weight-300">
                <img src={starIcon} alt="Star Icon"></img>
                <span>&nbsp;{props.item.stats.rating}</span>
                <span className="card--text-muted"> ({props.item.stats.reviewCount}) &#x2022; {props.item.location}</span>
            </div>
            <div className="card--text-lower card--font-weight-300">{props.item.title}</div>
            <div className="card--text-lower">
                <b>From ${props.item.price}</b>
                <span className="card--font-weight-300"> / person</span>
            </div>                     
        </div>
    )
}