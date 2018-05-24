import React, { Component } from 'react';
//components
import Header from './Header';
import Home from './Home';
import PeteBio from './PeteBio';
import TheoBio from './TheoBio';
import NathanBio from './NathanBio';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path = "/" component = {Home}/>
          <Route path = "/Pete" component = {PeteBio} />
          <Route path = "/Theo" component = {TheoBio} />
          <Route path = "/Nathan" component = {NathanBio} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
