import React from 'react';
import PropTypes from 'prop-types';
import EducationColumn from './EducationColumn';

/**
 * Component holding "education" information
 */
const Education = ({ education }) => {
  const educationWithCount = education.map((step, i) => ({
    ...step,
    count: education.length - i,
  }));
  const biggerHalf = Math.ceil(education.length / 2);
  const firstColumn = educationWithCount.slice(0, biggerHalf);
  const secondColumn = educationWithCount.slice(biggerHalf, education.length);
  return (
    <div className="row">
      <div className="col-12">
        <h1 className="education-title">Education</h1>
        <div className="row justify-content-md-center">
          <div className="col-md-auto col-lg-12">
            <div className="row">
              <EducationColumn education={firstColumn} />
              <EducationColumn education={secondColumn} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
