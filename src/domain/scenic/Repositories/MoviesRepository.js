import { config } from '../../config.js'
import { Repository } from '../../domain.js'

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
}
