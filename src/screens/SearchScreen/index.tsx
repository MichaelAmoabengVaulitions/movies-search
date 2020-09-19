import React, { FC, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Movie } from '../../types/Movie'

import { styles } from './styles'

const SearchScreen: FC = () => {
  const apiKey: string = 'cff54c90'
  const testSearchTerm: string = 'Avengers'
  const Url = `http://www.omdbapi.com/?s=${testSearchTerm}&apikey=${apiKey}`

  const [data, setData] = useState<Movie[]>()
  console.log("SearchScreen:FC -> data", data as Movie[])

  useEffect(() => {
    fetch(Url).then((results) => {

      setData(results.json() as unknown as Movie[])

    }).catch(error => {
      console.log(error)
    })
  }, [testSearchTerm])

  return (
    <View style={styles.mainView}>
      <Text>This is the search View</Text>
    </View>
  )
}

export default SearchScreen