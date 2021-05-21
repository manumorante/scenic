import React, { useState, useEffect } from 'react'
import { Domain } from '../../domain'
import { useParams } from 'react-router'
import { MovieList } from '../../components/MovieList'

export const TypeListPage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const { type = 'popular' } = useParams()

  useEffect(
    function () {
      switch (type) {
        case 'popular':
          console.log('type popular')
          domain.GetTrendingMoviesUseCase.execute().then(setMovies)
          break

        case 'top-rated':
          console.log('type top-rated')
          domain.GetTopRatedMoviesUseCase.execute().then(setMovies)
          break

        default:
          console.log(`Nada para ${type}`)
      }
    },
    [type]
  )

  return (
    <div className="TypeListPage">
      <div className="container">
        <MovieList movies={movies} />
      </div>
    </div>
  )
}
