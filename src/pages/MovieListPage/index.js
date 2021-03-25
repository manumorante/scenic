import React, { useState, useEffect, useContext } from 'react'

import { Domain } from '../../domain'
import UIContext from '../../context/UIContext.js'
import { MovieList } from '../../components/MovieList'

export const MovieListPage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const { keywords } = useContext(UIContext)

  useEffect(function () {
    domain.GetTrendingMoviesUseCase.execute().then(setMovies)
  }, [])

  return (
    <div className="MovieListPage">
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}
