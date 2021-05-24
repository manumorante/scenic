import { Mapper } from "../../domain"
import { MovieEntity } from "../Models/MovieEntity"

export class FromMovieToEntityMapper extends Mapper {
  static create() {
    return new FromMovieToEntityMapper()
  }

  getDirectors(credits) {
    const directors = []
    const { crew = [] } = credits

    crew.forEach(function (entry) {
      if (entry.job === 'Director') {
        directors.push(entry.name)
      }
    })
    return directors.join(', ')
  }

  map(rawApiResponse) {
    const {
      id,
      poster_path,
      title,
      vote_average,
      release_date,
      overview,
      credits = []
    } = rawApiResponse

    const directors = this.getDirectors(credits)

    const movieEntity = MovieEntity.create({
      id,
      directors,
      poster_path,
      title,
      rating: vote_average,
      released: release_date,
      description: overview
    })

    return movieEntity
  }
}