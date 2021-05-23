import { Repository } from '../../domain'
import { FromMovieToEntityMapper } from "../Mappers/FromMovieToEntityMapper"
import { config } from '../../config'

export class MoviesRepository extends Repository {
  static create() {
    return new MoviesRepository()
  }

  async getMovie({ movieID }) {
    const apiURL = `${config.apiURL}/movie/${movieID}?api_key=${config.apiKey}&append_to_response=credits`
    const response = await fetch(apiURL).then((response) => response.json())
    const movieEntityMapper = FromMovieToEntityMapper.create()
    return movieEntityMapper.map(response)
  }

  async getMovies(apiURL) {
    const response = await fetch(apiURL).then((response) => response.json())
    const { results = [] } = response
    const movieEntityMapper = FromMovieToEntityMapper.create()
    const output = []

    results.forEach((movie) => {
      output.push(movieEntityMapper.map(movie))
    })
    
    return output
  }

  async getTrendingMovies() {
    const apiURL = `${config.apiURL}/trending/movie/week?api_key=${config.apiKey}`
    return await this.getMovies(apiURL)
  }  

  async getTopRatedMovies() {
    const apiURL = `${config.apiURL}/movie/top_rated?api_key=${config.apiKey}`
    return await this.getMovies(apiURL)
  }

  async getMoviesByKeywords({ keywords }) {
    const apiURL = `${config.apiURL}/search/movie?language=en-US&query=${keywords}&api_key=${config.apiKey}`
    return await this.getMovies(apiURL)
  }  
}
