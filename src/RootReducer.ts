import { applyMiddleware, combineReducers, compose, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import FetchMoviesReducer from './screens/SearchScreen/store/reducer'
import AppState from './types/AppState'

// NOTE: This is not necessary for a small app but beneficial for a large app

const rootReducer = combineReducers({
  moviesState: FetchMoviesReducer
})

export default function configureStore(initialState?: AppState): Store<AppState> {
  const middleware = [thunk]
  const enhancer = compose(applyMiddleware(...middleware))
  return createStore(rootReducer, initialState, enhancer)
}