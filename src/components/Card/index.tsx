import React, { FC } from 'react'
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  ViewStyle, View
} from 'react-native'

import { NO_POSTER_MESSAGE } from '../../utils/constants'
import { getImageBackgroundByTitleLength } from '../../utils/functions'
import { styles } from './styles'

interface CardProps {
  imageUri: string,
  title: string,
  style?: ViewStyle,
  onPress: () => void
}


const Card: FC<CardProps> = ({ title, imageUri, style, onPress }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <ImageBackground
        style={{ ...styles.mainContainer, ...style }}
        source={getImageBackgroundByTitleLength(title)}
        blurRadius={5}
        resizeMode={'cover'}>
        {imageUri !== 'N/A' ?
          <View style={styles.posterContainer}>
            <Image
              source={{ uri: imageUri }}

              style={styles.poster}
            />
          </View> :
          <Text style={styles.fallback}>{NO_POSTER_MESSAGE}</Text>}
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}

export default Card