import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component holding "library" information
 */
const Library = ({ library }) => (
  <div className="row no-gutters">
    <div className="col">
      <h1 className="library-title">My library - top 3</h1>
      <div className="row">
        <div className="library-list-col">
          <ol className="library-list order-md-last">
            {library.map(book => (
              <li key={book.title} className="book-row">
                {book.title} - {book.authors}
              </li>
            ))}
          </ol>
        </div>
        <div className="library-picture-col order-md-first">
          <img className="library-picture-background" src="/static/library.svg" alt="Knowledge" />
          <img className="library-picture-hero" src="/static/hero_2.svg" alt="Hero with a book" />
        </div>
      </div>
    </div>
  </div>
);

Library.propTypes = {
  library: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.string.isRequired,
    }),
  ),
};

Library.defaultProp = {
  library: [],
};

export default Library;
