import React from "react"

import "./Portfolio.css"

import Project from "../Project/Project"

import projectData from "./data/projectData"

function Portfolio(){
    let i = 0;
    const myProjects = projectData.map(function(data){
        let img_pos;
        if(i % 2 === 0)
            img_pos = "l"
        else
            img_pos = "r"
        i++;
        return <Project key={data.id} project={data} img_pos={img_pos}/>
    })

    return(
        <div className="portfolio__body">
            {myProjects}
        </div>
    )
}

export default Portfolio