import React from 'react';

/**
 * Me block.
 */
const Me = () => (
  <div className="row">
    <div className="me-col-wrapper">
      <div className="me-picture-wrapper">
        <img className="me-picture" src="/static/me.jpg" alt="Me, Sasha Suslova" />
      </div>
      <div className="me-description">
        <p>
          Hi, <br /> I&apos;m Sasha a user experience designer. <br /> Here you will find a brief
          summary of some of my latest projects.
        </p>
      </div>
    </div>
  </div>
);

export default Me;
