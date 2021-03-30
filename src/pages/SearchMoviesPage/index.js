import React, { useState, useEffect, useContext } from 'react'
import { Domain } from '../../domain'
import { useParams } from 'react-router'
import UIContext from '../../context/UIContext.js'
import { MovieList } from '../../components/MovieList'

export const SearchMoviesPage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const { keywordsParams } = useParams()
  const { keywordsSearch, setKeywordsSearch } = useContext(UIContext)
  const keywords = keywordsParams ? keywordsParams : keywordsSearch

  useEffect(
    function () {
      console.log('effect')
      setKeywordsSearch(keywords)
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
