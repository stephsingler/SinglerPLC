import React from 'react';
import golden from '../images/goldengate.jpg'
import vineyard from '../images/vineyard.jpg';
import austin from '../images/austin.jpg';

const BackgroundPhoto = () => {
  return (
    <div className="background-photo">
      <img src={golden} alt="Picture of Golden Gate" />
      <img src={vineyard} alt="Picture of Vineyard" />
      <img src={austin} alt="Picture of Austin" />
    </div>
  );
};
export default BackgroundPhoto;
