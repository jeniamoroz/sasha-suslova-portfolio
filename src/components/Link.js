import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ className, children, ...props }) => (
  <NextLink {...props}>
    <a className={className}>{children}</a>
  </NextLink>
);

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Link;
