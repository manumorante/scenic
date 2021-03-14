import { UseCase } from '../../domain'
import { MoviesRepository } from '../Repositories/MoviesRepository.js'

export class GetTrendingMoviesUseCase extends UseCase {
  static create() {
    const repository = new MoviesRepository.create()
    return new GetTrendingMoviesUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  execute() {
    return this._repository.getTrendingMovies()
  }
}
