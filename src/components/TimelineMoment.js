import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TimelineMoment = ({ title, company, time, description, inverse }) => (
  <div className={classnames('timeline-moment', { inverse })}>
    <h3>{company ? `${title} - ${company}` : title}</h3>
    <p>{time}</p>
    <p>{description}</p>
  </div>
);

TimelineMoment.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  inverse: PropTypes.bool.isRequired,
};

TimelineMoment.defaultProps = {
  inverse: false,
};

export default TimelineMoment;
