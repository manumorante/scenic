import React from 'react'
import { Movie } from '../Movie'
import './styles.scss'

export function SimilarMovies({ movies }) {
  return (
    <div className="SimilarMovies">
      {movies.map((movie) => (
        <Movie key={movie.id()} id={movie.id()} poster={movie.poster()} />
      ))}
    </div>
  )
}
