import React from 'react';
//components
import BackgroundPhoto from './BackgroundPhoto';
import PracticeAreasContainer from '../containers/PracticeAreasContainer';
import OurFirmContainer from '../containers/OurFirmContainer';
import Attorneys from './Attorneys';
import Contact from './Contact';

const Home = () => {
  return (
    <div id='home'>
      <BackgroundPhoto />
      <PracticeAreasContainer />
      <OurFirmContainer />
      <Attorneys />
      <Contact />
    </div>
  );
};
export default Home;
