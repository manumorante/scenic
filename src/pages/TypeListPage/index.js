import React, { useState, useEffect } from 'react'
import { Domain } from '../../domain'
import { useParams } from 'react-router'
import { MovieList } from '../../components/MovieList'
import './styles.scss'

export const TypeListPage = () => {
  const domain = Domain.create()
  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(1)
  const { type = 'popular' } = useParams()

  const nextPage = () => {
    const newPage = page + 1
    console.log('newPage', newPage)
    setPage(newPage)
  }

  useEffect(
    function () {
      switch (type) {
        case 'popular':
          domain.GetTrendingMoviesUseCase.execute({ page: page }).then(setMovies)
          break

        case 'top-rated':
          domain.GetTopRatedMoviesUseCase.execute().then(setMovies)
          break

        default:
          console.log(`[TypeListPage] No type: ${type}`)
      }
    },
    [type, page]
  )

  return (
    <div className="TypeListPage container">
      <MovieList movies={movies} className="TypeListPage__MovieList" />
      <button onClick={nextPage} className="Button">Siguiente</button>
    </div>
  )
}
