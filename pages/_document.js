import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Main document component to be used for all pages.
 */
export default class MainDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
