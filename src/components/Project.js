import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from './Link';

/**
 * Project component. Holds information about project, picture and reference.
 * Prop inverseOrder will change order in what columns of description and picture are displayed.
 * By default description - first. It doesn't affected modile screens though.
 */
const Project = ({ inverseOrder, title, description, releaseDate, moreUrl, pictureUrl }) => {
  const pictureColumnClassName = classnames('project-picture-column', {
    'order-md-2': inverseOrder,
  });
  const descriptionColumnClassName = classnames('project-description-column', {
    'order-md-1': inverseOrder,
  });
  const pictureWrapperClassName = classnames('project-picture-wrapper', {
    inverse: inverseOrder,
  });
  return (
    <div className="row">
      <div className={pictureColumnClassName}>
        <div className={pictureWrapperClassName}>
          <img className="project-picture" src={pictureUrl} alt={title} />
        </div>
      </div>
      <div className={descriptionColumnClassName}>
        <h2>{title}</h2>
        <p>
          {description}
          <br />
          {releaseDate}
        </p>
        <Link className="btn btn-primary" href={moreUrl}>
          More
        </Link>
      </div>
    </div>
  );
};

Project.propTypes = {
  inverseOrder: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  moreUrl: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
};

Project.defaultProps = {
  inverseOrder: false,
};

export default Project;
