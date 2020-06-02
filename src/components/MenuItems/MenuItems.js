import React from "react"
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

import "./MenuItems.css"

function getMenuLink(menuCase){
    if(menuCase === "Startseite")
        return '/'
    else if(menuCase === "Über Mich")
        return '/AboutMe'
    else
        return '/' + menuCase
}

function MenuItems(props){
    const menuLink = getMenuLink(props.title)

    return(
        <li><Link to={menuLink} className="menu-items__item" onClick={props.click}>{props.title}</Link></li>
    )
}

export default MenuItems