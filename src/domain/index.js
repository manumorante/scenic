const interOP = (fn, name) => () => fn().then((mod) => mod[name])
// prettier-ignore
const UseCases = {
  GetTrendingMoviesUseCase: interOP(() => import('./scenic/UseCases/GetTrendingMoviesUseCase.js'), 'GetTrendingMoviesUseCase'),
  GetMovieUseCase: interOP(() => import('./scenic/UseCases/GetMovieUseCase.js'), 'GetMovieUseCase')
}

export class Domain {
  static create() {
    return new Domain()
  }

  get GetTrendingMoviesUseCase() {
    return this._getter('GetTrendingMoviesUseCase')
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
