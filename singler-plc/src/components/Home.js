import React from 'react';
//components
import BackgroundPhoto from './BackgroundPhoto';
import Header from './Header';
import ContactUs from './ContactUs';
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <BackgroundPhoto />
      <Testimonial />
      <ContactUs />
    </div>
  );
};
export default Home;
