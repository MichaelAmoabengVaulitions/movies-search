import React, { FC, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import AppState from '../../types/AppState'
import { fetchMovies } from './store/actions'


import { styles } from './styles'

const SearchScreen: FC = () => {
  const dispatch = useDispatch()


  const movies = useSelector(
    ({ moviesState }: AppState) =>
      moviesState && moviesState.fetchMoviesSuccess
  )
  console.log("SearchScreen:FC ---------> movies", movies)
  const testSearchTerm: string = 'Avengers'


  useEffect(() => {
    dispatch(fetchMovies(testSearchTerm))
  }, [])


  return (
    <View style={styles.mainView}>
      <Text>This is the search View</Text>
    </View>
  )
}

export default SearchScreen