import filterReducer from '../../reducers/filter';

test('should set filter to Comedy', () => {
  const filter = 'Comedy';
  const action = {
    type: 'CHANGE_FILTER',
    filter,
  };
  const state = filterReducer(undefined, action);
  expect(state).toBe(filter);
});
