import React from 'react'
import { Movie } from '../Movie'
import './styles.scss'

export function MovieList({ movies }) {
  return (
    <div className="MovieList">
      {movies.map((movie) => (
        <div key={movie.id()}>
          <Movie movie={movie} />
          <p>{movie.title()}</p>
        </div>
      ))}
    </div>
  )
}
