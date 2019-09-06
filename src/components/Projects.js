import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project';

/**
 * Check if given number is even, means can be divided as whole by 2.
 */
const isEven = i => i % 2 === 0;

/**
 * Projects component, holding all projects
 */
const Projects = ({ projects }) => (
  <div className="projects-row">
    <div className="projects-column">
      <h1 className="projects-title">Projects</h1>
      {projects.map((item, i) => (
        <Project key={item.title} {...item} inverseOrder={isEven(i)} />
      ))}
    </div>
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
