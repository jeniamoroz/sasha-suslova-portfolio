import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from './Link';
import withIsActiveRoute from './withIsActiveRoute';

const NavItem = ({ children, href, isActiveRoute }) => (
  <li className={classnames('nav-item', { active: isActiveRoute })}>
    <Link className="nav-link" href={href}>
      {children}
    </Link>
  </li>
);

NavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  isActiveRoute: PropTypes.bool.isRequired,
};

export default withIsActiveRoute(NavItem);
