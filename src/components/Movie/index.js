import React from 'react'
import { Link } from 'react-router-dom'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

export function Movie({ movie }) {
  const { id, title, vote_average, poster_path } = movie

  return (
    <Link className="Movie" to={`/movie/${id}`}>
      <div className="Movie__poster">
        <MoviePoster posterPath={poster_path} />
      </div>
    </Link>
  )
}
