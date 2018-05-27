import React, { Component } from 'react';
//components
import Home from './Home';
import PeteBio from './PeteBio';
import TheoBio from './TheoBio';
import NathanBio from './NathanBio';
import Footer from './Footer';
import Links from './Links';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path = "/" component = {Home}/>
          <Route path = "/Pete" component = {PeteBio} />
          <Route path = "/Theo" component = {TheoBio} />
          <Route path = "/Nathan" component = {NathanBio} />
          <Route path = "/Links" component = {Links} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
