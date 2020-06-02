import React from "react"
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"
import MenuItems from "../MenuItems/MenuItems"

import "./Toolbar.css"

import boxlinkData from "../Startseite/data/boxlinkData"

function Navbar(props){

    const myMenuItems = boxlinkData.map(function(item){
        return (
            <MenuItems key={item.id} title={item.case}/>
        )
    })

    return(
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__togle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar__logo"><a href="/">KD</a></div>
                <div className="toolbar__navigation-items">
                <ul>
                    {myMenuItems}
                </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar