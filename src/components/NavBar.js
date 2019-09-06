import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

/**
 * NavBar component holds main app menu.
 */
const NavBar = ({ children }) => (
  <div className="navbar-row">
    <nav className="navbar navbar-expand navbar-light bg-light flex-fill" role="navigation">
      <Link className="navbar-brand" href="/">
        <img src="/static/logo_1.svg" alt="UXI Sasha Suslova" height="60" />
      </Link>
      <ul className="navbar-nav ml-auto">{children}</ul>
    </nav>
  </div>
);

NavBar.propTypes = {
  children: PropTypes.node,
};

export default NavBar;
