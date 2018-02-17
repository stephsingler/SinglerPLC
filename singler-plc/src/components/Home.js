import React from 'react';
//components
import BackgroundPhoto from './BackgroundPhoto';
import PracticeAreas from './PracticeAreas';
import OurFirm from './OurFirm';
import Attorneys from './Attorneys';

const Home = () => {
  return (
    <div id='home'>
      <BackgroundPhoto />
      <PracticeAreas />
      <OurFirm />
      <Attorneys />
    </div>
  );
};
export default Home;
