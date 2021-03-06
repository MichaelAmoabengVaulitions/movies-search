import React, { FC, useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, Keyboard, Text, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { StackNavigationProp } from '@react-navigation/stack'

import Card from '../../components/Card'
import { styles } from './styles'
import { BLACK, GRAY } from '../../theme/colors'
import AppState from '../../types/AppState'
import { NO_MOVIES_MESSAGE } from '../../utils/constants'
import { fetchMovies } from './store/actions'
import { RootStackParamList } from '../../types/Navigation'

type SearchScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Search'>
interface SearchScreenProps {
  navigation: SearchScreenNavigationProp
}

const SearchScreen: FC<SearchScreenProps> = ({ navigation: { navigate } }) => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const serchTermValid = setSearchTerm.length !== 0
  const movies = useSelector(
    ({ moviesState }: AppState) => (moviesState && moviesState.fetchMoviesSuccess) || [],
  )

  const fetchingMovies = useSelector(
    ({ moviesState }: AppState) => (moviesState && moviesState.fetchMoviesInProgress) || false,
  )

  const searchMovie = useCallback(() => {
    dispatch(fetchMovies(searchTerm))
  }, [searchTerm])

  const handleOnSubmitEditing = () => {
    if (serchTermValid) {
      searchMovie()
    }
    Keyboard.dismiss()
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.inputContainer}>
        <Ionicons name="ios-search" size={18} color={GRAY} />
        <TextInput
          placeholder={'Search movies'}
          value={searchTerm}
          onChangeText={setSearchTerm}
          returnKeyType={'done'}
          onSubmitEditing={handleOnSubmitEditing}
          style={styles.inputField}
        />
      </View>
      {movies.length ? (
        <FlatList
          data={movies}
          renderItem={(itemData) => (
            <Card
              title={itemData.item.Title}
              imageUri={itemData.item.Poster}
              onPress={() => navigate('Detail', { movieId: itemData.item.imdbID })}
            />
          )}
          keyExtractor={(item) => item.imdbID}
        />
      ) : (
        <Text style={styles.message}>{NO_MOVIES_MESSAGE}</Text>
      )}

      {fetchingMovies && <ActivityIndicator size={'large'} color={BLACK} />}
    </View>
  )
}

export default SearchScreen
