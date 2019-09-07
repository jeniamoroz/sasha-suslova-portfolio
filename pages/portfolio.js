import React from 'react';
import PropTypes from 'prop-types';
import Me from '../src/components/Me';
import Layout from '../src/components/Layout';
import Projects from '../src/components/Projects';
import { loadProjects } from '../src/api/global';
import { createBaseUrl } from '../src/util/api';

/**
 * Portfolio page.
 */
const Portfolio = ({ projects }) => (
  <Layout
    title="Design Portfolio - Sasha Suslova"
    description="Hi, I'm Sasha a user experience designer. Here you will find a brief summary of some of my latest projects."
    keywords="designer"
  >
    <Me />
    <Projects projects={projects} />
  </Layout>
);

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})),
};

Portfolio.defaultProps = {
  projects: [],
};

Portfolio.getInitialProps = async ({ req }) => {
  const baseUrl = createBaseUrl(req);
  const projects = await loadProjects(baseUrl);
  return {
    projects,
  };
};

export default Portfolio;
