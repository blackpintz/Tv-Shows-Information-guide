import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import tvShowsReducer from '../reducers/tvShows';
import filterReducer from '../reducers/filter';

const store = createStore(
  combineReducers({
    tvShows: tvShowsReducer,
    filter: filterReducer,
  }),
  applyMiddleware(thunk),
);

export default store;
