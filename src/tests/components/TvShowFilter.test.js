import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TvShowFilter } from '../../components/TvShowFilter';

Enzyme.configure({ adapter: new Adapter() });

let onFilter; let
  wrapper;

beforeEach(() => {
  onFilter = jest.fn();
  wrapper = shallow(
    <TvShowFilter
      onFilter={onFilter}
    />,
  );
});

test('should render show list filters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should filter by Comedy', () => {
  const value = 'Comedy';
  wrapper.find('.mb-3').simulate('change', {
    target: { value },
  });
  expect(onFilter).toHaveBeenCalled();
});
