import React from 'react';
import NavBar from './NavBar';
import NavItem from './NavItem';
import menuItems from '../const/menu';

/**
 * Header component holds all static throughout the pages information to be diplayed on top of main content.
 */
const Header = () => (
  <header className="container">
    <NavBar>
      {menuItems.map(item => (
        <NavItem key={item.href} href={item.href}>
          {item.label}
        </NavItem>
      ))}
    </NavBar>
  </header>
);

export default Header;
