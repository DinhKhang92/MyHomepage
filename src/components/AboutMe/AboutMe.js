import React from "react"

import "./AboutMe.css"

import aboutmeData from "./data/aboutmeData"

import TimelineItem from "../TimelineItem/TimelineItem"


class AboutMe extends React.Component{

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render(){
    const myAboutmeData2 = aboutmeData.map(function(data){
      return <TimelineItem key={data.id} data={data}/>
    })

    return(
        <div className="aboutme__body">
          <div className="aboutme__timeline">
            <div className="aboutme__timeline-body">
              {myAboutmeData2}
            </div>
          </div>
        </div>
    )
  }
}

export default AboutMe