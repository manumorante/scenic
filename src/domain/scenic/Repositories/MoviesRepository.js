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
    console.log('apiURL', apiURL)

    return fetch(apiURL)
      .then((res) => res.json())
      .then(fromApiTo)
  }

  async getTopRatedMovies() {
    const apiURL = `${config.apiURL}/movie/top_rated?api_key=${config.apiKey}`
    console.log('apiURL', apiURL)

    return fetch(apiURL)
      .then((res) => res.json())
      .then(fromApiTo)
  }

  async getMoviesByKeywords({ keywords }) {
    const apiURL = `${config.apiURL}/search/movie?language=en-US&query=${keywords}&api_key=${config.apiKey}`
    console.log('apiURL', apiURL)

    return fetch(apiURL)
      .then((res) => res.json())
      .then(fromApiTo)
  }

  async getMovie({ movieID }) {
    const apiURL = `${config.apiURL}/movie/${movieID}?api_key=${config.apiKey}&append_to_response=credits`
    console.log('apiURL', apiURL)

    return fetch(apiURL).then((res) => res.json())
  }
}
