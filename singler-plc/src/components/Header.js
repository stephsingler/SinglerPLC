import React from 'react';
import '../index.css';
//components
import Nav from './Nav';

const Header = () => {
  return (
    <div className="header">
      <h1>Singler<span>, PLC</span></h1>
      <Nav />
    </div>
  );
};
export default Header;
