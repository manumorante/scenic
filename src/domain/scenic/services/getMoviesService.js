import { config } from '../../config.js'

const parseMovies = (apiResponse) => {
  const { list = [] } = apiResponse

  const movies = list.map((movie) => {
    const { id, name, description, html, bg, steps } = movie

    return { id, name, description, html, bg, steps }
  })

  return movies
}

export default function getMoviesService() {
  const apiURL = `${config.apiUrl}/trending/movie/week?api_key=${API_KEY}`

  return fetch(apiURL)
    .then((res) => res.json())
    .then(parseMovies)
}
