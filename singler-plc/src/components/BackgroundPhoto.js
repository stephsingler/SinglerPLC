import React from 'react';
import golden from '../images/goldengate.jpg'
import vineyard from '../images/vineyard.jpg';
import austin from '../images/austin.jpg';

const BackgroundPhoto = () => {
  return (
    <div className="background-photo">
      <img src={golden} alt="Golden Gate" />
      <img src={vineyard} alt="Vineyard" />
      <img src={austin} alt="Austin" />
    </div>
  );
};
export default BackgroundPhoto;
