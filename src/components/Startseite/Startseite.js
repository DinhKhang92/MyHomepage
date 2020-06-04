import React from "react"

import "./Startseite.css"

import Boxlink from "../Boxlink/Boxlink"
import boxlinkData from "./data/boxlinkData"

class Startseite extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        const myBoxLinks = boxlinkData.map(function(box){
            return <Boxlink key={box.id} box={box}/>
        })

        return(
            <main className="startseite__body">
                <section className="startseite__banner">
                    <div className="vertical-center">
                        <h2 className="startseite__banner-title">Ich bin Software-Entwickler</h2>
                        <br/>
                        <h1 className="startseite__banner-subtitle">mit Vertiefung in Data Science, Funktions-, Web- und Appentwicklung</h1>
                    </div>
                </section>
                <section className="startseite__boxes">
                    {myBoxLinks}
                </section>
            </main>
        )
    }
}

export default Startseite