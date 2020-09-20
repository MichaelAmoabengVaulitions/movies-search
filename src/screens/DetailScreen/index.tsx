import React, { FC } from 'react'
import { Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { Ionicons } from 'expo-vector-icons'

import AppState from '../../types/AppState'
import { Movie } from '../../types/Movie'
import { getImageBackgroundByTitleLength } from '../../utils/functions'
import { styles } from './styles'
import { BLACK } from '../../theme/colors'

// TODO: Add correct type for navigation
interface DetailScreenProps {
  navigation: any
}

const DetailScreen: FC<DetailScreenProps> = ({ navigation }) => {
  const route = useRoute()
  const movies = useSelector(
    ({ moviesState }: AppState) => (moviesState && moviesState.fetchMoviesSuccess) || [],
  )

  // @ts-ignore
  const { movieId } = route.params
  const selectedMovie = movies.find((movie) => movie.imdbID === movieId) as Movie
  const { Title, Type, Poster, Year } = selectedMovie

  return (
    <ImageBackground style={styles.mainContainer} source={getImageBackgroundByTitleLength(Title)}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButtonContainer}>
        <Ionicons name="ios-arrow-round-back" size={36} color={BLACK} />
      </TouchableOpacity>
      <Image style={styles.poster} source={{ uri: Poster }} resizeMode={'cover'} />
      <Text style={styles.description}>{Title}</Text>
      <Text style={styles.description}>{Type}</Text>
      <Text style={styles.description}>{Year}</Text>
    </ImageBackground>
  )
}

export default DetailScreen
