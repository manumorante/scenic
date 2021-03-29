const interOP = (fn, name) => () => fn().then((mod) => mod[name])
// prettier-ignore
const UseCases = {
  GetTrendingMoviesUseCase: interOP(() => import('./scenic/UseCases/GetTrendingMoviesUseCase.js'), 'GetTrendingMoviesUseCase'),
  GetTopRatedMoviesUseCase: interOP(() => import('./scenic/UseCases/GetTopRatedMoviesUseCase.js'), 'GetTopRatedMoviesUseCase'),
  GetMoviesByKeywordsUseCase: interOP(() => import('./scenic/UseCases/GetMoviesByKeywordsUseCase.js'), 'GetMoviesByKeywordsUseCase'),
  GetMovieUseCase: interOP(() => import('./scenic/UseCases/GetMovieUseCase.js'), 'GetMovieUseCase')
}

export class Domain {
  static create() {
    return new Domain()
  }

  get GetTrendingMoviesUseCase() {
    return this._getter('GetTrendingMoviesUseCase')
  }

  get GetTopRatedMoviesUseCase() {
    return this._getter('GetTopRatedMoviesUseCase')
  }

  get GetMoviesByKeywordsUseCase() {
    return this._getter('GetMoviesByKeywordsUseCase')
  }

  get GetMovieUseCase() {
    return this._getter('GetMovieUseCase')
  }

  _getter(name) {
    return {
      async execute() {
        const klass = await UseCases[name]()
        const response = klass.create().execute(...arguments)
        return response
      }
    }
  }
}
