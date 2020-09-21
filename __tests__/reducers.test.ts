import FetchMoviesReducer, { initialState } from '../src/screens/SearchScreen/store/reducer'
import * as actionTypes from '../src/screens/SearchScreen/store/actionTypes'

describe('fetch movies  reducer', () => {
  it('should return the initial state', () => {
    expect(FetchMoviesReducer(undefined, {} as any)).toEqual([initialState])
  })
})
