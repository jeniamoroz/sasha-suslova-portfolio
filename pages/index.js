import React from 'react';
import Router from 'next/router';

/**
 * As suggested by https://github.com/zeit/next.js/wiki/Redirecting-in-%60getInitialProps%60
 */
export default class Index extends React.PureComponent {
  static async getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/portfolio',
      });
      res.end();
    } else {
      Router.push('/portfolio');
    }
    return {};
  }
}
