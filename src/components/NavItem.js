import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

const NavItem = ({ children }) => (
  <li className="nav-item">
    <Link className="nav-link">{children}</Link>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node,
};

export default NavItem;
