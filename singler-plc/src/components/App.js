import React, { Component } from 'react';
//components
import Home from './Home';
import Footer from './Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resources from "./Resources";
import PracticeAreas from "./PracticeAreas";
import Attorneys from "./Attorneys";
import Contact from "./Contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path = "/" component = {Home}/>
          <Route path = "/Areas" component = {PracticeAreas} />
          <Route path = "/Team" component = {Attorneys} />
          {/*<Route path = "/WhyUs" component = {WhyUs} />*/}
          {/*<Route path = "/Testimonials" component = {Testimonials} />*/}
          <Route path = "/Contact" component = {Contact} />
          <Route path = "/Resources" component = {Resources} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
