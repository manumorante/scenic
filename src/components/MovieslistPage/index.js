import React, { useState, useEffect, useContext } from 'react'

import { Domain } from '../../domain'
import UIContext from '../../context/UIContext.js'
import { MovieList } from '../MovieList'

export const HomePage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const { keywords } = useContext(UIContext)

  const showTrending = () => {
    domain.GetTrendingMoviesUseCase.execute().then(setMovies)
  }

  useEffect(function () {
    domain.GetTrendingMoviesUseCase.execute().then(setMovies)
  }, [])

  return (
    <div className="Home">
      <div className="container">
        {keywords ? <div>{keywords}</div> : <MovieList movies={movies} />}
      </div>
    </div>
  )
}
