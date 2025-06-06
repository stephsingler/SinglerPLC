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
          <Link to ="/practice-areas">
            PRACTICE AREAS
          </Link>
        </li>
        <li>
          <Link to="/our-team">
            OUR TEAM
          </Link>
        </li>
        <li>
          <Link to="/contact">
            CONTACT
          </Link>
        </li>
        {/*<li>*/}
        {/*  <Link to="/resources">*/}
        {/*    RESOURCES*/}
        {/*  </Link>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
};
export default Nav;
