import tvShowsReducer from '../../reducers/tvShows';

test('should set tvShows to data value', () => {
  const data = [{
    id: 1,
    show: {
      id: 11,
      genres: ['Comedy', 'Thriller'],
    },
  },
  {
    id: 2,
    show: {
      id: 21,
      genres: ['Romance'],
    },
  }];

  const action = {
    type: 'ADD_TVSHOW_DATA',
    data,
  };
  const state = tvShowsReducer(undefined, action);
  expect(state).toBe(data);
});
