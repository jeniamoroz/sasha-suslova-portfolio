import React from 'react';
import PropTypes from 'prop-types';

/**
 * Me block.
 */
const Me = ({ pictureUrl, pictureTitle, description }) => (
  <div className="row">
    <div className="me-col-wrapper">
      <div className="me-picture-wrapper">
        <img className="me-picture" src={pictureUrl} alt={pictureTitle} />
      </div>
      <div className="me-description">
        <p>{description}</p>
      </div>
    </div>
  </div>
);

Me.propTypes = {
  pictureUrl: PropTypes.string.isRequired,
  pictureTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Me;
