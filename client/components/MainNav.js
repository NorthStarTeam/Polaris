import React from 'react';
import { NavLink } from 'react-router-dom';

const mainNav = props => (
  <header className="main-nav">
    <nav>
      <ul>
        <li>
          <NavLink to="/signup">SignUp button</NavLink>
        </li>
        <li>
          <NavLink to="/profile">profile button</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNav;
