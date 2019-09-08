import React from 'react';
import PropTypes from 'prop-types';
import Me from '../src/components/Me';
import Layout from '../src/components/Layout';
import Projects from '../src/components/Projects';
import { loadPortfolio } from '../src/api/pages';
import { createBaseUrl } from '../src/util/api';

/**
 * Portfolio page.
 */
const Portfolio = ({ pageData, baseUrl }) => (
  <Layout {...pageData.seo} baseUrl={baseUrl}>
    <Me {...pageData.me} />
    <Projects projects={pageData.projects} />
  </Layout>
);

Portfolio.propTypes = {
  pageData: PropTypes.shape({
    me: PropTypes.shape({}),
    seo: PropTypes.shape({}),
    projects: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  baseUrl: PropTypes.string.isRequired,
};

Portfolio.defaultProps = {
  pageData: {
    projects: [],
  },
};

Portfolio.getInitialProps = async ({ req }) => {
  const baseUrl = createBaseUrl(req);
  const pageData = await loadPortfolio(baseUrl);
  return {
    pageData,
    baseUrl,
  };
};

export default Portfolio;
