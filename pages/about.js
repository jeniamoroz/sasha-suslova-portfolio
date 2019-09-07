import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../src/components/Layout';
import AboutMe from '../src/components/AboutMe';
import Timeline from '../src/components/Timeline';
import { createBaseUrl } from '../src/util/api';
import { loadExperience } from '../src/api/global';

/**
 * About page.
 */
const About = ({ experience }) => (
  <Layout
    title="Sasha Suslova - UXI Designer"
    description="Designer with a passion for the problem-solving approach and deep empathy for the user. I have over 3 years experience of designing IoT products, web design, analytics products and launching startups."
    keywords="designer"
  >
    <AboutMe />
    <Timeline experience={experience} />
  </Layout>
);

About.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})),
};

About.defaultProps = {
  experience: [],
};

About.getInitialProps = async ({ req }) => {
  const baseUrl = createBaseUrl(req);
  const experience = await loadExperience(baseUrl);
  return {
    experience,
  };
};

export default About;
