import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component holding "languages" information
 */
const Languages = ({ languages }) => (
  <div className="row no-gutters">
    <div className="col">
      <h1 className="languages-title">Languages</h1>
      <div className="row">
        <div className="languages-list-col">
          <ol className="languages-list">
            {languages.map(language => (
              <li key={language.title} className="language-row">
                {language.title} - {language.level}
              </li>
            ))}
          </ol>
        </div>
        <div className="languages-picture-col">
          <img
            className="languages-picture-background"
            src="/static/language.svg"
            alt="Globe and Symbols"
          />
          <img className="languages-picture-hero" src="/static/hero_1.svg" alt="Hero" />
        </div>
      </div>
    </div>
  </div>
);

Languages.propTypes = {
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      level: PropTypes.string.isRequired,
    }),
  ),
};

Languages.defaultProp = {
  languages: [],
};

export default Languages;
