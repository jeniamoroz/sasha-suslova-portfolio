import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component holding "about me" information
 */
const AboutMe = ({ title, subtitle, description }) => (
  <div className="row">
    <div className="about-me-col">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{description}</p>
    </div>
  </div>
);

AboutMe.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AboutMe;
