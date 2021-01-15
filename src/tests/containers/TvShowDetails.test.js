import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TvShowDetails } from '../../containers/TvShowDetails';
import tvShows from '../fixtures/tvShows';

Enzyme.configure({ adapter: new Adapter() });

test('should render TvShowList component with the list of tvShows', () => {
  const onFetch = jest.fn();
  const rProps = {
    history: {
      goBack: jest.fn(),
    },
  };
  const wrap = shallow(<TvShowDetails onFetch={onFetch} tvShow={tvShows[0]} routeProps={rProps} />);
  expect(wrap).toMatchSnapshot();
});
