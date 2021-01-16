import filteredtvShows from '../../selectors/filtertvShows';

const tvShows = [{
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
test('should filter by genre', () => {
  const filter = 'Romance';
  const result = filteredtvShows(tvShows, filter);
  expect(result).toEqual([{
    id: 2,
    show: {
      id: 21,
      genres: ['Romance'],
    },
  }]);
});
