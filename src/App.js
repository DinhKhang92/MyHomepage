import React from 'react';
import {BrowserRouter as Router,Switch, Route, Link} from "react-router-dom";

import Toolbar from "./components/Toolbar/Toolbar"
import SideDrawer from "./components/SideDrawer/SideDrawer"
import Backdrop from "./components/Backdrop/Backdrop"
import Footer from "./components/Footer/Footer"

import Startseite from "./components/Startseite/Startseite"
import Portfolio from "./components/Portfolio/Portfolio"
import Skills from "./components/Skills/Skills"
import AboutMe from "./components/AboutMe/AboutMe"
import Kontakt from "./components/Kontakt/Kontakt"
import Impressum from "./components/Impressum/Impressum"
import Datenschutz from "./components/Datenschutz/Datenschutz"

class App extends React.Component{
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(function(prevState){
      return{
        sideDrawerOpen: !prevState.sideDrawerOpen
      }
    })
  }

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false
    })
  }

  render(){
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }

    return(
      <div>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} click={this.backdropClickHandler}/>
        {backdrop}
        
          <Switch>
            <Route exact path="/" component={Startseite} />
            <Route path="/Portfolio">
              <Portfolio />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
            <Route path="/AboutMe">
              <AboutMe />
            </Route>>
            <Route path="/Kontakt">
              <Kontakt />
            </Route>
            <Route path="/Impressum">
              <Impressum />
            </Route>
            <Route path="/Datenschutz">
              <Datenschutz />
            </Route>
          </Switch>

        <Footer />
      </div>
    )
  }
}

export default App;