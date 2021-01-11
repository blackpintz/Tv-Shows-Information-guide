import React from 'react';
import { Link } from 'react-router-dom';

const TvShowListItem = () => (
  <>
    <h4>Each item of the tvshow list displayed with few details.</h4>
    <Link to="/show/1">
      <button type="button">See more about TV show</button>
    </Link>
  </>
);

export default TvShowListItem;
