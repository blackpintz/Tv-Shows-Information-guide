import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
import App from '../../App';

Enzyme.configure({ adapter: new Adapter() });

test('renders App correctly', () => {
  const wrapper = shallow(<App />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
