import React, { Component } from 'react';
//components
import Home from './Home';
import Footer from './Footer';
import LinksContainer from '../containers/LinksContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AttorneyBioContainer from "../containers/AttorneyBioContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path = "/" component = {Home}/>
          <Route path = "/Bios/:id" component = {AttorneyBioContainer} />
          <Route path = "/Links" component = {LinksContainer} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
