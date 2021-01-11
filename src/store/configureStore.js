import { createStore, combineReducers } from 'redux';
import tvShowsReducer from '../reducers/tvShows';

const store = createStore(
  combineReducers({
    tvShows: tvShowsReducer,
  }),
);

export default store;
