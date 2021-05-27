import { Repository } from '../../domain'
import { FromMovieToEntityMapper } from "../Mappers/FromMovieToEntityMapper"
import { FromMovieListToEntityMapper } from "../Mappers/FromMovieListToEntityMapper"
import { config } from '../../config'

export class MoviesRepository extends Repository {
  static create() {
    return new MoviesRepository()
  }

  async getMovie({ movieID }) {
    const apiURL = `${config.apiURL}/movie/${movieID}?language=${config.lang}&api_key=${config.apiKey}&append_to_response=credits`
    const response = await fetch(apiURL).then((response) => response.json())
    const movieEntityMapper = FromMovieToEntityMapper.create()
    return movieEntityMapper.map(response)
  }

  async getMovies(apiURL) {
    const response = await fetch(apiURL).then((response) => response.json())
    const movieListEntityMapper = FromMovieListToEntityMapper.create()    
    return movieListEntityMapper.map(response)
  }

  async getTrendingMovies({ page }) {
    const apiURL = `${config.apiURL}/trending/movie/week?page=${page}&language=${config.lang}&api_key=${config.apiKey}`
    console.log('apiURL', apiURL)
    return await this.getMovies(apiURL)
  }  

  async getTopRatedMovies() {
    const apiURL = `${config.apiURL}/movie/top_rated?language=${config.lang}&api_key=${config.apiKey}`
    return await this.getMovies(apiURL)
  }

  async getMoviesByKeywords({ keywords }) {
    const apiURL = `${config.apiURL}/search/movie?language=${config.lang}&query=${keywords}&api_key=${config.apiKey}`
    return await this.getMovies(apiURL)
  }

  async getSimilarMovies({ movieID }) {
    const apiURL = `${config.apiURL}/movie/${movieID}/similar?language=${config.lang}&api_key=${config.apiKey}`
    return await this.getMovies(apiURL)
  }
}
