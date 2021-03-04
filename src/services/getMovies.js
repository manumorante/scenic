import { API_KEY, API_URL } from './config.js'

const parseMovies = (apiResponse) => {
  const { list = [] } = apiResponse

  const movies = list.map((movie) => {
    const { id, name, description, html, bg, steps } = movie

    return { id, name, description, html, bg, steps }
  })

  return movies
}

export default function getMovies() {
  const apiURL = `${API_URL}/trending/movie/week?api_key=${API_KEY}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(parseMovies)
}
