import React from "react"
import {Link} from "react-router-dom";

import "./Boxlink.css"

function getBoxLink(boxCase){
    if(boxCase === "Startseite")
        return '/'
    else if(boxCase === "Über Mich")
        return '/AboutMe'
    else
        return '/' + boxCase
}

function getBoxClass(boxShape){
    if(boxShape === "square")
        return "boxlink__square"
    else if(boxShape === "rectangle")
        return "boxlink__rectangle"
    else
        return "boxlink__bar"
}

function Boxlink(props){
    const boxClass = getBoxClass(props.box.shape)
    const boxLink = getBoxLink(props.box.case)

    return(
        <div className={boxClass}>
            <Link to={boxLink}> <h3>{props.box.case}</h3> </Link>
        </div>
    )
}

export default Boxlink