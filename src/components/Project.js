import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ direction, title, description, releaseDate, moreUrl, pictureUrl }) => {
  const descriptionBlock = (
    <div className="project-column">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{releaseDate}</p>
      <button to={moreUrl}>More</button>
    </div>
  );
  let descriptionLeft = null;
  let descriptionRight = null;
  switch (direction) {
    case 'left':
      descriptionLeft = descriptionBlock;
      break;
    case 'right':
      descriptionRight = descriptionBlock;
      break;
    default:
      break;
  }
  return (
    <div className="project-row">
      {descriptionLeft}
      <div className="project-column">
        <div className="project-picture-wrapper">
          <img className="project-picture" src={pictureUrl} alt={title} />
        </div>
      </div>
      {descriptionRight}
    </div>
  );
};

Project.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  moreUrl: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
};

export default Project;
