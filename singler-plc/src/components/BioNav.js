import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link exact to="/">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/">
            PRACTICE AREAS
          </Link>
        </li>
        <li>
          <Link to="/">
            OUR FIRM
          </Link>
        </li>
        <li>
          <Link to="/">
            ATTORNEY BIOS
          </Link>
        </li>
        <li>
          <Link to="/">
            CONTACT
          </Link>
        </li>
        <li>
          <Link to="/Links">
            LINKS
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
