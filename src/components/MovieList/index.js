import React from 'react'
import { Movie } from '../Movie'
import './styles.scss'

export function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <Movie key={movie.id()} id={movie.id()} poster={movie.poster()} />
      ))}
    </div>
  )
}
