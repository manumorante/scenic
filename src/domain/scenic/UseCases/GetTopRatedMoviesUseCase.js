import { UseCase } from '../../domain'
import { MoviesRepository } from '../Repositories/MoviesRepository'

export class GetTopRatedMoviesUseCase extends UseCase {
  static create() {
    const repository = new MoviesRepository.create()
    return new GetTopRatedMoviesUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  execute() {
    return this._repository.getTopRatedMovies()
  }
}
