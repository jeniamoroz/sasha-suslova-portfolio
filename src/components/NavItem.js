import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from './Link';

const NavItem = ({ children, to, active }) => (
  <li className={classnames('nav-item', { active })}>
    <Link to={to} className="nav-link">
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

NavItem.defaultProps = {
  active: false,
};

export default NavItem;
