import React from 'react';
import axios from 'axios';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TvShowList } from '../../containers/TvShowList';
import tvShows from '../fixtures/tvShows';

Enzyme.configure({ adapter: new Adapter() });

test('should render TvShowList component with the list of tvShows', () => {
  const onFetch = jest.fn();
  const wrapper = shallow(<TvShowList onFetch={onFetch} tvShows={tvShows} />);
  expect(wrapper).toMatchSnapshot();
});

jest.mock('axios');

test('should fetch tv shows', () => {
  const ShowsData = [{
    id: 1,
    number: 29,
    show: {
      id: 11,
      genres: ['Comedy', 'Thriller'],
      image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/105/264401.jpg', original: 'http://static.tvmaze.com/uploads/images/medium_portrait/105/264401.jpg' },
      runtime: 20,
      type: 'scripted',
      schedule: { time: '04:00', days: ['Monday'] },
    },
  },
  {
    id: 2,
    show: {
      id: 21,
      genres: ['Romance'],
      image: { medium: 'http://static.tvmaze.com/uploads/images/medium_portrait/105/264401.jpg' },
      runtime: 30,
    },
  }];

  const response = { data: ShowsData };
  axios.get.mockResolvedValue(response);
  expect(tvShows).toEqual(ShowsData);
});
