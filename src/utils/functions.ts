import { ImageURISource } from 'react-native'

import firstCardImage from '../../assets/images/card1.png'
import secondCardImage from '../../assets/images/card2.png'
import thirdCardImage from '../../assets/images/card3.png'

export const getImageBackgroundByTitleLength = (title: string): ImageURISource => {
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