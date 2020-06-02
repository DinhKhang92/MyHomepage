import React from "react"

import boxlinkData from "../Startseite/data/boxlinkData"
import MenuItems from "../MenuItems/MenuItems"

import XingIcon from "mdi-react/XingIcon"
import LinkedinIcon from "mdi-react/LinkedinIcon"
import GithubIcon from "mdi-react/GithubIcon"

import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

import "./SideDrawer.css"

function SideDrawer(props){
    let drawerClasses = 'side-drawer'
    if(props.show)
        drawerClasses = 'side-drawer open'

    const myMenuItems = boxlinkData.map(function(item){
        return (
            <MenuItems key={item.id} title={item.case} click={props.click}/>
        )
    })

    const iconSize = 28;
    const iconSize_hackerRank = iconSize - 4.5 ;

    return(
        <nav className={drawerClasses}>
            <div className="sidedrawer__vertical-center">
                <div>
                    <ul>
                        {myMenuItems}
                    </ul>
                </div>
                <div className="side-drawer__icons">
                    <a href="https://www.xing.com/profile/Khang_Dinh2/cv" target="_blank"><XingIcon size={iconSize}/></a>
                    <a href="https://www.linkedin.com/in/khang-dinh-7790971a8/" target="_blank"><LinkedinIcon size={iconSize}/></a>
                    <a href="https://github.com/DinhKhang92" target="_blank"><GithubIcon size={iconSize}/></a>
                    <a href="https://www.hackerrank.com/dinh_ngockhang92" target="_blank"><i className="fab fa-hackerrank fa-1g" style={{fontSize: iconSize_hackerRank, paddingTop: 3}}></i></a>
                </div>
                <h3 style={{marginTop: "1rem"}}> <Link to="/Datenschutz" onClick={props.click}>Datenschutz</Link></h3>
                <h3><Link to="/Impressum" onClick={props.click}>Impressum</Link></h3>
            </div>
        </nav>
    )
}

export default SideDrawer