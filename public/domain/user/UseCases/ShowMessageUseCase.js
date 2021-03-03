import { UseCase } from '../../domain.js'

export class ShowMessageUseCase extends UseCase {
  static create() {
    return new ShowMessageUseCase()
  }

  async execute({ message }) {
    const responseObj = {
      message: message,
    }

    return responseObj
  }
}
