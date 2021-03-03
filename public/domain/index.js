const interOP = (fn, name) => () => fn().then((mod) => mod[name])
const UseCases = {
  ShowMessageUseCase: interOP(() => import('./user/UseCases/ShowMessageUseCase.js'), 'ShowMessageUseCase'), // prettier-ignore
}

export class Movies {
  static create() {
    return new Movies()
  }

  get ShowMessageUseCase() {
    return this._getter('ShowMessageUseCase')
  }

  /**
   * @param {string} name
   * */
  _getter(name) {
    return {
      async execute() {
        const klass = await UseCases[name]()
        const response = klass.create().execute(...arguments)
        return response
      },
    }
  }
}
