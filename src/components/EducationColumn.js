import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component holding one column of "education" information
 */
const EducationColumn = ({ education }) => (
  <ol className="education-list col-lg-6">
    {education.map(step => (
      <li key={step.time} className="education-step-row">
        <span className="education-step-count">{'0' + step.count}</span>
        <span className="education-step-description">
          <span className="education-step-title">
            {step.title} - {step.institution}
          </span>
          <span className="education-step-time">{step.time}</span>
        </span>
      </li>
    ))}
  </ol>
);

EducationColumn.propTypes = {
  education: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      institution: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ),
};

EducationColumn.defaultProp = {
  education: [],
};

export default EducationColumn;
