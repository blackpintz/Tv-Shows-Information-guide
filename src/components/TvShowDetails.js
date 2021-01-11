import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import addTvShowData from '../actions/tvShows';

const TvShowDetails = ({ dispatch, tvShow }) => {
  useEffect(async () => {
    const result = await axios.get('http://api.tvmaze.com/schedule?country=CN&date=2020-12-01');
    const { data } = result;
    if (tvShow.show === 'no value') dispatch(addTvShowData(data));
  }, []);
  return (
    <>
      <h1>{tvShow.show.name}</h1>
    </>
  );
};

const mapStateToProps = ({ tvShows }, props) => ({
  tvShow: tvShows.find(show => show.id.toString() === props.id),
});

TvShowDetails.propTypes = {
  tvShow: propTypes.objectOf(propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.object,
  ])),
  dispatch: propTypes.func.isRequired,
};

TvShowDetails.defaultProps = {
  tvShow: { show: 'no value' },
};

export default connect(mapStateToProps)(TvShowDetails);
