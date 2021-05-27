import React from 'react'
import { Movie } from '../Movie'
import './styles.scss'

export function MovieList({ movies, className = '' }) {
  return (
    <div className={`MovieList ${className}`}>
      {movies.map((movie) => (
        <Movie key={movie.id()} id={movie.id()} poster={movie.poster()} />
      ))}
    </div>
  )
}
