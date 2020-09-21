import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DetailScreen from './screens/DetailScreen'
import SearchScreen from './screens/SearchScreen'
import { RootStackParamList } from './types/Navigation'

const Stack = createStackNavigator<RootStackParamList>()

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
