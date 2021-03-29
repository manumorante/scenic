import React, { useState, useEffect, useContext } from 'react'
import { Domain } from '../../domain'
import { useParams } from 'react-router'
import UIContext from '../../context/UIContext.js'
import { MovieList } from '../../components/MovieList'

export const SearchMoviesPage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const { keywordsParam } = useParams()
  const { keywords, setKeywords } = useContext(UIContext)

  useEffect(
    function () {
      if (keywordsParam) {
        console.log('keywordsParam', keywordsParam)
        setKeywords(keywordsParam)
      }
      console.log('keywords', keywords)
      domain.GetMoviesByKeywordsUseCase.execute({ keywords }).then(setMovies)
    },
    [keywords]
  )

  return (
    <div className="SearchMoviesPage">
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}
