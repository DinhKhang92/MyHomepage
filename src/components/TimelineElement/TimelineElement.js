import React from "react"

import { VerticalTimelineElement }  from 'react-vertical-timeline-component';

function TimelineElement(props){
    return(
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={props.data.date}
            iconStyle={props.iconStyle}
            icon={props.icon}
        >
            <h3 className="vertical-timeline-element-title">{props.data.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{props.data.subtitle}</h4>
            <p>{props.data.text}</p>
        </VerticalTimelineElement>
    )
}

export default TimelineElement