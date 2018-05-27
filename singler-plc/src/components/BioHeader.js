import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
//components
import BioNav from './BioNav';

const Header = () => {
  return (
    <div className="header">
      <h1><Link exact to="/">Singler<span>, PLC</span></Link></h1>
      <BioNav />
    </div>
  );
};
export default Header;
