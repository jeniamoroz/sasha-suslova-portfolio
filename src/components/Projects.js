import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

const Projects = ({ projects }) => (
  <div className="projects-row">
    <h1 className="projects-title">Projects</h1>
    {projects.map(item => (
      <Project key={item.title} {...item} />
    ))}
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Projects.defaultProps = {
  projects: [],
};

export default Projects;
