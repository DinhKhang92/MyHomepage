import React from "react"

import "./Skills.css"
import webSkillData from "./data/webSkillData"
import programmingSkillData from "./data/programmingSkillData"
import frameworkSkillData from "./data/frameworkSkillData"
import SkillBar from "../SkillBar/SkillBar"

function getSkills(skillData){
    const skills = skillData.map(function(skill){
        return(
            <SkillBar key={skill.id} skill={skill.title}/>
        )
    })
    return skills
}

class Skills extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        const webSkills = getSkills(webSkillData)
        const programmingSkills = getSkills(programmingSkillData)
        const ideSkills = getSkills(frameworkSkillData)

        return(
            <div className="skills__container">
                <p className="skills__description"> Programmierkenntnisse </p>
                {programmingSkills}
                <p className="skills__description"> Webkenntnisse </p>
                {webSkills}
                <p className="skills__description"> Frameworks </p>
                {ideSkills}
            </div>
        )
    }
}

export default Skills