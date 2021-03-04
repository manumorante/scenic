import React, { useState, useEffect } from 'react'
import { Movie } from '../Movie'
import { getTrendingMovies } from '../../services/getTrendingMoviesService.js'

export function MovieList() {
  const [movies, setMovies] = useState([])

  useEffect(function () {
    getTrendingMovies().then(setMovies)
  }, [])

  return (
    <div className="MovieList">
      {console.log(movies)}

      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  )
}
