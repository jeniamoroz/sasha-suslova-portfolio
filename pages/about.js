import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../src/components/Layout';
import AboutMe from '../src/components/AboutMe';
import Timeline from '../src/components/Timeline';
import { createBaseUrl } from '../src/util/api';
import { loadAbout } from '../src/api/pages';
import Languages from '../src/components/Languages';
import Library from '../src/components/Library';
import Education from '../src/components/Education';

/**
 * About page.
 */
const About = ({ pageData, baseUrl }) => (
  <Layout {...pageData.seo} baseUrl={baseUrl}>
    <AboutMe {...pageData.aboutMe} />
    <Timeline experience={pageData.experience} />
    <Languages languages={pageData.languages} />
    <Education education={pageData.education} />
    <Library library={pageData.library} />
  </Layout>
);

About.propTypes = {
  pageData: PropTypes.shape({
    seo: PropTypes.shape({}),
    aboutMe: PropTypes.shape({}),
    experience: PropTypes.arrayOf(),
    languages: PropTypes.arrayOf(),
    education: PropTypes.arrayOf(),
    library: PropTypes.arrayOf(),
  }),
  baseUrl: PropTypes.string.isRequired,
};

About.defaultProps = {
  pageData: {
    experience: [],
    languages: [],
    education: [],
    library: [],
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
