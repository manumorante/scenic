import { API_KEY, API_URL } from './config.js'

const fromApiTo = (apiResponse) => {
  const { results = [] } = apiResponse
  return results
}

export function getTrendingMovies() {
  const apiURL = `${API_URL}/trending/movie/week?api_key=${API_KEY}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(fromApiTo)
}
