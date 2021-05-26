import { Mapper } from "../../domain"
import { MovieEntity } from "../Models/MovieEntity"

export class FromMovieListToEntityMapper extends Mapper {
  static create() {
    return new FromMovieListToEntityMapper()
  }

  map(rawApiResponse) {
    const { results } = rawApiResponse
    const movieListArray = []    

    results.map((movie) => {
      const {
        id,
        poster_path,
        title,
        vote_average,
        release_date,
        overview
      } = movie

      // Este array push se debe sustituir por el Value Object
      // El VO lleva el bucle dentro. Ver: MovieListValueObject.js
      movieListArray.push(MovieEntity.create({
        id,
        poster_path,
        title,
        rating: vote_average,
        released: release_date,
        description: overview
      }))
    })

    return movieListArray
  }
}