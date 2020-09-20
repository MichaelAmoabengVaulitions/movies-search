import React, { FC, useCallback, useState } from 'react'
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  View
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import { styles } from './styles'
import { BLACK } from '../../theme/colors'
import AppState from '../../types/AppState'
import { NO_MOVIES_MESSAGE } from '../../utils/constants'
import { fetchMovies } from './store/actions'

const SearchScreen: FC = () => {
  const dispatch = useDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const movies = useSelector(
    ({ moviesState }: AppState) =>
      moviesState && moviesState.fetchMoviesSuccess || []
  )

  const fetchingMovies = useSelector(
    ({ moviesState }: AppState) =>
      moviesState && moviesState.fetchMoviesInProgress || false
  )

  const searchMovie = useCallback(() => {
    dispatch(fetchMovies(searchTerm))
  }, [searchTerm])

  const handleOnSubmitEditing = () => {
    searchMovie()
    Keyboard.dismiss()
  }
  return (
    <View style={styles.mainView}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={'Search movies'}
          value={searchTerm}
          onChangeText={setSearchTerm}
          returnKeyType={'done'}
          onSubmitEditing={handleOnSubmitEditing}
        />
      </View>
      {
        movies.length ?
          <FlatList
            data={movies}
            renderItem={itemData =>
              <Card
                title={itemData.item.Title}
                imageUri={itemData.item.Poster}
                onPress={() => ''}
              />
            }
            keyExtractor={(item) => item.imdbID}
          /> :
          <Text style={styles.message}>{NO_MOVIES_MESSAGE}</Text>
      }

      {fetchingMovies && <ActivityIndicator size={'large'} color={BLACK} />}
    </View>
  )
}

export default SearchScreen