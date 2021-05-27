import { Mapper } from "../../domain"
import { MovieEntity } from "../Models/MovieEntity"
import { config } from "../../config"

export class FromMovieToEntityMapper extends Mapper {
  static create() {
    return new FromMovieToEntityMapper()
  }

  getDirectors(credits) {
    const directorsArr = credits?.crew?.filter(entry => entry.job === 'Director')
    return directorsArr?.map(director => director.name).join(', ')
  }
  
  // For the current year return the month
  getDate(dateStr) {
    const currentYear = new Date().getFullYear()
    const released = new Date(dateStr);
    const year = released.getFullYear()
    const month = released.getMonth()
    
    return (year == currentYear) ? config.monthNames[month] : year
  }

  map(rawApiResponse) {
    const {
      id,
      poster_path: poster,
      title,
      vote_average,
      release_date,
      overview,
      credits = []
    } = rawApiResponse

    const directors = this.getDirectors(credits)
    const released = this.getDate(release_date)

    const movieEntity = MovieEntity.create({
      id,
      directors,
      poster,
      title,
      rating: vote_average,
      released: released,
      description: overview
    })

    return movieEntity
  }
}