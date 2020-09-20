import React from 'react';
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';

import SearchScreen from './src/screens/SearchScreen'
import configureStore from './src/RootReducer'
import { Store } from 'redux';
import AppState from './src/types/AppState';
import { MainStack } from './src/navigation'

const store: Store<AppState> = configureStore()

export default function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}

