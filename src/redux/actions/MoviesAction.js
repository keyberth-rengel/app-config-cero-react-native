import {
  MOVIE_START,
  MOVIE_END,
  MOVIE_FAIL,
  MOVIE_SUCCESS,
} from '../reducer/MoviesReducer';
import config from '../../../config';
import axios from '../../../config/HttpClient';

export const getMoviesAction = () => async (dispatch) => {
  dispatch({type: MOVIE_START});

  const resp = await axios.get(`${config.URLCLIENT}/movies`);
  const moviesData = resp.data.movies;

  const createGenres = {};
  moviesData.map((movie) => {
    movie.genres.map((item) => {
      if (createGenres.hasOwnProperty(item)) {
        createGenres[`${item}`].push(movie);
      } else {
        createGenres[`${item}`] = [movie];
      }
    });
  });

  dispatch({
    type: MOVIE_SUCCESS,
    payload: {
      movies: createGenres,
    },
  });

  dispatch({type: MOVIE_END});
};

export const searchMoviesAction = (movieSearch) => async (dispatch) => {
  dispatch({type: MOVIE_START});

  const resp = await axios.get(`${config.URLCLIENT}/movies?q=${movieSearch}`);
  const moviesData = resp.data.movies;

  dispatch({
    type: MOVIE_SUCCESS,
    payload: {
      searchmovies: moviesData,
    },
  });

  dispatch({type: MOVIE_END});
};
