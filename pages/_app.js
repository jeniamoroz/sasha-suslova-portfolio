import React from 'react';
import App from 'next/app';
import NavBar from '../src/components/NavBar';
import NavItem from '../src/components/NavItem';

import '../styles/index.scss';

const menuItems = [{ href: '/portfolio', label: 'portfolio' }, { href: '/about', label: 'about' }];

class MainApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <header className="container">
          <NavBar>
            {menuItems.map(item => (
              <NavItem key={item.href} href={item.href}>
                {item.label}
              </NavItem>
            ))}
          </NavBar>
        </header>
        <main className="container">
          <Component {...pageProps} />
        </main>
      </>
    );
  }
}

export default MainApp;
