import React from "react"

import "./Portfolio.css"

import Project from "../Project/Project"

import projectData from "./data/projectData"

class Portfolio extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }
    
    render(){
        let i = 0;
        const myProjects = projectData.map(function(data){
            let img_pos;
            
            (i % 2 === 0) ? img_pos = "l" : img_pos = "r"
            i++;
            return <Project key={data.id} project={data} img_pos={img_pos}/>
        })

        return(
            <div className="portfolio__body">
                {myProjects}
            </div>
        )
    }
}

export default Portfolio