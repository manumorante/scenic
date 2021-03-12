import { useEffect, useState } from 'react'
import getMoviesService from '../services/getMoviesService'

export function useMovies() {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(function () {
    setLoading(true)
    getMoviesService().then((movies) => {
      setMovies(movies)
      setLoading(false)
    })
  }, [])

  return { loading, movies }
}
