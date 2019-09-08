import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { withRouter } from 'next/router';

/**
 * Layout for every page, adds additional content to the page.
 */
const Layout = ({
  router,
  title,
  description,
  keywords,
  baseUrl,
  ogUrl = baseUrl + router.pathname,
  ogTitle = title,
  ogDescription = description,
  ogType,
  ogImage,
  fbAppId,
  children,
}) => (
  <>
    <Head>
      <title>Design Portfolio - Sasha Suslova</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={baseUrl} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {fbAppId && <meta property="fb:app_id" content={fbAppId} />}
    </Head>
    {children}
  </>
);

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
  baseUrl: PropTypes.string.isRequired,
  ogUrl: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogType: PropTypes.string.isRequired,
  ogImage: PropTypes.string,
  fbAppId: PropTypes.string,
  children: PropTypes.node.isRequired,
  router: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

Layout.defaultProps = {
  ogType: 'website',
  fbAppId: '257953674358265',
};

export default withRouter(Layout);
