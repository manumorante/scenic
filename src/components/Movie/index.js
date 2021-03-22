import React from 'react'
import { Link } from 'react-router-dom'
import { MoviePoster } from '../MoviePoster'
import './styles.scss'

export function Movie({ movie }) {
  const { id, title, vote_average } = movie

  return (
    <div className="Movie">
      <Link to={`/movie/${id}`}>
        <div className="Movie__poster">
          <MoviePoster movie={movie} />
        </div>

        <div className="Movie__title">
          {title} ({vote_average})
        </div>
      </Link>
    </div>
  )
}
