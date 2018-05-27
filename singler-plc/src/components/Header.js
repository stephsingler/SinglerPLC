import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
//components
import Nav from './Nav';

const Header = () => {
  return (
    <div className="header">
      <h1><Link exact to="/">Singler<span>, PLC</span></Link></h1>
      <Nav />
    </div>
  );
};
export default Header;
