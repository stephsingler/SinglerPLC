import React, { Component } from 'react';
//components
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from "./Resources";
import PracticeAreas from "./PracticeAreas";
import Attorneys from "./Attorneys";
import Testimonials from './Testimonials';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path = "/" component = {Home}/>
          <Route path = "/practice-areas" component = {PracticeAreas} />
          <Route path = "/our-team" component = {Attorneys} />
          {/*<Route path = "/why-us" component = {WhyUs} />*/}
          <Route path = "/testimonials" component = {Testimonials} />
          {/*<Route path = "/contact" component = {Contact} />*/}
          <Route path = "/resources" component = {Resources} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
