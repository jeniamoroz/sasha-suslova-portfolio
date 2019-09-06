import React from 'react';
import PropTypes from 'prop-types';

/**
 * Main component that holds variable content of a page.
 */
const Main = ({ children }) => <main className="container">{children}</main>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
