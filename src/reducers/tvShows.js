const tvShowsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TVSHOW_DATA':
      return action.data;
    default:
      return state;
  }
};

export default tvShowsReducer;
