import React from 'react';
import propTypes from 'prop-types';
import Select from 'react-select';
import { connect } from 'react-redux';
import showGenres from '../constants';
import changeFilter from '../actions/filter';

export const TvShowFilter = ({ onFilter }) => (
  <Select
    options={showGenres}
    onChange={val => onFilter(val.label)}
    placeholder="Choose Genre"
    className="mb-3"
  />
);

const mapStateToProps = ({ filter }) => ({
  filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: val => dispatch(changeFilter(val)),
});

TvShowFilter.propTypes = {
  onFilter: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowFilter);
