export const MOVIE_START = 'MOVI_START';
export const MOVIE_END = 'MOVI_END';
export const MOVIE_FAIL = 'MOVI_FAIL';
export const MOVIE_SUCCESS = 'MOVI_SUCCESS';

let initialState = {
  movies: [],
  searchmovies: [],
  loading: false,
  error: null,
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case MOVIE_START: {
      return {...state, loading: true, error: null};
    }

    case MOVIE_END: {
      return {...state, loading: false};
    }

    case MOVIE_FAIL: {
      return {...state, error: payload, loading: false};
    }

    case MOVIE_SUCCESS: {
      return {
        ...state,
        ...payload,
        error: false,
      };
    }
    default:
      return state;
  }
}
