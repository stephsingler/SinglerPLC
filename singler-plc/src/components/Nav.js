import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="#home">
            HOME
          </a>
        </li>
        <li>
          <a href="#practice-areas">
            PRACTICE AREAS
          </a>
        </li>
        <li>
          <a href="#our-attorneys">
            OUR ATTORNEYS
          </a>
        </li>
        <li>
          <a href="#contact">
            CONTACT
          </a>
        </li>
        <li>
          <Link to="/Resources">
            RESOURCES
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
