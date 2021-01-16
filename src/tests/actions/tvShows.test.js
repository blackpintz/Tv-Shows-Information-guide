import addTvShowData from '../../actions/tvShows';

test('should set up add tv show data action object', () => {
  const action = addTvShowData(['Lori', 34]);
  expect(action).toEqual({
    type: 'ADD_TVSHOW_DATA',
    data: ['Lori', 34],
  });
});
