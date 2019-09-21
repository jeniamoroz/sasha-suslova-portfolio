import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component holding "education" information
 */
const Education = ({ education }) => (
  <div className="row justify-content-md-center">
    <div className="col-md-auto">
      <h1>Education</h1>
      <ol className="education-list">
        {education.map((step, i) => (
          <li key={step.time} className="education-step-row">
            <span className="education-step-count">{'0' + (education.length - i)}</span>
            <span className="education-step-description">
              <span className="education-step-title">
                {step.title} - {step.institution}
              </span>
              <span className="education-step-time">{step.time}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Education.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
    }),
  ),
};

Education.defaultProp = {
  education: [],
};

export default Education;
