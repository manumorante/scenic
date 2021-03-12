const interOP = (fn, name) => () => fn().then((mod) => mod[name])
const UseCases = {
  // GetTrendingMoviesUseCase: interOP(
  //   () => import("./scenic/UseCases/GetTrendingMoviesUseCase.js"),
  //   "GetTrendingMoviesUseCase"
  // )
}

export class Domain {
  static create() {
    return new Domain()
  }

  get GetMovieByIdUseCase() {
    return this._getter('GetTrendingMoviesUseCase')
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
