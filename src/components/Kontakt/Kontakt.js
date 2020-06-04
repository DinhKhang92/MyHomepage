import React from "react"

import "./Kontakt.css"

class Kontakt extends React.Component{

    componentDidMount(){
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div style={{marginTop: "4rem"}}>
                <div className="contact__contact-info">
                    <div className="contact__card">
                        <a href="mailto:dinh.khang92@hotmail.de" className="mailto"><i className="contact__card-icon far fa-envelope"></i></a>
                        <p>Dinh.Khang92@hotmail.de</p>
                    </div>
                    <div className="contact__card">
                        <i className="contact__card-icon fas fa-phone"></i>
                        <p>+49 176 4385 9794</p>
                    </div>
                    <div className="contact__card">
                        <a 
                            href="https://www.google.de/maps/place/10711+Berlin/@52.4974838,13.2836878,15z/data=!3m1!4b1!4m5!3m4!1s0x47a850c436fa36bb:0x1c212049953ddc60!8m2!3d52.4990238!4d13.2916403"
                            className="mailto" 
                            target="_blank"
                        >
                            <i className="contact__card-icon fas fa-map-marker-alt"></i>
                        </a>
                        <p>10711 Berlin, Deutschland</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kontakt