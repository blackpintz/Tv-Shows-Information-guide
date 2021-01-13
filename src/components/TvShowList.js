import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import TvShowListItem from './TvShowListItem';
import addTvShowData from '../actions/tvShows';
import TvShowFilter from './TvShowFilter';
import filteredtvShows from '../selectors/filtertvShows';

const TvShowList = ({ dispatch, tvShows }) => {
  useEffect(async () => {
    const result = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2020-12-01');
    const { data } = result;
    dispatch(addTvShowData(data));
  }, []);
  console.log(tvShows);
  return (
    <>
      <Container>
        <h1>TV Information Guide</h1>
        <TvShowFilter />
        <Row>
          {tvShows.map(show => <TvShowListItem key={show.id} show={show} />)}
        </Row>
      </Container>
    </>
  );
};

const mapStateToProps = ({ tvShows, filter }) => ({
  tvShows: filteredtvShows(tvShows, filter),
});

TvShowList.propTypes = {
  dispatch: propTypes.func.isRequired,
  tvShows: propTypes.arrayOf(propTypes.object),
};

TvShowList.defaultProps = {
  tvShows: 'no value',
};

export default connect(mapStateToProps)(TvShowList);
