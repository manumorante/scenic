import { UseCase } from '../../domain'
import { MoviesRepository } from '../Repositories/MoviesRepository'

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
    const movieEntity = await this._repository.getMovie({ movieID })
    return movieEntity.toJSON()
  }
}
