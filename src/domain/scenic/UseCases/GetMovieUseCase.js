import { UseCase } from '../../domain'
import { MoviesRepository } from '../Repositories/MoviesRepository.js'

export class GetMovieUseCase extends UseCase {
  static create() {
    const repository = new MoviesRepository.create()
    return new GetMovieUseCase({ repository })
  }

  constructor({ repository }) {
    super()
    this._repository = repository
  }

  async execute({ movieID }) {
    return await this._repository.getMovie({ movieID })
  }
}
