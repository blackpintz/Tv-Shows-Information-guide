import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';
import TvShowListItem from '../components/TvShowListItem';
import addTvShowData from '../actions/tvShows';
import ConnectTvShowFilter from './TvShowFilter';
import filteredtvShows from '../selectors/filtertvShows';

const TvShowList = ({ onFetch, tvShows }) => {
  useEffect(async () => {
    const result = await axios.get('https://api.tvmaze.com/schedule?country=US&date=2020-12-01');
    const { data } = result;
    onFetch(data);
  }, []);
  return (
    <>
      <Container>
        <h1>TV Information Guide.</h1>
        <ConnectTvShowFilter />
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

const mapDispatchToProps = dispatch => ({
  onFetch: data => dispatch(addTvShowData(data)),
});

TvShowList.propTypes = {
  onFetch: propTypes.func.isRequired,
  tvShows: propTypes.arrayOf(propTypes.object),
};

TvShowList.defaultProps = {
  tvShows: 'no value',
};

const connectTvShowList = connect(mapStateToProps, mapDispatchToProps)(TvShowList);

export { connectTvShowList as default, TvShowList };
