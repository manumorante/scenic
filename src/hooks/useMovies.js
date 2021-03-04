import { useEffect, useState } from 'react'
import getMovies from '../services/getMovies'

export function useMovies () {
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])

  useEffect(function () {
    setLoading(true)
    getMovies()
      .then(movies => {
        setMovies(movies)
        setLoading(false)
      })
  }, [])

  return { loading, movies }
}
