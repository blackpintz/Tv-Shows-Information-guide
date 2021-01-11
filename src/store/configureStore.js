import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tvShowsReducer from '../reducers/tvShows';

const store = createStore(
  combineReducers({
    tvShows: tvShowsReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
