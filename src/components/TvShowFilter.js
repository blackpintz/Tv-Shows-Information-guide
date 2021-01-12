import React from 'react';
import propTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import showGenres from '../constants';
import changeFilter from '../actions/filter';

const TvShowFilter = ({ dispatch }) => (
  <Select
    options={showGenres}
    onChange={val => dispatch(changeFilter(val.label))}
    placeholder="Choose Genre"
  />
);

const mapStateToProps = ({ filter }) => ({
  filter,
});

TvShowFilter.propTypes = {
  dispatch: propTypes.func.isRequired,
};

export default connect(mapStateToProps)(TvShowFilter);
