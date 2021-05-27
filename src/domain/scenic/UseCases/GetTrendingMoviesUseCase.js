import { UseCase } from '../../domain'
import { MoviesRepository } from '../Repositories/MoviesRepository'

export class GetTrendingMoviesUseCase extends UseCase {
  static create() {
    const repository = new MoviesRepository.create()
    return new GetTrendingMoviesUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  execute({ page }) {
    return this._repository.getTrendingMovies({ page })
  }
}
