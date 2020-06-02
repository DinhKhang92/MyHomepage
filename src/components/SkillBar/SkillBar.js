import React from "react"
import "./SkillBar.css"

function getClassName(skill){
    if(skill === "C++")
        return "skillbar__bar-cplusplus"
    else
        return "skillbar__bar-" + skill.toLowerCase()
}

function SkillBar(props){
    const mySkillBar = getClassName(props.skill)

    return(
        <div className="skillbar">
            <div className="skillbar__tag-html">
                <p>{props.skill}</p>
            </div>
            <div className="skillbar__progressbar">
                <div className={mySkillBar}></div>
            </div>
        </div>
    )
}

export default SkillBar