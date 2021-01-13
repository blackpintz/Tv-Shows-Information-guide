import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import TvShowListItem from '../../components/TvShowListItem';
import tvShows from '../fixtures/tvShows';

Enzyme.configure({ adapter: new Adapter() });

test('should render TvShowListItem component with the list of tvShows', () => {
  const wrapper = shallow(<TvShowListItem show={tvShows[0]} />);
  expect(wrapper).toMatchSnapshot();
});
