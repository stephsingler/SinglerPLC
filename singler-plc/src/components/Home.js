import React from 'react';
//components
import BackgroundPhoto from './BackgroundPhoto';
import Header from './Header';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <BackgroundPhoto />
      <ContactUs />
    </div>
  );
};
export default Home;
