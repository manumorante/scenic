import React from 'react'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

export function SimilarMovies({ movies }) {
  return (
    <div className="SimilarMovies">
      {movies.map((movie) => (
        <a key={movie.id()} href={`/movie/${movie.id()}`}>
          <MoviePoster poster={movie.poster()}></MoviePoster>
        </a>
      ))}
    </div>
  )
}
