import { UseCase } from '../../domain'
import { MoviesRepository } from '../Repositories/MoviesRepository.js'

export class GetMoviesByKeywordsUseCase extends UseCase {
  static create() {
    const repository = new MoviesRepository.create()
    return new GetMoviesByKeywordsUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  execute({ keywords }) {
    return this._repository.getMoviesByKeywords({ keywords })
  }
}
