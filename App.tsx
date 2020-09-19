import React from 'react';
import { Provider } from 'react-redux'

import SearchScreen from './src/screens/SearchScreen'
import configureStore from './src/RootReducer'
import { Store } from 'redux';
import AppState from './src/types/AppState';

const store: Store<AppState> = configureStore()

export default function App() {

  return (
    <Provider store={store}>
      <SearchScreen />
    </Provider>
  )
}

