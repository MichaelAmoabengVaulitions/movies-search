import { ImageURISource } from "react-native";

export interface Movie {
  imdbID: string
  Title: string
  Type: string
  Year: string
  Poster: ImageURISource
}
