import changeFilter from '../../actions/filter';

test('should set up change filter action object', () => {
  const action = changeFilter('comedy');
  expect(action).toEqual({
    type: 'CHANGE_FILTER',
    filter: 'comedy',
  });
});
