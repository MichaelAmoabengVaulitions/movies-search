import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import DetailScreen from './screens/DetailScreen'
import SearchScreen from './screens/SearchScreen'

const Stack = createStackNavigator()

export function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
