import { Repository } from '../../domain.js'
import { FromMovieToEntityMapper } from "../Mappers/FromMovieToEntityMapper"
import { config } from '../../config.js'

// Convertir en Mapper
// Devolver "Entity"
const fromApiTo = (apiResponse) => {
  const { results = [] } = apiResponse
  return results
}

export class MoviesRepository extends Repository {
  static create() {
    return new MoviesRepository()
  }

  async getTrendingMovies() {
    const apiURL = `${config.apiURL}/trending/movie/week?api_key=${config.apiKey}`

    return fetch(apiURL)
      .then((res) => res.json())
      .then(fromApiTo)
  }

  async getTopRatedMovies() {
    const apiURL = `${config.apiURL}/movie/top_rated?api_key=${config.apiKey}`

    return fetch(apiURL)
      .then((res) => res.json())
      .then(fromApiTo)
  }

  async getMoviesByKeywords({ keywords }) {
    const apiURL = `${config.apiURL}/search/movie?language=en-US&query=${keywords}&api_key=${config.apiKey}`

    return fetch(apiURL)
      .then((res) => res.json())
      .then(fromApiTo)
  }

  async getMovie({ movieID }) {
    const apiURL = `${config.apiURL}/movie/${movieID}?api_key=${config.apiKey}&append_to_response=credits`

    const response = fetch(apiURL)
      .then((response) => response.json())

    const movieEntityMapper = FromMovieToEntityMapper.create()
    const responseEntity = movieEntityMapper.map(response)

    return response
  }
}
