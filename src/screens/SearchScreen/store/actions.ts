import { ThunkAction } from 'redux-thunk'

import AppState from '../../../types/AppState'
import { Movie } from '../../../types/Movie'
import { API_KEY, FETCHING_MOVIES_ERROR_MESSAGE } from '../../../utils/constants'
import {
  FetchMoviesType,
  FETCH_MOVIES_ERROR,
  FETCH_MOVIES_IN_PROGRESSS,
  FETCH_MOVIES_SUCCESS,
} from './actionTypes'

export function fetchMoviesInProgress(): FetchMoviesType {
  return {
    type: FETCH_MOVIES_IN_PROGRESSS,
  }
}

export function fetchMoviesSuccess(response: Movie[]): FetchMoviesType {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: response,
  }
}

export function fetchMoviesError(errorMessage: string): FetchMoviesType {
  return {
    type: FETCH_MOVIES_ERROR,
    payload: { errorMessage },
  }
}

export const fetchMovies = (
  searchParam: string,
): ThunkAction<void, AppState, unknown, FetchMoviesType> => {
  return async (dispatch) => {
    try {
      const Url = `http://www.omdbapi.com/?s=${searchParam}&apikey=${API_KEY}`
      dispatch(fetchMoviesInProgress)
      const response = await fetch(Url)
      const fetchMoviesResponse: Movie[] = await response.json()
      dispatch(fetchMoviesSuccess(fetchMoviesResponse.Search))
    } catch (error) {
      let errorMessage: string
      errorMessage = typeof error === 'string' ? error : FETCHING_MOVIES_ERROR_MESSAGE
      dispatch(fetchMoviesError(errorMessage))
    }
  }
}
