import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ className, children }) => (
  <a className={className} href="#">
    {children}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
