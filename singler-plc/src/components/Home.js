import React from 'react';
//components
import BackgroundPhoto from './BackgroundPhoto';
import PracticeAreasContainer from '../containers/PracticeAreasContainer';
import OurFirmContainer from '../containers/OurFirmContainer';
import OurAttorneysContainer from '../containers/OurAttorneysContainer';
import Contact from './Contact';
import Header from './Header';

const Home = () => {
  return (
    <div id='home'>
      <Header />
      <BackgroundPhoto />
      <PracticeAreasContainer />
      <OurFirmContainer />
      <OurAttorneysContainer />
      <Contact />
    </div>
  );
};
export default Home;
