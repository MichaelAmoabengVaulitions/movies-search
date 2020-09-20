import React, { FC } from 'react'
import { Text, ImageBackground, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import AppState from '../../types/AppState'
import { Movie } from '../../types/Movie'
import { getImageBackgroundByTitleLength } from '../../utils/functions'
import { styles } from './styles'

const DetailScreen: FC = () => {
  const route = useRoute()
  const movies = useSelector(
    ({ moviesState }: AppState) => (moviesState && moviesState.fetchMoviesSuccess) || [],
  )

  const { movieId } = route.params
  const { Title, Type, Poster, Year } = movies.find((movie) => movie.imdbID === movieId) as Movie

  return (
    <ImageBackground style={styles.mainContainer} source={getImageBackgroundByTitleLength(Title)}>
      <Image style={styles.poster} source={{ uri: Poster }} resizeMode={'cover'} />
      <Text style={styles.description}>{Title}</Text>
      <Text style={styles.description}>{Type}</Text>
      <Text style={styles.description}>{Year}</Text>
    </ImageBackground>
  )
}

export default DetailScreen
