import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

const routesMatch = (original, match) => original === match;

const withIsActiveRoute = WrappedComponent => {
  const ActiveRoute = ({ router, href, ...props }) => (
    <WrappedComponent {...props} href={href} isActiveRoute={routesMatch(router.pathname, href)} />
  );

  ActiveRoute.propTypes = {
    href: PropTypes.string.isRequired,
    router: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  WrappedComponent.defaultProps = {
    isActiveRoute: false,
  };

  return withRouter(ActiveRoute);
};

export default withIsActiveRoute;
