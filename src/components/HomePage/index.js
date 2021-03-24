import React, { useState, useEffect, useContext } from 'react'

import { Domain } from '../../domain'
import SearchContext from '../../context/searchContext.js'
import { MovieList } from '../MovieList'

export const HomePage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const { keywords } = useContext(SearchContext)

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
