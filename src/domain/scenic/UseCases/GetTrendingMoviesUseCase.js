import { config } from '../../config.js'

const fromApiTo = (apiResponse) => {
  const { results = [] } = apiResponse
  return results
}

export function getTrendingMovies() {
  const apiURL = `${config.apiURL}/trending/movie/week?api_key=${config.apiKey}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiTo)
}
