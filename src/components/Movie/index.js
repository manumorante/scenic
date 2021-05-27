import React from 'react'
import { Link } from 'react-router-dom'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

export function Movie({ id, poster }) {
  return (
    <Link className="Movie" to={`/movie/${id}`}>
      <div className="Movie__poster">
        <MoviePoster poster={poster} />
      </div>
    </Link>
  )
}
