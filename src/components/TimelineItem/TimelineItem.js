import React from "react"

import "./TimelineItem.css"

function TimelineItem(props){

    return(
        <div className="timeline-item">
        <p className="timeline-time">{props.data.date}</p>
        <div className="timeline-content">
          <p className="timeline-title">{props.data.title}</p>
          <p className="timeline-subtitle">{props.data.subtitle}</p>
          <p>{props.data.text}</p>
        </div>
      </div>
    )
}

export default TimelineItem