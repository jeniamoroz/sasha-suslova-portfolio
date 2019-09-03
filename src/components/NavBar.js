import React from 'react';
import Link from './Link';
import NavItem from './NavItem';

const NavBar = () => (
  <div className="navbar-row">
    <nav className="navbar navbar-expand navbar-light bg-light flex-fill" role="navigation">
      <Link className="navbar-brand">
        <img src="/static/logo_1.svg" alt="UXI Sasha Suslova" height="60" />
      </Link>
      <ul className="navbar-nav ml-auto">
        <NavItem>portfolio</NavItem>
        <NavItem>about</NavItem>
      </ul>
    </nav>
  </div>
);

export default NavBar;
