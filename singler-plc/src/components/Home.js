import React from 'react';
//components
import BackgroundPhoto from './BackgroundPhoto';
import PracticeAreasContainer from '../containers/PracticeAreasContainer';
import OurAttorneysContainer from '../containers/OurAttorneysContainer';
import Contact from './Contact';
import Header from './Header';
import ContactUs from './ContactUs';
import TestimonialContainer from '../containers/TestimonialContainer';

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <BackgroundPhoto />
      <ContactUs />
      <div className="testimonial-background">
        <TestimonialContainer />
      </div>
      <PracticeAreasContainer />
      <OurAttorneysContainer />
      <Contact />
    </div>
  );
};
export default Home;
