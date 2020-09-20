import React, { FC, useEffect } from 'react'
import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import { styles } from './styles'
import { BLACK } from '../../theme/colors'
import AppState from '../../types/AppState'
import { NO_MOVIES_MESSAGE } from '../../utils/constants'
import { fetchMovies } from './store/actions'

const SearchScreen: FC = () => {
  const dispatch = useDispatch()
  const movies = useSelector(
    ({ moviesState }: AppState) =>
      moviesState && moviesState.fetchMoviesSuccess || []
  )

  console.log("SearchScreen:FC -> movies", movies)
  const fetchingMovies = useSelector(
    ({ moviesState }: AppState) =>
      moviesState && moviesState.fetchMoviesInProgress || false
  )
  const testSearchTerm: string = 'w'

  useEffect(() => {
    dispatch(fetchMovies(testSearchTerm))
  }, [testSearchTerm])

  return (
    <View style={styles.mainView}>
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