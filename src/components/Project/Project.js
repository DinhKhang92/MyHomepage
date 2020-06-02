import React from "react"

import "./Project.css"

function Project(props){
    const skills = props.project.tools.map(function(skill){
        return <li key={skill}> {skill} </li>
    });

    let projectImg, projectId = "NaN";

    if(props.project.img === "SitKrit.png"){
        projectImg = require("./assets/SitKrit.png")
    }
    else if(props.project.img === "BildKhang.jpg"){
        projectImg = require("./assets/BildKhang.jpg")
    }
    else if(props.project.img === "TradedexLogo.png"){
        projectImg = require("./assets/TradedexLogo.png")
        projectId = "project__image-tradedex"
    }
    else if(props.project.img === "KD.png"){
        projectImg = require("./assets/KD.png")
    }
    
    const myImg = {
        backgroundImage: "url(" + projectImg +")"
    }

    if(props.img_pos === "l"){
        return(
            <section className="project__container gray">
                <div className="project__image" style={myImg} id={projectId}></div>
                <article>
                    <h2>{props.project.caption}</h2>
                    <p>{props.project.text}</p>
                    <br />
                    <p style={{display: props.project.url_android ? "block" : "none"}}>
                        Android: <a href={props.project.url_android}>Link</a>
                        <br /> 
                        iOS: <a href={props.project.url_ios}>Link</a>
                        <br /> <br /> 
                    </p>
                    <ul className="ul_left">
                        {skills}
                    </ul>
                </article>
            </section>
        )
    }
    else{
        return(
            <section className="project__container white">
                <article>
                    <h2>{props.project.caption}</h2>
                    <p>{props.project.text}</p>
                    <br /> 
                    <p style={{display: props.project.url_android ? "block" : "none"}}>
                        Android: <a href={props.project.url_android}>Link</a>
                        <br /> 
                        iOS: <a href={props.project.url_ios}>Link</a>
                        <br /> <br /> 
                    </p>
                    <ul>
                        {skills}
                    </ul>
                </article>
                <div className="project__image" style={myImg}></div>
            </section>
        )
    }
}

export default Project