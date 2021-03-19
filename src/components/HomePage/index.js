import React, { useState, useEffect } from 'react'
import { Domain } from '../../domain'
import { Logo } from '../Logo'
import { MovieList } from '../MovieList'

export const HomePage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])

  useEffect(function () {
    domain.GetTrendingMoviesUseCase.execute().then(setMovies)
  }, [])

  return (
    <div className="Home page">
      <Logo />
      <MovieList movies={movies} />
    </div>
  )
}
