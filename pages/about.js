import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../src/components/Layout';
import AboutMe from '../src/components/AboutMe';
import Timeline from '../src/components/Timeline';
import { createBaseUrl } from '../src/util/api';
import { loadAbout } from '../src/api/pages';

/**
 * About page.
 */
const About = ({ pageData, baseUrl }) => (
  <Layout {...pageData.seo} baseUrl={baseUrl}>
    <AboutMe {...pageData.aboutMe} />
    <Timeline experience={pageData.experience} />
  </Layout>
);

About.propTypes = {
  pageData: PropTypes.shape({
    seo: PropTypes.shape({}),
    aboutMe: PropTypes.shape({}),
    experience: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  baseUrl: PropTypes.string.isRequired,
};

About.defaultProps = {
  pageData: {
    experience: [],
  },
};

About.getInitialProps = async ({ req }) => {
  const baseUrl = createBaseUrl(req);
  const pageData = await loadAbout(baseUrl);
  return {
    pageData,
    baseUrl,
  };
};

export default About;
