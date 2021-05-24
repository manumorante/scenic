import { UseCase } from '../../domain'
import { MoviesRepository } from '../Repositories/MoviesRepository'

export class GetSimilarMoviesUseCase extends UseCase {
  static create() {
    const repository = new MoviesRepository.create()
    return new GetSimilarMoviesUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  execute({ movieID }) {
    return this._repository.getSimilarMovies({ movieID })
  }
}
