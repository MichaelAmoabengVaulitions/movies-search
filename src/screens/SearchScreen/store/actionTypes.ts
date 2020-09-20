import ErrorPayload from '../../../types/ErrorPayload'
import { Movie } from '../../../types/Movie'

export const FETCH_MOVIES_IN_PROGRESSS = 'FETCH_MOVIES_IN_PROGRESSS'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR'

export interface FetchMoviesInProgress {
  type: typeof FETCH_MOVIES_IN_PROGRESSS
}

export interface FetchMoviesSuccess {
  type: typeof FETCH_MOVIES_SUCCESS
  payload: Movie[]
}

export interface FetchMoviesError {
  type: typeof FETCH_MOVIES_ERROR
  payload: ErrorPayload
}

export type FetchMoviesType = FetchMoviesInProgress | FetchMoviesSuccess | FetchMoviesError

export interface MoviesState {
  fetchMoviesInProgress: boolean
  fetchMoviesSuccess: Movie[] | undefined
  fetchMoviesErrorMessage: string | undefined
}
