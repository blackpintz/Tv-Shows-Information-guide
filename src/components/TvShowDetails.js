import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { Container, Button } from 'react-bootstrap';
import addTvShowData from '../actions/tvShows';

export const TvShowDetails = ({ onFetch, tvShow, routeProps }) => {
  const { show } = tvShow;
  const { history } = routeProps;
  useEffect(async () => {
    const result = await axios.get('https://api.tvmaze.com/schedule?country=US&date=2020-12-01');
    const { data } = result;
    if (show === 'no value') onFetch(data);
  }, []);
  return (
    <>
      <Container className="d-flex flex-column align-items-center">
        <h1>{show.name}</h1>
        <div className="d-flex">
          <p>{`${show.runtime} mins`}</p>
          {show.genres.length !== 0 ? (
            <div className="d-flex ml-2">
              |
              {show.genres.map(genre => <p key={genre} className="px-1">{`${genre},`}</p>)}
              |
            </div>
          ) : (
            <span className="ml-2">|</span>
          )}
          <div className="d-flex">
            <p className="px-2">{show.type}</p>
            |
          </div>
        </div>
        <div>
          <img src={show.image.original} className="detail-img" alt="show-img" />
          <p className="mt-2 text-left">{`The show has ${tvShow.number} episodes. Watch it every ${show.schedule.days[0]}, at ${show.schedule.time}hours.`}</p>
        </div>
        <Button className="mb-3" onClick={() => history.goBack()}>Go to Homepage</Button>
      </Container>
    </>
  );
};

const mapStateToProps = ({ tvShows }, props) => ({
  tvShow: tvShows.find(show => show.id.toString() === props.id),
});

const mapDispatchToProps = dispatch => ({
  onFetch: data => dispatch(addTvShowData(data)),
});

TvShowDetails.propTypes = {
  tvShow: propTypes.objectOf(propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
    propTypes.object,
  ])),
  routeProps: propTypes.objectOf(propTypes.object),
  onFetch: propTypes.func.isRequired,
  history: propTypes.objectOf(propTypes.func.isRequired),
};

TvShowDetails.defaultProps = {
  tvShow: { show: 'no value' },
  routeProps: { history: 'no value' },
  history: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TvShowDetails);
