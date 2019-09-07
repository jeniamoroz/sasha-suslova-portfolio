import React from 'react';
import PropTypes from 'prop-types';
import TimelineMoment from './TimelineMoment';

/**
 * Check if given number is even, means can be divided as whole by 2.
 */
const isEven = i => i % 2 === 0;

const Timeline = ({ experience }) => (
  <div className="row">
    <div className="col">
      <h1 className="timeline-title">Experience</h1>
      <div className="row no-gutters timeline">
        {experience.map((item, i) => (
          <TimelineMoment key={item.time} {...item} inverse={isEven(i)} />
        ))}
      </div>
    </div>
  </div>
);

Timeline.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Timeline;
