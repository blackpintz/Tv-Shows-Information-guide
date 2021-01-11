import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TvShowListItem from './TvShowListItem';

const TvShowList = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios.get('http://api.tvmaze.com/schedule?country=CN&date=2020-12-01');
    setData(result.data);
  }, []);
  return (
    <>
      <h1>Tv data items goes here!</h1>
      {data.map(show => <TvShowListItem key={show.id} show={show.show} />)}
    </>
  );
};

export default TvShowList;
