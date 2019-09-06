import React from 'react';
import App from 'next/app';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

// main entrypoint of all styles
import '../styles/index.scss';

/**
 * Override default next's App component to call getInitialProps and define standart app structure.
 */
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
        <Header />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </>
    );
  }
}

export default MainApp;
