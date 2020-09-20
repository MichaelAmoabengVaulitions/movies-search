import React, { FC } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

const DetailScreen: FC = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Detail screen</Text>
    </View>
  )
}

export default DetailScreen