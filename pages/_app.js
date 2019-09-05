import React from 'react';
import App from 'next/app';
import NavBar from '../src/components/NavBar';
import NavItem from '../src/components/NavItem';
import menuItems from '../src/const/menu';
import '../styles/index.scss';

class MainApp extends App {
  static async getInitialProps(appContext) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

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
