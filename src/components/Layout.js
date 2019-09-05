import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Layout = ({ title, description, keywords, children }) => (
  <>
    <Head>
      <title>Design Portfolio - Sasha Suslova</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    {children}
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Layout;
