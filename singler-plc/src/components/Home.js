import React from 'react';
//components
import BackgroundPhoto from './BackgroundPhoto';
import Contact from './Contact';
import Header from './Header';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <BackgroundPhoto />
      <ContactUs />
      <Contact />
    </div>
  );
};
export default Home;
