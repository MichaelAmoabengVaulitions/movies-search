import React, { FC } from 'react'
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  ImageURISource,
  ViewStyle
} from 'react-native'

import firstCardImage from '../../../assets/images/card1.png'
import secondCardImage from '../../../assets/images/card2.png'
import thirdCardImage from '../../../assets/images/card3.png'
import { NO_POSTER_MESSAGE } from '../../utils/constants'
import { styles } from './styles'

interface CardProps {
  imageUri: string,
  title: string,
  style?: ViewStyle
}

const getImageBackgroundByTitleLength = (title: string): ImageURISource => {
  switch (true) {
    case title.length >= 16:
      return firstCardImage
    case title.length >= 10:
      return secondCardImage
    case title.length >= 20:
      return thirdCardImage
    default:
      return firstCardImage
  }
}
const Card: FC<CardProps> = ({ title, imageUri, style }) => {

  return (
    <TouchableWithoutFeedback>
      <ImageBackground
        style={{ ...styles.mainContainer, ...style }}
        source={getImageBackgroundByTitleLength(title)}
        blurRadius={5}
        resizeMode={'cover'}>
        {!imageUri ?
          <Image
            source={{ uri: imageUri }}
            resizeMode={'contain'}
            style={styles.poster}
          /> :
          <Text style={styles.fallback}>{NO_POSTER_MESSAGE}</Text>}

        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}

export default Card