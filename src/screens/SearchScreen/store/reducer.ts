import {
  FetchMoviesType,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_IN_PROGRESSS,
  FETCH_MOVIES_SUCCESS,
  MoviesState,
} from './actionTypes'

export const initialState: MoviesState = {
  fetchMoviesInProgress: false,
  fetchMoviesSuccess: undefined,
  fetchMoviesErrorMessage: undefined,
}

export default function FetchMoviesReducer(
  state = initialState,
  action: FetchMoviesType,
): MoviesState {
  switch (action.type) {
    case FETCH_MOVIES_IN_PROGRESSS:
      return { ...state, fetchMoviesInProgress: true }
    case FETCH_MOVIES_ERROR:
      return {
        ...state,
        fetchMoviesInProgress: false,
        fetchMoviesErrorMessage: action.payload.errorMessage,
      }
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        fetchMoviesInProgress: false,
        fetchMoviesSuccess: action.payload,
        fetchMoviesErrorMessage: undefined,
      }
    default:
      return state
  }
}
