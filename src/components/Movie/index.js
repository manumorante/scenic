import React from 'react'
import { Link } from 'react-router-dom'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

export function Movie({ movie }) {
  const { id, title, vote_average, poster_path } = movie

  return (
    <div className="Movie">
      <Link className="Movie__link" to={`/${id}`}>
        <div className="Movie__poster">
          <MoviePoster posterPath={poster_path} />
        </div>
      </Link>
    </div>
  )
}
