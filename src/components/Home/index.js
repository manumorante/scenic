import React, { useState, useEffect } from 'react'
import { Domain } from '../../domain'
import { Logo } from '../Logo'
import { MovieList } from '../MovieList'

export const Home = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])

  useEffect(function () {
    domain.GetMovieByIdUseCase.execute().then((response) => {
      console.log('response', response)
      setMovies(response)
    })
  }, [])

  return (
    <div className="Home page">
      <Logo />
      <p>Pet Project</p>

      <MovieList movies={movies} />
    </div>
  )
}
