import React from "react"

import XingIcon from "mdi-react/XingIcon"
import LinkedinIcon from "mdi-react/LinkedinIcon"
import GithubIcon from "mdi-react/GithubIcon"

import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

import "./Footer.css"

function Footer(){
    const iconSize = 28;
    const iconSize_hackerRank = iconSize - 5.5 ;

    return(
        <footer className="footer">
            <p>
                &copy; 2020 Khang Dinh
            </p>
            <p>
                <Link to="/Datenschutz" className="policy">Datenschutz</Link> - <Link to="/Impressum" className="policy">Impressum</Link>
            </p>
            <ul>
                <li><a href="https://www.xing.com/profile/Khang_Dinh2/cv" target="_blank"><XingIcon size={iconSize}/></a></li>
                <li><a href="https://www.linkedin.com/in/khang-dinh-7790971a8/" target="_blank"><LinkedinIcon size={iconSize}/></a></li>
                <li><a href="https://github.com/DinhKhang92" target="_blank"><GithubIcon size={iconSize}/></a></li>
                <li><a href="https://www.hackerrank.com/dinh_ngockhang92" target="_blank"><i className="fab fa-hackerrank fa-1g" style={{fontSize: iconSize_hackerRank, paddingBottom: 3}}></i></a></li>
            </ul>
        </footer>
    )
}

export default Footer