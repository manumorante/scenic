import { Movies } from './domain/index.js'
;(async function run() {
  const movies = Movies.create()

  const messageToShow = await movies.ShowMessageUseCase.execute({
    message: 'Hello World!',
  })

  console.log('messageToShow', messageToShow)
})()
