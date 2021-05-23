import React from 'react'
import { Link } from 'react-router-dom'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

export function Movie({ movie }) {
  return (
    <Link className="Movie" to={`/movie/${movie.id()}`}>
      <div className="Movie__poster">
        <MoviePoster posterPath={movie.poster()} />
      </div>
    </Link>
  )
}
