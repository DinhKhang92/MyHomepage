import React from "react"

import "./SkillBarSoft.css"

function getClassName(skill){
    return "skillbarcharacter__bar-" + skill.toLowerCase()
}

function SkillBarCharacter(props){
    const characterSkillBar = getClassName(props.skill)
    return(
        <div className="skillbarcharacter">
            <div className="skillbarcharacter__progressbar">
                <div className={characterSkillBar}>
                    <p>{props.skill}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillBarCharacter