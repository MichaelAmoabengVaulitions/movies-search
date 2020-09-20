import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'

import FetchMoviesReducer from './screens/SearchScreen/store/reducer'
import AppState from './types/AppState'

const rootReducer = combineReducers({
  moviesState: FetchMoviesReducer,
})

export default function configureStore(initialState?: AppState): Store<AppState> {
  const middleware = [thunk]
  const enhancer = compose(applyMiddleware(...middleware))
  return createStore(rootReducer, initialState, enhancer)
}
