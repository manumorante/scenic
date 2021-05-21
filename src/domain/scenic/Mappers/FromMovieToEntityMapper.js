import { Mapper } from "../../domain"
import { MovieEntity } from "../Models/MovieEntity"

export class FromMovieToEntityMapper extends Mapper {
  static create() {
    return new FromMovieToEntityMapper()
  }

  map(rawApiResponse) {
    const {
      id,
      poster_path,
      title,
      vote_average,
      release_date,
      overview
    } = rawApiResponse

    const movieEntity = MovieEntity.create({
      id,
      poster_path,
      title,
      rating: vote_average,
      released: release_date,
      description: overview
    })

    return movieEntity
  }
}