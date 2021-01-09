import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TvData = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await axios.get('http://api.tvmaze.com/schedule?country=CN&date=2020-12-01');
    setData(result.data);
  }, []);
  return (
    <>
      <h1>Tv data goes here!</h1>
      <h4>{data.length}</h4>
    </>
  );
};

export default TvData;
