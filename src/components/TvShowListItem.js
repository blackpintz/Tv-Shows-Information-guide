import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const TvShowListItem = ({ show }) => (
  <>
    <Col lg={4} className="mb-3">
      <img src={show.show.image.medium} className="img" alt="show-img" />
      <h5>{show.show.name}</h5>
      <Link to={`/show/${show.id}`}>
        See more
      </Link>
    </Col>
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
