import FetchMoviesReducer, { initialState } from '../src/screens/SearchScreen/store/reducer'
import * as actionTypes from '../src/screens/SearchScreen/store/actionTypes'

import { Movie } from '../src/types/Movie'
import { deepCopy } from '../src/utils/deepCopy'

describe('fetch movies  reducer', () => {
  it('should return the initial state', () => {
    const state = FetchMoviesReducer(undefined, {} as any)
    expect(state).toEqual(initialState)
  })
  it('fetches movies on success action', () => {
    const state = FetchMoviesReducer(stateWithMovieState, fetchMoviesSuccess)
    expect(state).toEqual(stateAfterSuccess)
  })

  it('handles on error response', () => {
    const state = FetchMoviesReducer(stateWithMovieState, fetchMoviesError)
    expect(state).toEqual(stateAfterError)
  })

  it('Handles in progress action', () => {
    const state = FetchMoviesReducer(stateBeforeInProgress, fetchMoviesInProgress)
    expect(state).toEqual(stateAfterInProgress)
  })
})

export const errorMessage = 'errorMessage'

export const mockMovie: Movie = {
  imdbID: 'test',
  Title: 'test',
  Type: 'test',
  Year: '2020',
  Poster: 'test poster',
}
export const mockMovies = [mockMovie, mockMovie, mockMovie, mockMovie]

const fetchMoviesSuccess: actionTypes.FetchMoviesType = {
  type: actionTypes.FETCH_MOVIES_SUCCESS,
  payload: mockMovies,
}

const fetchMoviesError: actionTypes.FetchMoviesType = {
  type: actionTypes.FETCH_MOVIES_ERROR,
  payload: { errorMessage },
}

const fetchMoviesInProgress: actionTypes.FetchMoviesType = {
  type: actionTypes.FETCH_MOVIES_IN_PROGRESSS,
}

const stateWithMovieState: actionTypes.MoviesState = deepCopy(initialState)
stateWithMovieState.fetchMoviesErrorMessage = errorMessage
stateWithMovieState.fetchMoviesInProgress = true

const stateAfterSuccess: actionTypes.MoviesState = deepCopy(initialState)
stateAfterSuccess.fetchMoviesSuccess = mockMovies

const stateBeforeError: actionTypes.MoviesState = deepCopy(initialState)
stateBeforeError.fetchMoviesSuccess = mockMovies
stateBeforeError.fetchMoviesInProgress = true

const stateAfterError = deepCopy(initialState)
stateAfterError.fetchMoviesErrorMessage = errorMessage

const stateBeforeInProgress: actionTypes.MoviesState = deepCopy(initialState)
stateBeforeInProgress.fetchMoviesSuccess = mockMovies
stateBeforeInProgress.fetchMoviesErrorMessage = undefined
stateBeforeInProgress.fetchMoviesInProgress = false

const stateAfterInProgress: actionTypes.MoviesState = deepCopy(initialState)
stateAfterInProgress.fetchMoviesSuccess = mockMovies
stateAfterInProgress.fetchMoviesErrorMessage = undefined
stateAfterInProgress.fetchMoviesInProgress = true
