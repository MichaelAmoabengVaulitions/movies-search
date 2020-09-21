import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import expect from 'expect'
import fetchMock from 'fetch-mock'

import * as actions from '../src/screens/SearchScreen/store/actions'
import * as actionTypes from '../src/screens/SearchScreen/store/actionTypes'
import { Movie } from '../src/types/Movie'
import { API_KEY } from '../src/utils/constants'
import { errorMessage, mockMovies } from './reducers.test'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action fetch movies in progress', () => {
    const expectedAction = {
      type: actionTypes.FETCH_MOVIES_IN_PROGRESSS,
    }
    expect(actions.fetchMoviesInProgress()).toEqual(expectedAction)
  })

  it('should create an action fetch movies success', () => {
    const response = [] as Movie[]
    const expectedAction = {
      type: actionTypes.FETCH_MOVIES_SUCCESS,
      payload: response,
    }
    expect(actions.fetchMoviesSuccess(response)).toEqual(expectedAction)
  })

  it('should create an action fetch movies error', () => {
    const expectedAction = {
      type: actionTypes.FETCH_MOVIES_ERROR,
      payload: { errorMessage },
    }
    expect(actions.fetchMoviesError(errorMessage)).toEqual(expectedAction)
  })
})

const testSearchParam = 'Sherlock Holmes'
const Url = `http://www.omdbapi.com/?s=${testSearchParam}&apikey=${API_KEY}`

describe('fetch movies actions', () => {
  afterEach(() => {
    fetchMock.restore()
  })
  it('creates FETCH_MOVIES_SUCCESS when fetching movies  has been done', () => {
    fetchMock.get(Url, {
      response: 200,
    })
    const store = mockStore({})
    const expectedActions = [
      { type: actionTypes.FETCH_MOVIES_IN_PROGRESSS },
      { type: actionTypes.FETCH_MOVIES_ERROR, payload: errorMessage },
      { type: actionTypes.FETCH_MOVIES_SUCCESS, payload: { movies: mockMovies } },
    ]
    return store.dispatch(actions.fetchMovies(testSearchParam) as any).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
