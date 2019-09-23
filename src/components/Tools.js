import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component holding "tools" information
 */
const Tools = ({ tools }) => (
  <div className="row no-gutters">
    <div className="col">
      <h1 className="tools-title">Tools</h1>
      <ol className="tools-list row">
        {tools.map(tool => (
          <li key={tool.title} className="tool-item col">
            <img className="tool-item-image" src={tool.imgUrl} alt={tool.title} />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Tools.propTypes = {
  tools: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    }),
  ),
};

Tools.defaultProp = {
  tools: [],
};

export default Tools;
