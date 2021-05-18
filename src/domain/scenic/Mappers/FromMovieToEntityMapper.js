import { Mapper } from "../../domain"
import { MovieEntity } from "../Models/MovieEntity"
import { config } from "../../config"

export class FromMovieToEntityMapper extends Mapper {
  static create() {
    return new FromMovieToEntityMapper()
  }

  map(rawApiResponse) {
    const { imgBaseURL } = config
    const {
      id,
      poster_path,
      title,
      vote_average,
      release_date,
      overview
    } = rawApiResponse

    const poster = `${imgBaseURL}/${poster_path}`

    const movieEntity = MovieEntity.create({
      id,
      poster,
      title,
      rating: vote_average,
      released: release_date,
      description: overview
    })

    return movieEntity
  }
}