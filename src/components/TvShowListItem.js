import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const TvShowListItem = ({ show }) => (
  <>
    <h4>{show.show.name}</h4>
    <Link to={`/show/${show.id}`}>
      <button type="button">See more about TV show</button>
    </Link>
  </>
);

TvShowListItem.propTypes = {
  show: propTypes.objectOf(propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.array,
    propTypes.object,
  ])),
};

TvShowListItem.defaultProps = {
  show: 'no value',
};

export default TvShowListItem;
