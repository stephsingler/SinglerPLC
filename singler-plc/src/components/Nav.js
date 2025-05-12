import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link to ="/Areas">
            PRACTICE AREAS
          </Link>
        </li>
        <li>
          <Link to="/Team">
            OUR TEAM
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            CONTACT
          </Link>
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
