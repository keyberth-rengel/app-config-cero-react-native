import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//reducers
import MoviesReducer from '../reducer/MoviesReducer';

const reducers = combineReducers({
  movies: MoviesReducer,
});

let middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, thunk];
} else {
  middleware = [...middleware, thunk];
}

export const store = createStore(reducers, {}, applyMiddleware(...middleware));
