import React, { FC, useEffect } from 'react'
import { ActivityIndicator, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/Card'
import AppState from '../../types/AppState'
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
  const testSearchTerm: string = 'super man'

  useEffect(() => {
    dispatch(fetchMovies(testSearchTerm))
  }, [testSearchTerm])

  return (
    <>
      <FlatList
        data={movies}
        renderItem={itemData =>
          <Card
            title={itemData.item.Title}
            imageUri={itemData.item.Poster}

          />}
        keyExtractor={(item) => item.imdbID}
      />
      {fetchingMovies && <ActivityIndicator size={'large'} color={'black'} />}
    </>
  )
}

export default SearchScreen