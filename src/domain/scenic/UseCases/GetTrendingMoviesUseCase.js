import { config } from '../../config.js'
import { UseCase } from '../../domain'

const fromApiTo = (apiResponse) => {
  const { results = [] } = apiResponse
  return results
}

export class GetTrendingMoviesUseCase extends UseCase {
  static create() {
    return new GetTrendingMoviesUseCase()
  }

  execute() {
    const apiURL = `${config.apiURL}/trending/movie/week?api_key=${config.apiKey}`

    return fetch(apiURL)
      .then((res) => res.json())
      .then(fromApiTo)
  }
}
